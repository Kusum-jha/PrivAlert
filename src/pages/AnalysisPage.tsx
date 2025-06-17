import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import {
  Shield,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Globe,
  Lock,
  Info,
  ExternalLink } from
'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import AlertCard from '@/components/AlertCard';
import ScoreChart from '@/components/ScoreChart';
import TrackerList from '@/components/TrackerList';
import PrivacyTips from '@/components/PrivacyTips';

interface AnalysisData {
  website: string;
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
  issues: {
    trackers: number;
    gdprCompliance: boolean;
    ccpaCompliance: boolean;
    dataDeletion: boolean;
    dataPortability: boolean;
    cookieConsent: boolean;
    ipLogging: boolean;
    dataRetention: string;
  };
  trackers: Array<{
    name: string;
    type: string;
    risk: 'low' | 'medium' | 'high';
    description: string;
  }>;
  recommendations: string[];
  compliance: {
    gdpr: {compliant: boolean;missing: string[];};
    ccpa: {compliant: boolean;missing: string[];};
  };
}

const AnalysisPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [showTips, setShowTips] = useState(false);

  const url = searchParams.get('url');

  useEffect(() => {
    if (!url) {
      navigate('/');
      return;
    }

    // Simulate analysis delay
    setTimeout(() => {
      setAnalysisData(generateMockAnalysis(url));
      setIsLoading(false);
    }, 3000);
  }, [url, navigate]);

  const generateMockAnalysis = (website: string): AnalysisData => {
    const domain = new URL(website).hostname.toLowerCase();

    // Generate realistic analysis based on common website patterns
    let score = 75;
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';
    let trackers: AnalysisData['trackers'] = [];
    let recommendations: string[] = [];

    if (domain.includes('google')) {
      score = 45;
      riskLevel = 'high';
      trackers = [
      { name: 'Google Analytics', type: 'Analytics', risk: 'medium', description: 'Tracks user behavior across sites' },
      { name: 'Google Ads', type: 'Advertising', risk: 'high', description: 'Personalizes ads based on user data' },
      { name: 'DoubleClick', type: 'Advertising', risk: 'high', description: 'Cross-site tracking for advertising' },
      { name: 'Google Tag Manager', type: 'Marketing', risk: 'medium', description: 'Manages tracking codes' }];

      recommendations = [
      'Use privacy-focused search engines like DuckDuckGo',
      'Enable "Do Not Track" in your browser',
      'Use an ad blocker with tracker protection',
      'Clear cookies regularly'];

    } else if (domain.includes('facebook')) {
      score = 28;
      riskLevel = 'high';
      trackers = [
      { name: 'Facebook Pixel', type: 'Social Media', risk: 'high', description: 'Tracks user behavior for advertising' },
      { name: 'Facebook Connect', type: 'Social Media', risk: 'high', description: 'Social login tracking' },
      { name: 'Instagram Pixel', type: 'Social Media', risk: 'high', description: 'Cross-platform user tracking' },
      { name: 'WhatsApp Business', type: 'Communication', risk: 'medium', description: 'Business messaging tracking' }];

      recommendations = [
      'Review and limit app permissions',
      'Use container tabs to isolate Facebook',
      'Disable location tracking',
      'Review ad preferences regularly'];

    } else if (domain.includes('duckduckgo')) {
      score = 92;
      riskLevel = 'low';
      trackers = [];
      recommendations = [
      'Consider this as your default search engine',
      'Enable their privacy browser extension',
      'Use their mobile app for enhanced privacy'];

    } else if (domain.includes('amazon')) {
      score = 35;
      riskLevel = 'high';
      trackers = [
      { name: 'Amazon Analytics', type: 'E-commerce', risk: 'high', description: 'Extensive shopping behavior tracking' },
      { name: 'Amazon Advertising', type: 'Advertising', risk: 'high', description: 'Product recommendation tracking' },
      { name: 'Alexa Metrics', type: 'Analytics', risk: 'medium', description: 'Website analytics service' },
      { name: 'Amazon Pay', type: 'Payment', risk: 'medium', description: 'Payment processing tracking' }];

      recommendations = [
      'Review your Amazon privacy settings',
      'Limit Alexa data collection',
      'Use guest browsing for shopping',
      'Clear shopping history regularly'];

    }

    return {
      website: domain,
      score,
      riskLevel,
      issues: {
        trackers: trackers.length,
        gdprCompliance: score > 60,
        ccpaCompliance: score > 50,
        dataDeletion: score > 70,
        dataPortability: score > 60,
        cookieConsent: score > 40,
        ipLogging: score < 60,
        dataRetention: score > 70 ? '12 months' : 'Indefinite'
      },
      trackers,
      recommendations,
      compliance: {
        gdpr: {
          compliant: score > 60,
          missing: score <= 60 ? ['Data deletion rights', 'Clear consent mechanisms', 'Data portability'] : []
        },
        ccpa: {
          compliant: score > 50,
          missing: score <= 50 ? ['Do not sell opt-out', 'Data disclosure requirements'] : []
        }
      }
    };
  };

  if (!url) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" data-id="3kl44iy4k" data-path="src/pages/AnalysisPage.tsx">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center" data-id="ow4482y68" data-path="src/pages/AnalysisPage.tsx">
          <div className="flex items-center space-x-2" data-id="q09sse2n7" data-path="src/pages/AnalysisPage.tsx">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-id="9crbwqm6x" data-path="src/pages/AnalysisPage.tsx">
              <Shield className="w-6 h-6 text-white" data-id="5zm3xkjai" data-path="src/pages/AnalysisPage.tsx" />
            </div>
            <div data-id="joe1uoo29" data-path="src/pages/AnalysisPage.tsx">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="gl8zs6una" data-path="src/pages/AnalysisPage.tsx">
                PrivAlert
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400" data-id="3iel5f1ap" data-path="src/pages/AnalysisPage.tsx">Privacy Awareness, Real-Time</p>
            </div>
          </div>
          <ThemeToggle data-id="3ca5wz649" data-path="src/pages/AnalysisPage.tsx" />
        </header>

        <div className="container mx-auto px-4 py-12" data-id="tk3ilegcd" data-path="src/pages/AnalysisPage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center" data-id="5nnc9ilh1" data-path="src/pages/AnalysisPage.tsx">

            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6" data-id="7bo1z040k" data-path="src/pages/AnalysisPage.tsx">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" data-id="leccc2db2" data-path="src/pages/AnalysisPage.tsx"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4" data-id="dl6v0unqf" data-path="src/pages/AnalysisPage.tsx">
              Analyzing Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6" data-id="b4jff91pa" data-path="src/pages/AnalysisPage.tsx">
              Scanning {new URL(url).hostname} for privacy risks, trackers, and compliance issues...
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto" data-id="izbirdnj1" data-path="src/pages/AnalysisPage.tsx">
              {[
              'Extracting privacy policy...',
              'Analyzing cookie usage...',
              'Detecting third-party trackers...',
              'Checking GDPR compliance...',
              'Calculating privacy score...'].
              map((step, index) =>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5 }}
                className="flex items-center space-x-3" data-id="f7rwtti2h" data-path="src/pages/AnalysisPage.tsx">

                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" data-id="yekla2czt" data-path="src/pages/AnalysisPage.tsx"></div>
                  <span className="text-gray-600 dark:text-gray-300" data-id="nto3bgsyv" data-path="src/pages/AnalysisPage.tsx">{step}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>);

  }

  if (!analysisData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" data-id="ybkz0of5w" data-path="src/pages/AnalysisPage.tsx">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center" data-id="t259hwba1" data-path="src/pages/AnalysisPage.tsx">
        <div className="flex items-center space-x-4" data-id="0bxpoxbwt" data-path="src/pages/AnalysisPage.tsx">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2" data-id="7idotfgz0" data-path="src/pages/AnalysisPage.tsx">

            <ArrowLeft className="w-4 h-4" data-id="v61nb4znq" data-path="src/pages/AnalysisPage.tsx" />
            <span data-id="7uantbnjs" data-path="src/pages/AnalysisPage.tsx">Back</span>
          </Button>
          <div className="flex items-center space-x-2" data-id="eizns3hgt" data-path="src/pages/AnalysisPage.tsx">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-id="3b0w8jvcs" data-path="src/pages/AnalysisPage.tsx">
              <Shield className="w-6 h-6 text-white" data-id="1u8ix2gal" data-path="src/pages/AnalysisPage.tsx" />
            </div>
            <div data-id="td0uftdwm" data-path="src/pages/AnalysisPage.tsx">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="1wpnegnzh" data-path="src/pages/AnalysisPage.tsx">
                PrivAlert
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400" data-id="wjlfedpjr" data-path="src/pages/AnalysisPage.tsx">Privacy Analysis Results</p>
            </div>
          </div>
        </div>
        <ThemeToggle data-id="948sxqrjn" data-path="src/pages/AnalysisPage.tsx" />
      </header>

      <div className="container mx-auto px-4 py-8" data-id="t7nzj56eu" data-path="src/pages/AnalysisPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8" data-id="t0nwgrrq5" data-path="src/pages/AnalysisPage.tsx">

          {/* Website Header */}
          <div className="flex items-center space-x-3 mb-6" data-id="6jps6ud68" data-path="src/pages/AnalysisPage.tsx">
            <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" data-id="w7fushubv" data-path="src/pages/AnalysisPage.tsx" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white" data-id="qz77x7cw7" data-path="src/pages/AnalysisPage.tsx">
              {analysisData.website}
            </h2>
            <Button variant="outline" size="sm" asChild data-id="v2t0p1bi7" data-path="src/pages/AnalysisPage.tsx">
              <a href={url} target="_blank" rel="noopener noreferrer" data-id="md4yw1kns" data-path="src/pages/AnalysisPage.tsx">
                <ExternalLink className="w-4 h-4" data-id="1mgp7k851" data-path="src/pages/AnalysisPage.tsx" />
              </a>
            </Button>
          </div>

          {/* Alert Card and Score Chart */}
          <div className="grid lg:grid-cols-2 gap-8" data-id="aygeazfqe" data-path="src/pages/AnalysisPage.tsx">
            <AlertCard data={analysisData} data-id="9ybcyktuj" data-path="src/pages/AnalysisPage.tsx" />
            <ScoreChart score={analysisData.score} riskLevel={analysisData.riskLevel} data-id="33esh3ve5" data-path="src/pages/AnalysisPage.tsx" />
          </div>

          {/* Detailed Analysis */}
          <div className="grid lg:grid-cols-2 gap-8" data-id="acjxlbd0k" data-path="src/pages/AnalysisPage.tsx">
            {/* Privacy Issues */}
            <Card data-id="tmj5ag5fj" data-path="src/pages/AnalysisPage.tsx">
              <CardHeader data-id="rg6g498bh" data-path="src/pages/AnalysisPage.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="8tbuop2v0" data-path="src/pages/AnalysisPage.tsx">
                  <AlertTriangle className="w-5 h-5" data-id="9yex1tvne" data-path="src/pages/AnalysisPage.tsx" />
                  <span data-id="vo4a2auxc" data-path="src/pages/AnalysisPage.tsx">Privacy Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-id="h8xk09431" data-path="src/pages/AnalysisPage.tsx">
                <div className="grid grid-cols-2 gap-4" data-id="h0rfgv8jb" data-path="src/pages/AnalysisPage.tsx">
                  <div className="flex items-center justify-between" data-id="8v3nabpjy" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="du9pka92o" data-path="src/pages/AnalysisPage.tsx">GDPR Compliance</span>
                    {analysisData.issues.gdprCompliance ?
                    <CheckCircle className="w-4 h-4 text-green-500" data-id="ol9ytovnv" data-path="src/pages/AnalysisPage.tsx" /> :

                    <XCircle className="w-4 h-4 text-red-500" data-id="7g30nr0ev" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                  <div className="flex items-center justify-between" data-id="q4sasv9an" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="rm8qrqanl" data-path="src/pages/AnalysisPage.tsx">CCPA Compliance</span>
                    {analysisData.issues.ccpaCompliance ?
                    <CheckCircle className="w-4 h-4 text-green-500" data-id="yw3szmssf" data-path="src/pages/AnalysisPage.tsx" /> :

                    <XCircle className="w-4 h-4 text-red-500" data-id="wx00psja7" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                  <div className="flex items-center justify-between" data-id="vpx866c3m" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="zpkoyc1qb" data-path="src/pages/AnalysisPage.tsx">Data Deletion</span>
                    {analysisData.issues.dataDeletion ?
                    <CheckCircle className="w-4 h-4 text-green-500" data-id="icgl4yilr" data-path="src/pages/AnalysisPage.tsx" /> :

                    <XCircle className="w-4 h-4 text-red-500" data-id="vxiqlxft4" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                  <div className="flex items-center justify-between" data-id="3wrenf7ia" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="nh3wlc2wu" data-path="src/pages/AnalysisPage.tsx">Data Portability</span>
                    {analysisData.issues.dataPortability ?
                    <CheckCircle className="w-4 h-4 text-green-500" data-id="qu9fm62af" data-path="src/pages/AnalysisPage.tsx" /> :

                    <XCircle className="w-4 h-4 text-red-500" data-id="ip07h2g29" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                  <div className="flex items-center justify-between" data-id="hxf63209c" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="qbjtifm9d" data-path="src/pages/AnalysisPage.tsx">Cookie Consent</span>
                    {analysisData.issues.cookieConsent ?
                    <CheckCircle className="w-4 h-4 text-green-500" data-id="hseln78m3" data-path="src/pages/AnalysisPage.tsx" /> :

                    <XCircle className="w-4 h-4 text-red-500" data-id="sdfmvapod" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                  <div className="flex items-center justify-between" data-id="dl9ry7fwy" data-path="src/pages/AnalysisPage.tsx">
                    <span className="text-sm" data-id="fobnfxpfc" data-path="src/pages/AnalysisPage.tsx">IP Logging</span>
                    {analysisData.issues.ipLogging ?
                    <XCircle className="w-4 h-4 text-red-500" data-id="9qcrdqjf2" data-path="src/pages/AnalysisPage.tsx" /> :

                    <CheckCircle className="w-4 h-4 text-green-500" data-id="1cvnh56a4" data-path="src/pages/AnalysisPage.tsx" />
                    }
                  </div>
                </div>
                <Separator data-id="6kna6u7lx" data-path="src/pages/AnalysisPage.tsx" />
                <div className="flex items-center justify-between" data-id="iun7x4ze6" data-path="src/pages/AnalysisPage.tsx">
                  <span className="text-sm font-medium" data-id="w53s8dtom" data-path="src/pages/AnalysisPage.tsx">Data Retention:</span>
                  <Badge variant={analysisData.issues.dataRetention === 'Indefinite' ? 'destructive' : 'secondary'} data-id="3vd2t0epe" data-path="src/pages/AnalysisPage.tsx">
                    {analysisData.issues.dataRetention}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Details */}
            <Card data-id="le692cokj" data-path="src/pages/AnalysisPage.tsx">
              <CardHeader data-id="slexdqkb8" data-path="src/pages/AnalysisPage.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="2u69emj7e" data-path="src/pages/AnalysisPage.tsx">
                  <Lock className="w-5 h-5" data-id="ccyvbvo5k" data-path="src/pages/AnalysisPage.tsx" />
                  <span data-id="ehhnwmrmu" data-path="src/pages/AnalysisPage.tsx">Compliance Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-id="or73seu5b" data-path="src/pages/AnalysisPage.tsx">
                <div data-id="5g887zenn" data-path="src/pages/AnalysisPage.tsx">
                  <div className="flex items-center justify-between mb-2" data-id="v9vnl45kx" data-path="src/pages/AnalysisPage.tsx">
                    <span className="font-medium" data-id="05rm0w138" data-path="src/pages/AnalysisPage.tsx">GDPR</span>
                    <Badge variant={analysisData.compliance.gdpr.compliant ? 'default' : 'destructive'} data-id="kwouvzco4" data-path="src/pages/AnalysisPage.tsx">
                      {analysisData.compliance.gdpr.compliant ? 'Compliant' : 'Non-Compliant'}
                    </Badge>
                  </div>
                  {analysisData.compliance.gdpr.missing.length > 0 &&
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1" data-id="h70pfby35" data-path="src/pages/AnalysisPage.tsx">
                      {analysisData.compliance.gdpr.missing.map((item, index) =>
                    <li key={index} className="flex items-center space-x-2" data-id="t41s6ul28" data-path="src/pages/AnalysisPage.tsx">
                          <div className="w-1 h-1 bg-red-500 rounded-full" data-id="aqqkwfst0" data-path="src/pages/AnalysisPage.tsx"></div>
                          <span data-id="8hd4wr8v7" data-path="src/pages/AnalysisPage.tsx">{item}</span>
                        </li>
                    )}
                    </ul>
                  }
                </div>
                <Separator data-id="c32mzl3ao" data-path="src/pages/AnalysisPage.tsx" />
                <div data-id="o0lccoz72" data-path="src/pages/AnalysisPage.tsx">
                  <div className="flex items-center justify-between mb-2" data-id="pa4mtk7fh" data-path="src/pages/AnalysisPage.tsx">
                    <span className="font-medium" data-id="rqco3agsw" data-path="src/pages/AnalysisPage.tsx">CCPA</span>
                    <Badge variant={analysisData.compliance.ccpa.compliant ? 'default' : 'destructive'} data-id="ww3lcu5sg" data-path="src/pages/AnalysisPage.tsx">
                      {analysisData.compliance.ccpa.compliant ? 'Compliant' : 'Non-Compliant'}
                    </Badge>
                  </div>
                  {analysisData.compliance.ccpa.missing.length > 0 &&
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1" data-id="dsri71q7v" data-path="src/pages/AnalysisPage.tsx">
                      {analysisData.compliance.ccpa.missing.map((item, index) =>
                    <li key={index} className="flex items-center space-x-2" data-id="4fczghwmb" data-path="src/pages/AnalysisPage.tsx">
                          <div className="w-1 h-1 bg-red-500 rounded-full" data-id="86rw4wuf3" data-path="src/pages/AnalysisPage.tsx"></div>
                          <span data-id="pfatu200o" data-path="src/pages/AnalysisPage.tsx">{item}</span>
                        </li>
                    )}
                    </ul>
                  }
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trackers */}
          {analysisData.trackers.length > 0 &&
          <TrackerList trackers={analysisData.trackers} data-id="5yiaoj4tm" data-path="src/pages/AnalysisPage.tsx" />
          }

          {/* Recommendations */}
          {analysisData.recommendations.length > 0 &&
          <Card data-id="ucvhf7lmh" data-path="src/pages/AnalysisPage.tsx">
              <CardHeader data-id="e94i8wfyr" data-path="src/pages/AnalysisPage.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="75tpyyqxc" data-path="src/pages/AnalysisPage.tsx">
                  <Info className="w-5 h-5" data-id="1cw0jb6sz" data-path="src/pages/AnalysisPage.tsx" />
                  <span data-id="miivhk51m" data-path="src/pages/AnalysisPage.tsx">Privacy Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent data-id="0qxmi6vly" data-path="src/pages/AnalysisPage.tsx">
                <ul className="space-y-3" data-id="rvfvfotmg" data-path="src/pages/AnalysisPage.tsx">
                  {analysisData.recommendations.map((rec, index) =>
                <li key={index} className="flex items-start space-x-3" data-id="5kwxv12a7" data-path="src/pages/AnalysisPage.tsx">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-id="00r09trp5" data-path="src/pages/AnalysisPage.tsx"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-id="6azae4hgk" data-path="src/pages/AnalysisPage.tsx">{rec}</span>
                    </li>
                )}
                </ul>
                <div className="mt-6" data-id="eurij8h8m" data-path="src/pages/AnalysisPage.tsx">
                  <Button onClick={() => setShowTips(true)} className="w-full" data-id="5btuoe99p" data-path="src/pages/AnalysisPage.tsx">
                    Get More Privacy Tips
                  </Button>
                </div>
              </CardContent>
            </Card>
          }
        </motion.div>
      </div>

      <PrivacyTips open={showTips} onOpenChange={setShowTips} data-id="zkyey4vs9" data-path="src/pages/AnalysisPage.tsx" />
    </div>);

};

export default AnalysisPage;