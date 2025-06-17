import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, isAuthenticated, isLoading: authLoading } = useAuth();
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
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center" data-id="7dtgtvnkv" data-path="src/pages/RegisterPage.tsx">
        <div className="text-center" data-id="thl11e91z" data-path="src/pages/RegisterPage.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600 mx-auto" data-id="7qfaqwagd" data-path="src/pages/RegisterPage.tsx"></div>
          <p className="mt-2 text-sage-600 dark:text-sage-400" data-id="sh3sgl805" data-path="src/pages/RegisterPage.tsx">Loading...</p>
        </div>
      </div>);

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
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

    setIsLoading(true);
    try {
      const error = await register(email, password);
      if (error) {
        toast({
          title: 'Registration Failed',
          description: error,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Success',
          description: 'Account created successfully! Please check your email to verify your account.'
        });
        navigate('/login');
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
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-mint-50 to-lime-50 dark:from-sage-900 dark:via-mint-900 dark:to-lime-900 flex items-center justify-center px-4" data-id="yzs629w6i" data-path="src/pages/RegisterPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md" data-id="2lnept345" data-path="src/pages/RegisterPage.tsx">

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-black/80" data-id="z6wdh4q1v" data-path="src/pages/RegisterPage.tsx">
          <CardHeader className="text-center pb-6" data-id="ss7nhmww2" data-path="src/pages/RegisterPage.tsx">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-sage-500 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="6rlkhbmtc" data-path="src/pages/RegisterPage.tsx">

              <UserPlus className="w-8 h-8 text-white" data-id="o08xk9xqp" data-path="src/pages/RegisterPage.tsx" />
            </motion.div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-mint-600 bg-clip-text text-transparent" data-id="5yojy0nge" data-path="src/pages/RegisterPage.tsx">
              Create Account
            </CardTitle>
            <CardDescription className="text-sage-700 dark:text-sage-300" data-id="342qxyasg" data-path="src/pages/RegisterPage.tsx">
              Join Privacy Guardian and protect your digital privacy
            </CardDescription>
          </CardHeader>
          <CardContent data-id="xf0cu5pfc" data-path="src/pages/RegisterPage.tsx">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="lyyzo0qhv" data-path="src/pages/RegisterPage.tsx">
              <div className="space-y-2" data-id="kw39xjix5" data-path="src/pages/RegisterPage.tsx">
                <div className="relative" data-id="zfnbu9xzz" data-path="src/pages/RegisterPage.tsx">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="ov2gx6wcu" data-path="src/pages/RegisterPage.tsx" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="xdlvjy3ji" data-path="src/pages/RegisterPage.tsx" />

                </div>
              </div>
              <div className="space-y-2" data-id="3gpac2cad" data-path="src/pages/RegisterPage.tsx">
                <div className="relative" data-id="teml1ymqx" data-path="src/pages/RegisterPage.tsx">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="rnpqsxx6t" data-path="src/pages/RegisterPage.tsx" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="5tk07egfy" data-path="src/pages/RegisterPage.tsx" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sage-500 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-200" data-id="x5rnki5f2" data-path="src/pages/RegisterPage.tsx">

                    {showPassword ? <EyeOff className="h-5 w-5" data-id="msuh4oo4f" data-path="src/pages/RegisterPage.tsx" /> : <Eye className="h-5 w-5" data-id="k4py3lw04" data-path="src/pages/RegisterPage.tsx" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2" data-id="vac2zj6aw" data-path="src/pages/RegisterPage.tsx">
                <div className="relative" data-id="4fwh70u3q" data-path="src/pages/RegisterPage.tsx">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-sage-500" data-id="kd93voqee" data-path="src/pages/RegisterPage.tsx" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-sage-200 focus:border-sage-500 focus:ring-sage-500 dark:border-sage-700 dark:focus:border-sage-400"
                    required data-id="nxnhbwr64" data-path="src/pages/RegisterPage.tsx" />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-sage-500 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-200" data-id="ngap1zbzk" data-path="src/pages/RegisterPage.tsx">

                    {showConfirmPassword ? <EyeOff className="h-5 w-5" data-id="alth6623j" data-path="src/pages/RegisterPage.tsx" /> : <Eye className="h-5 w-5" data-id="rskr02ul1" data-path="src/pages/RegisterPage.tsx" />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={isLoading} data-id="wvdan7zpt" data-path="src/pages/RegisterPage.tsx">

                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
            <div className="mt-6 text-center" data-id="k8i8emn3o" data-path="src/pages/RegisterPage.tsx">
              <p className="text-sage-700 dark:text-sage-300" data-id="vsauk74q9" data-path="src/pages/RegisterPage.tsx">
                Already have an account?{' '}
                <Link to="/login" className="text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200 font-semibold underline" data-id="o33l7wfcb" data-path="src/pages/RegisterPage.tsx">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default RegisterPage;