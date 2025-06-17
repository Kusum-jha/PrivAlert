import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OnAuthSuccessPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4" data-id="rslajlg8a" data-path="src/pages/OnAuthSuccessPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md" data-id="kml9ld5xc" data-path="src/pages/OnAuthSuccessPage.tsx">

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80" data-id="3a7hfrrva" data-path="src/pages/OnAuthSuccessPage.tsx">
          <CardHeader className="text-center pb-6" data-id="uhbh96g5t" data-path="src/pages/OnAuthSuccessPage.tsx">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="s33ictqdk" data-path="src/pages/OnAuthSuccessPage.tsx">

              <CheckCircle className="w-8 h-8 text-white" data-id="41r8nqsv6" data-path="src/pages/OnAuthSuccessPage.tsx" />
            </motion.div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" data-id="jk348v30u" data-path="src/pages/OnAuthSuccessPage.tsx">
              Email Verified Successfully!
            </CardTitle>
            <CardDescription className="text-gray-600" data-id="madvvl8ay" data-path="src/pages/OnAuthSuccessPage.tsx">
              Your account has been successfully verified
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center" data-id="gb5z5ny7q" data-path="src/pages/OnAuthSuccessPage.tsx">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }} data-id="68f2zocf7" data-path="src/pages/OnAuthSuccessPage.tsx">

              <p className="text-gray-600 mb-4" data-id="p7xtcg5mk" data-path="src/pages/OnAuthSuccessPage.tsx">
                Thank you for verifying your email address. You can now enjoy all the features of Privacy Guardian.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4" data-id="9w2o1x9pq" data-path="src/pages/OnAuthSuccessPage.tsx">
                <p className="text-blue-800 font-medium" data-id="8nrd2clkk" data-path="src/pages/OnAuthSuccessPage.tsx">
                  Redirecting to login page in {countdown} seconds...
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2" data-id="9brtnj8pe" data-path="src/pages/OnAuthSuccessPage.tsx">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 5, ease: 'linear' }} data-id="fnrzwi3ex" data-path="src/pages/OnAuthSuccessPage.tsx" />

              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default OnAuthSuccessPage;