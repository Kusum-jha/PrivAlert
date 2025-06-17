import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Shield, Search, Globe, Eye, Lock, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Don't render anything if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);

    // Simulate analysis process
    setTimeout(() => {
      navigate(`/analysis?url=${encodeURIComponent(url)}`);
      setIsAnalyzing(false);
    }, 3000);
  };

  const demoSites = [
  { name: 'Google', url: 'https://google.com', risk: 'medium' },
  { name: 'Facebook', url: 'https://facebook.com', risk: 'high' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com', risk: 'low' },
  { name: 'Amazon', url: 'https://amazon.com', risk: 'high' }];


  const features = [
  {
    icon: <Shield className="w-6 h-6" data-id="deaknsx70" data-path="src/pages/HomePage.tsx" />,
    title: "Privacy Analysis",
    description: "Deep scan of privacy policies using advanced NLP"
  },
  {
    icon: <Eye className="w-6 h-6" data-id="e3bejlyxi" data-path="src/pages/HomePage.tsx" />,
    title: "Tracker Detection",
    description: "Identify third-party trackers and data collectors"
  },
  {
    icon: <Lock className="w-6 h-6" data-id="1mz18o8rk" data-path="src/pages/HomePage.tsx" />,
    title: "GDPR Compliance",
    description: "Check compliance with GDPR and CCPA regulations"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" data-id="3szx57hsw" data-path="src/pages/HomePage.tsx" />,
    title: "Risk Assessment",
    description: "Get color-coded privacy risk scores (0-100)"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" data-id="0qgri37c4" data-path="src/pages/HomePage.tsx">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center" data-id="xuzo0q26v" data-path="src/pages/HomePage.tsx">
        <div className="flex items-center space-x-2" data-id="npfw67qcz" data-path="src/pages/HomePage.tsx">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-id="p87b4odwl" data-path="src/pages/HomePage.tsx">
            <Shield className="w-6 h-6 text-white" data-id="ho0v69z0l" data-path="src/pages/HomePage.tsx" />
          </div>
          <div data-id="7yz9oft8y" data-path="src/pages/HomePage.tsx">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="4jnzpqqgq" data-path="src/pages/HomePage.tsx">
              PrivAlert
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400" data-id="zk5sfbnnc" data-path="src/pages/HomePage.tsx">Privacy Awareness, Real-Time</p>
          </div>
        </div>
        <div className="flex items-center space-x-4" data-id="640he64b6" data-path="src/pages/HomePage.tsx">
          <div className="text-sm text-gray-600 dark:text-gray-300" data-id="xywqzp6qe" data-path="src/pages/HomePage.tsx">
            Welcome, {user?.Name || user?.Email}!
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center" data-id="rn96m6vqb" data-path="src/pages/HomePage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} data-id="755zwwc2f" data-path="src/pages/HomePage.tsx">

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent" data-id="7sf91y8ce" data-path="src/pages/HomePage.tsx">
            Know Your Privacy Risk
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto" data-id="zyeyogk4y" data-path="src/pages/HomePage.tsx">
            Analyze any website's privacy policy, cookies, and trackers with AI-powered insights. 
            Get instant privacy scores and recommendations.
          </p>
        </motion.div>

        {/* URL Input Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12" data-id="bv3j0umb3" data-path="src/pages/HomePage.tsx">

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl" data-id="yyxkoks3b" data-path="src/pages/HomePage.tsx">
            <form onSubmit={handleAnalyze} className="space-y-4" data-id="hw5cqhs0e" data-path="src/pages/HomePage.tsx">
              <div className="relative" data-id="84a76qvp4" data-path="src/pages/HomePage.tsx">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" data-id="pt6fe7w81" data-path="src/pages/HomePage.tsx" />
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400"
                  disabled={isAnalyzing} data-id="2cp2q6gyh" data-path="src/pages/HomePage.tsx" />

              </div>
              <Button
                type="submit"
                disabled={!url.trim() || isAnalyzing}
                className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="rc1zwfood" data-path="src/pages/HomePage.tsx">

                {isAnalyzing ?
                <div className="flex items-center space-x-2" data-id="bqkng5m1j" data-path="src/pages/HomePage.tsx">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="zeiswoe2o" data-path="src/pages/HomePage.tsx" />
                    <span data-id="3w33i9wlu" data-path="src/pages/HomePage.tsx">Analyzing Privacy...</span>
                  </div> :

                <div className="flex items-center space-x-2" data-id="4evt1krgk" data-path="src/pages/HomePage.tsx">
                    <Search className="w-5 h-5" data-id="h9o0lum9r" data-path="src/pages/HomePage.tsx" />
                    <span data-id="au73e6kce" data-path="src/pages/HomePage.tsx">Analyze Privacy</span>
                  </div>
                }
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Demo Sites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16" data-id="9dapj1pdv" data-path="src/pages/HomePage.tsx">

          <p className="text-gray-600 dark:text-gray-400 mb-4" data-id="8ioawynn9" data-path="src/pages/HomePage.tsx">Try these popular sites:</p>
          <div className="flex flex-wrap justify-center gap-3" data-id="1fw7chcup" data-path="src/pages/HomePage.tsx">
            {demoSites.map((site) =>
            <Button
              key={site.name}
              variant="outline"
              onClick={() => setUrl(site.url)}
              className="flex items-center space-x-2"
              disabled={isAnalyzing} data-id="dzjnppzzh" data-path="src/pages/HomePage.tsx">

                <span data-id="a2m2of6gk" data-path="src/pages/HomePage.tsx">{site.name}</span>
                <Badge
                variant={site.risk === 'high' ? 'destructive' : site.risk === 'medium' ? 'default' : 'secondary'}
                className="text-xs" data-id="dyzt3icqy" data-path="src/pages/HomePage.tsx">

                  {site.risk}
                </Badge>
              </Button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16" data-id="z90gq4qqu" data-path="src/pages/HomePage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12" data-id="ckr35gfna" data-path="src/pages/HomePage.tsx">

          <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white" data-id="0izdvfqnn" data-path="src/pages/HomePage.tsx">
            Comprehensive Privacy Analysis
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-id="3d4zj5fh1" data-path="src/pages/HomePage.tsx">
            Our AI-powered system analyzes multiple aspects of website privacy to give you complete visibility
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="fvliss4vm" data-path="src/pages/HomePage.tsx">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }} data-id="8mgh9x2ni" data-path="src/pages/HomePage.tsx">

              <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow" data-id="z8tttq8et" data-path="src/pages/HomePage.tsx">
                <CardContent className="p-0" data-id="t64feg4ac" data-path="src/pages/HomePage.tsx">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white" data-id="61uc91ccv" data-path="src/pages/HomePage.tsx">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white" data-id="uz0qwg6pj" data-path="src/pages/HomePage.tsx">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm" data-id="vvouff8k0" data-path="src/pages/HomePage.tsx">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 dark:text-gray-400" data-id="ur7mf5u5c" data-path="src/pages/HomePage.tsx">
        <p data-id="347wgxrlk" data-path="src/pages/HomePage.tsx">&copy; 2024 PrivAlert. Protecting your privacy, one website at a time.</p>
      </footer>
    </div>);

};

export default HomePage;