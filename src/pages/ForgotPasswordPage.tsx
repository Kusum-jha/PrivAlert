import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { sendResetEmail, isAuthenticated, isLoading: authLoading } = useAuth();
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
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center" data-id="jftbhoqhu" data-path="src/pages/ForgotPasswordPage.tsx">
        <div className="text-center" data-id="vkgzrigy7" data-path="src/pages/ForgotPasswordPage.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600 mx-auto" data-id="8zjx0i0aw" data-path="src/pages/ForgotPasswordPage.tsx"></div>
          <p className="mt-2 text-sage-600 dark:text-sage-400" data-id="whj3kvxee" data-path="src/pages/ForgotPasswordPage.tsx">Loading...</p>
        </div>
      </div>);

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      const error = await sendResetEmail(email);
      if (error) {
        toast({
          title: 'Error',
          description: error,
          variant: 'destructive'
        });
      } else {
        setEmailSent(true);
        toast({
          title: 'Success',
          description: 'Password reset email sent! Please check your inbox.'
        });
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

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="xbucab80u" data-path="src/pages/ForgotPasswordPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md" data-id="a4r3tkg7c" data-path="src/pages/ForgotPasswordPage.tsx">

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="ycfslmy31" data-path="src/pages/ForgotPasswordPage.tsx">
            <CardHeader className="text-center pb-6" data-id="oqcanif26" data-path="src/pages/ForgotPasswordPage.tsx">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-mint-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="5ui46rm3x" data-path="src/pages/ForgotPasswordPage.tsx">

                <Mail className="w-8 h-8 text-white" data-id="hvowhwkri" data-path="src/pages/ForgotPasswordPage.tsx" />
              </motion.div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-mint-600 to-sage-600 bg-clip-text text-transparent" data-id="iznxhutj6" data-path="src/pages/ForgotPasswordPage.tsx">
                Check Your Email
              </CardTitle>
              <CardDescription className="text-sage-700 dark:text-sage-300" data-id="7zkmi5ffm" data-path="src/pages/ForgotPasswordPage.tsx">
                We've sent a password reset link to <strong data-id="yqpe8y355" data-path="src/pages/ForgotPasswordPage.tsx">{email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center" data-id="k85ytwidc" data-path="src/pages/ForgotPasswordPage.tsx">
              <p className="text-sage-700 dark:text-sage-300 mb-6" data-id="3iun3jhqu" data-path="src/pages/ForgotPasswordPage.tsx">
                Click the link in the email to reset your password. If you don't see the email, check your spam folder.
              </p>
              <Link to="/login" data-id="xjau1g9t6" data-path="src/pages/ForgotPasswordPage.tsx">
                <Button className="w-full h-12 bg-gradient-to-r from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white font-semibold rounded-lg transition-all duration-200" data-id="5tbvr9f2j" data-path="src/pages/ForgotPasswordPage.tsx">
                  <ArrowLeft className="w-4 h-4 mr-2" data-id="k7ae5l5uj" data-path="src/pages/ForgotPasswordPage.tsx" />
                  Back to Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="00dvw6vvh" data-path="src/pages/ForgotPasswordPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md" data-id="2tt0j8f72" data-path="src/pages/ForgotPasswordPage.tsx">

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="yho45rivg" data-path="src/pages/ForgotPasswordPage.tsx">
          <CardHeader className="text-center pb-6" data-id="7encj999y" data-path="src/pages/ForgotPasswordPage.tsx">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-sage-500 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="g3tfh4pmi" data-path="src/pages/ForgotPasswordPage.tsx">

              <Mail className="w-8 h-8 text-white" data-id="r8xfk2g5w" data-path="src/pages/ForgotPasswordPage.tsx" />
            </motion.div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-mint-600 bg-clip-text text-transparent" data-id="bbw609sh3" data-path="src/pages/ForgotPasswordPage.tsx">
              Reset Password
            </CardTitle>
            <CardDescription className="text-sage-700 dark:text-sage-300" data-id="d98srhhou" data-path="src/pages/ForgotPasswordPage.tsx">
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent data-id="89t3yew9n" data-path="src/pages/ForgotPasswordPage.tsx">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="g5418u5s7" data-path="src/pages/ForgotPasswordPage.tsx">
              <div className="space-y-2" data-id="aiktdphrr" data-path="src/pages/ForgotPasswordPage.tsx">
                <div className="relative" data-id="tigjlyk0k" data-path="src/pages/ForgotPasswordPage.tsx">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="8kbtf8qwt" data-path="src/pages/ForgotPasswordPage.tsx" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="b5o9v5tdr" data-path="src/pages/ForgotPasswordPage.tsx" />

                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={isLoading} data-id="jiekpwrqt" data-path="src/pages/ForgotPasswordPage.tsx">

                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
            <div className="mt-6 text-center" data-id="g3zzcf7mj" data-path="src/pages/ForgotPasswordPage.tsx">
              <Link to="/login" className="text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200 font-semibold underline inline-flex items-center" data-id="g170lyr3c" data-path="src/pages/ForgotPasswordPage.tsx">
                <ArrowLeft className="w-4 h-4 mr-1" data-id="5q7s9hj5u" data-path="src/pages/ForgotPasswordPage.tsx" />
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default ForgotPasswordPage;