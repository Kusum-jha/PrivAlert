import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { resetPassword, isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      toast({
        title: 'Invalid Link',
        description: 'This password reset link is invalid or has expired.',
        variant: 'destructive'
      });
      navigate('/login');
      return;
    }

    // Redirect if already authenticated (no need to reset password if already logged in)
    if (!authLoading && isAuthenticated) {
      console.log('User already authenticated, redirecting to home');
      navigate('/', { replace: true });
    }
  }, [token, navigate, toast, isAuthenticated, authLoading]);

  // Don't render the form if still checking auth or already authenticated
  if (authLoading || isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center" data-id="5qlqaczof" data-path="src/pages/ResetPasswordPage.tsx">
        <div className="text-center" data-id="qyfm2657l" data-path="src/pages/ResetPasswordPage.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600 mx-auto" data-id="rd022l8fj" data-path="src/pages/ResetPasswordPage.tsx"></div>
          <p className="mt-2 text-sage-600 dark:text-sage-400" data-id="iww6ofdwd" data-path="src/pages/ResetPasswordPage.tsx">Loading...</p>
        </div>
      </div>);

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive'
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long',
        variant: 'destructive'
      });
      return;
    }

    if (!token) return;

    setIsLoading(true);
    try {
      const error = await resetPassword(token, password);
      if (error) {
        toast({
          title: 'Reset Failed',
          description: error,
          variant: 'destructive'
        });
      } else {
        setIsSuccess(true);
        toast({
          title: 'Success',
          description: 'Your password has been reset successfully!'
        });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
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

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="pae2jcc89" data-path="src/pages/ResetPasswordPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md" data-id="ke0b1t5on" data-path="src/pages/ResetPasswordPage.tsx">

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="uv9h5qgmx" data-path="src/pages/ResetPasswordPage.tsx">
            <CardHeader className="text-center pb-6" data-id="v0uf1j8rr" data-path="src/pages/ResetPasswordPage.tsx">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-mint-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="136ih06lk" data-path="src/pages/ResetPasswordPage.tsx">

                <CheckCircle className="w-8 h-8 text-white" data-id="211u5b2f0" data-path="src/pages/ResetPasswordPage.tsx" />
              </motion.div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-mint-600 to-sage-600 bg-clip-text text-transparent" data-id="7p4scc4ys" data-path="src/pages/ResetPasswordPage.tsx">
                Password Reset Successfully
              </CardTitle>
              <CardDescription className="text-sage-700 dark:text-sage-300" data-id="b0gi0923l" data-path="src/pages/ResetPasswordPage.tsx">
                Your password has been updated. You will be redirected to the login page in 3 seconds.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="vchowofrd" data-path="src/pages/ResetPasswordPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md" data-id="4tcskds03" data-path="src/pages/ResetPasswordPage.tsx">

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="n8i5m1nbc" data-path="src/pages/ResetPasswordPage.tsx">
          <CardHeader className="text-center pb-6" data-id="38wj6zgb9" data-path="src/pages/ResetPasswordPage.tsx">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-sage-500 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="14fp1qv0h" data-path="src/pages/ResetPasswordPage.tsx">

              <Lock className="w-8 h-8 text-white" data-id="zgr820dx0" data-path="src/pages/ResetPasswordPage.tsx" />
            </motion.div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-mint-600 bg-clip-text text-transparent" data-id="2qywg4jtd" data-path="src/pages/ResetPasswordPage.tsx">
              Reset Your Password
            </CardTitle>
            <CardDescription className="text-sage-700 dark:text-sage-300" data-id="6adonplx3" data-path="src/pages/ResetPasswordPage.tsx">
              Enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent data-id="ph54pym0s" data-path="src/pages/ResetPasswordPage.tsx">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="hmig9htuu" data-path="src/pages/ResetPasswordPage.tsx">
              <div className="space-y-2" data-id="wdfbrslt1" data-path="src/pages/ResetPasswordPage.tsx">
                <div className="relative" data-id="n5a6vt262" data-path="src/pages/ResetPasswordPage.tsx">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="0ka03gbl4" data-path="src/pages/ResetPasswordPage.tsx" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="d94af15ff" data-path="src/pages/ResetPasswordPage.tsx" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sage-500 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-200" data-id="q4zygnoce" data-path="src/pages/ResetPasswordPage.tsx">

                    {showPassword ? <EyeOff className="h-5 w-5" data-id="9r7wwy1q5" data-path="src/pages/ResetPasswordPage.tsx" /> : <Eye className="h-5 w-5" data-id="caep0jbcp" data-path="src/pages/ResetPasswordPage.tsx" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2" data-id="nqpkwfa6l" data-path="src/pages/ResetPasswordPage.tsx">
                <div className="relative" data-id="4sevlel99" data-path="src/pages/ResetPasswordPage.tsx">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="05bdoh880" data-path="src/pages/ResetPasswordPage.tsx" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="ceainjslu" data-path="src/pages/ResetPasswordPage.tsx" />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-sage-500 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-200" data-id="0wqzy22qn" data-path="src/pages/ResetPasswordPage.tsx">

                    {showConfirmPassword ? <EyeOff className="h-5 w-5" data-id="a7n2lx7uo" data-path="src/pages/ResetPasswordPage.tsx" /> : <Eye className="h-5 w-5" data-id="xrvpfpn8l" data-path="src/pages/ResetPasswordPage.tsx" />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={isLoading} data-id="ycbumxwh7" data-path="src/pages/ResetPasswordPage.tsx">

                {isLoading ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default ResetPasswordPage;