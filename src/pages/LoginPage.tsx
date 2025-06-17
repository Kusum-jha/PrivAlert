import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      console.log('User already authenticated, redirecting to home');
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, authLoading, navigate]);

  // Don't render the form if still checking auth or already authenticated
  if (authLoading || isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center" data-id="fphc4gazh" data-path="src/pages/LoginPage.tsx">
        <div className="text-center" data-id="7zruzamyc" data-path="src/pages/LoginPage.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600 mx-auto" data-id="355113ffd" data-path="src/pages/LoginPage.tsx"></div>
          <p className="mt-2 text-sage-600 dark:text-sage-400" data-id="bu3jqi4bz" data-path="src/pages/LoginPage.tsx">Loading...</p>
        </div>
      </div>);

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      const error = await login(email, password);
      if (error) {
        toast({
          title: 'Login Failed',
          description: error,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Success',
          description: 'Welcome back!'
        });
        navigate('/', { replace: true });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="nx5syr5yl" data-path="src/pages/LoginPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md" data-id="nf8318r37" data-path="src/pages/LoginPage.tsx">

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="moyxivupr" data-path="src/pages/LoginPage.tsx">
          <CardHeader className="text-center pb-6" data-id="nqtl1y6dj" data-path="src/pages/LoginPage.tsx">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-sage-500 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="0rwj73jut" data-path="src/pages/LoginPage.tsx">

              <Lock className="w-8 h-8 text-white" data-id="f496wptth" data-path="src/pages/LoginPage.tsx" />
            </motion.div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-mint-600 bg-clip-text text-transparent" data-id="8oiroq1hl" data-path="src/pages/LoginPage.tsx">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-sage-700 dark:text-sage-300" data-id="plbtwrlcf" data-path="src/pages/LoginPage.tsx">
              Sign in to your Privacy Guardian account
            </CardDescription>
          </CardHeader>
          <CardContent data-id="htwvhtyye" data-path="src/pages/LoginPage.tsx">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="5ixxdudp2" data-path="src/pages/LoginPage.tsx">
              <div className="space-y-2" data-id="9xztikiz3" data-path="src/pages/LoginPage.tsx">
                <div className="relative" data-id="1c7kjveca" data-path="src/pages/LoginPage.tsx">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="iwvb7ca6d" data-path="src/pages/LoginPage.tsx" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="vjm28t8aa" data-path="src/pages/LoginPage.tsx" />

                </div>
              </div>
              <div className="space-y-2" data-id="o3yhvo0ss" data-path="src/pages/LoginPage.tsx">
                <div className="relative" data-id="04kw5k5tn" data-path="src/pages/LoginPage.tsx">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="3j82i8s3o" data-path="src/pages/LoginPage.tsx" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="urruezl7v" data-path="src/pages/LoginPage.tsx" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sage-500 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-200" data-id="136ltuecz" data-path="src/pages/LoginPage.tsx">

                    {showPassword ? <EyeOff className="h-5 w-5" data-id="e2c3gxv6a" data-path="src/pages/LoginPage.tsx" /> : <Eye className="h-5 w-5" data-id="58j4mx76k" data-path="src/pages/LoginPage.tsx" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between" data-id="omda0lh9q" data-path="src/pages/LoginPage.tsx">
                <Link
                  to="/forgot-password"
                  className="text-sm text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200 underline" data-id="2neyshmac" data-path="src/pages/LoginPage.tsx">

                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={isLoading} data-id="60xasxaii" data-path="src/pages/LoginPage.tsx">

                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            <div className="mt-6 text-center" data-id="nwgyhlrol" data-path="src/pages/LoginPage.tsx">
              <p className="text-sage-700 dark:text-sage-300" data-id="rsv3n9o8x" data-path="src/pages/LoginPage.tsx">
                Don't have an account?{' '}
                <Link to="/register" className="text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200 font-semibold underline" data-id="khe6v9exk" data-path="src/pages/LoginPage.tsx">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default LoginPage;