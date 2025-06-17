import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  ID: number;
  Name: string;
  Email: string;
  CreateTime: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  register: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  sendResetEmail: (email: string) => Promise<string | null>;
  resetPassword: (token: string, password: string) => Promise<string | null>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Store authentication state in localStorage
  const storeAuthState = (userData: User | null) => {
    if (userData) {
      localStorage.setItem('auth_user', JSON.stringify(userData));
      localStorage.setItem('is_authenticated', 'true');
    } else {
      localStorage.removeItem('auth_user');
      localStorage.removeItem('is_authenticated');
    }
  };

  // Load authentication state from localStorage
  const loadAuthState = (): User | null => {
    try {
      const storedUser = localStorage.getItem('auth_user');
      const isAuthenticated = localStorage.getItem('is_authenticated');

      if (storedUser && isAuthenticated === 'true') {
        return JSON.parse(storedUser);
      }
    } catch (error) {
      console.error('Error loading auth state from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('auth_user');
      localStorage.removeItem('is_authenticated');
    }
    return null;
  };

  const checkAuthStatus = async () => {
    try {
      // First check if we have a stored authentication state
      const storedUser = loadAuthState();
      if (storedUser) {
        setUser(storedUser);
        setIsLoading(false);

        // Verify with server in the background
        try {
          const { data, error } = await window.ezsite.apis.getUserInfo();
          if (error) {
            // Server says we're not authenticated, clear local state
            console.log('Server authentication check failed, clearing local state');
            setUser(null);
            storeAuthState(null);
          } else if (JSON.stringify(data) !== JSON.stringify(storedUser)) {
            // Update user data if it has changed on server
            setUser(data);
            storeAuthState(data);
          }
        } catch (error) {
          console.error('Background auth verification error:', error);
          // Keep local state but log the error
        }
        return;
      }

      // No stored state, check with server
      const { data, error } = await window.ezsite.apis.getUserInfo();
      if (error) {
        setUser(null);
        storeAuthState(null);
      } else {
        setUser(data);
        storeAuthState(data);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setUser(null);
      storeAuthState(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.login({ email, password });
      if (error) {
        return error;
      }

      // Get updated user info after successful login
      const { data: userData, error: userError } = await window.ezsite.apis.getUserInfo();
      if (userError) {
        return userError;
      }

      setUser(userData);
      storeAuthState(userData);
      console.log('User logged in successfully:', userData?.Email);
      return null;
    } catch (error) {
      console.error('Login error:', error);
      return 'An unexpected error occurred during login';
    }
  };

  const register = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.register({ email, password });
      if (error) {
        return error;
      }
      return null;
    } catch (error) {
      console.error('Registration error:', error);
      return 'An unexpected error occurred during registration';
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await window.ezsite.apis.logout();
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local state regardless of API result
      setUser(null);
      storeAuthState(null);
    }
  };

  const sendResetEmail = async (email: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({ email });
      return error || null;
    } catch (error) {
      console.error('Send reset email error:', error);
      return 'An unexpected error occurred while sending reset email';
    }
  };

  const resetPassword = async (token: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.resetPassword({ token, password });
      return error || null;
    } catch (error) {
      console.error('Reset password error:', error);
      return 'An unexpected error occurred while resetting password';
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    sendResetEmail,
    resetPassword,
    checkAuthStatus
  };

  return <AuthContext.Provider value={value} data-id="runrmizm3" data-path="src/context/AuthContext.tsx">{children}</AuthContext.Provider>;
};