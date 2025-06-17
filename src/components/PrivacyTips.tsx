import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle } from
'@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Eye,
  Globe,
  Smartphone,
  Lock,
  Settings,
  Chrome,
  Wifi } from
'lucide-react';

interface PrivacyTipsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyTips: React.FC<PrivacyTipsProps> = ({ open, onOpenChange }) => {
  const tips = [
  {
    category: 'Browser Protection',
    icon: <Chrome className="w-5 h-5" data-id="152j4l123" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    tips: [
    'Use privacy-focused browsers like Firefox or Brave',
    'Enable "Do Not Track" in browser settings',
    'Regularly clear cookies and browsing data',
    'Use private/incognito mode for sensitive browsing',
    'Install ad blockers with tracker protection']

  },
  {
    category: 'Network Security',
    icon: <Wifi className="w-5 h-5" data-id="cs5a1badf" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    tips: [
    'Use a reputable VPN service',
    'Avoid public Wi-Fi for sensitive activities',
    'Enable HTTPS-only mode in browsers',
    'Use DNS services that block trackers (1.1.1.1)',
    'Consider using Tor for maximum privacy']

  },
  {
    category: 'Account Management',
    icon: <Lock className="w-5 h-5" data-id="lmzw8o50b" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    tips: [
    'Review and limit app permissions regularly',
    'Use unique, strong passwords with a password manager',
    'Enable two-factor authentication everywhere',
    'Regularly audit connected apps and services',
    'Delete unused accounts and services']

  },
  {
    category: 'Social Media',
    icon: <Eye className="w-5 h-5" data-id="s4k6aotfw" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    tips: [
    'Review privacy settings on all platforms',
    'Limit profile visibility to friends only',
    'Turn off location sharing and tagging',
    'Use container tabs to isolate social media',
    'Consider alternative privacy-focused platforms']

  },
  {
    category: 'Mobile Privacy',
    icon: <Smartphone className="w-5 h-5" data-id="hilum0mq7" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    tips: [
    'Review app permissions regularly',
    'Disable location services for unnecessary apps',
    'Use privacy-focused keyboards and browsers',
    'Turn off ad personalization in device settings',
    'Regularly update your device and apps']

  },
  {
    category: 'Data Management',
    icon: <Settings className="w-5 h-5" data-id="sltyfnkqy" data-path="src/components/PrivacyTips.tsx" />,
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    tips: [
    'Request data deletion from services you no longer use',
    'Download your data regularly for backup',
    'Read privacy policies before signing up',
    'Use disposable email addresses for signups',
    'Opt out of data broker services']

  }];


  return (
    <Dialog open={open} onOpenChange={onOpenChange} data-id="xqrz55ayz" data-path="src/components/PrivacyTips.tsx">
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" data-id="0c2rvtgv6" data-path="src/components/PrivacyTips.tsx">
        <DialogHeader data-id="jq5apvf12" data-path="src/components/PrivacyTips.tsx">
          <DialogTitle className="flex items-center space-x-2 text-2xl" data-id="kbhyh5axv" data-path="src/components/PrivacyTips.tsx">
            <Shield className="w-6 h-6 text-blue-600" data-id="wtf2ayrj1" data-path="src/components/PrivacyTips.tsx" />
            <span data-id="ovv49nhjz" data-path="src/components/PrivacyTips.tsx">Privacy Protection Tips</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6" data-id="ey8c6t0n8" data-path="src/components/PrivacyTips.tsx">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg" data-id="yhajgx9cw" data-path="src/components/PrivacyTips.tsx">
            <p className="text-blue-700 dark:text-blue-300" data-id="v9mu0t7hk" data-path="src/components/PrivacyTips.tsx">
              <strong data-id="s9i6hrwzu" data-path="src/components/PrivacyTips.tsx">💡 Pro Tip:</strong> Privacy is not about hiding something, it's about protecting everything.
              These tips will help you maintain control over your digital footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-id="43p8wp21g" data-path="src/components/PrivacyTips.tsx">
            {tips.map((category, index) =>
            <Card key={category.category} className="hover:shadow-lg transition-shadow" data-id="s6d0cdq07" data-path="src/components/PrivacyTips.tsx">
                <CardContent className="p-6" data-id="yol3pzkjh" data-path="src/components/PrivacyTips.tsx">
                  <div className="flex items-center space-x-3 mb-4" data-id="k9n9a44jn" data-path="src/components/PrivacyTips.tsx">
                    <div className={`p-2 rounded-lg ${category.color}`} data-id="92bjtmh33" data-path="src/components/PrivacyTips.tsx">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white" data-id="z1x57tqnc" data-path="src/components/PrivacyTips.tsx">
                      {category.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2" data-id="jsudfc5ti" data-path="src/components/PrivacyTips.tsx">
                    {category.tips.map((tip, tipIndex) =>
                  <li key={tipIndex} className="flex items-start space-x-2" data-id="1vnjdw72u" data-path="src/components/PrivacyTips.tsx">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-id="45h1m0kd8" data-path="src/components/PrivacyTips.tsx"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300" data-id="ye3ur5yza" data-path="src/components/PrivacyTips.tsx">
                          {tip}
                        </span>
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Additional Resources */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg" data-id="1q557qx0b" data-path="src/components/PrivacyTips.tsx">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3" data-id="i3u2p7enb" data-path="src/components/PrivacyTips.tsx">
              🛡️ Recommended Privacy Tools
            </h4>
            <div className="grid md:grid-cols-3 gap-4" data-id="oixqfw5mj" data-path="src/components/PrivacyTips.tsx">
              <div data-id="8di9xsquc" data-path="src/components/PrivacyTips.tsx">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2" data-id="5iikbd56n" data-path="src/components/PrivacyTips.tsx">Browsers</h5>
                <div className="space-y-1" data-id="jb496vrfv" data-path="src/components/PrivacyTips.tsx">
                  {['Firefox', 'Brave', 'DuckDuckGo Browser'].map((tool) =>
                  <Badge key={tool} variant="outline" className="mr-2" data-id="brpp5i316" data-path="src/components/PrivacyTips.tsx">
                      {tool}
                    </Badge>
                  )}
                </div>
              </div>
              <div data-id="23ajmg3jt" data-path="src/components/PrivacyTips.tsx">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2" data-id="tyi8zo1gt" data-path="src/components/PrivacyTips.tsx">VPN Services</h5>
                <div className="space-y-1" data-id="4g3ns157l" data-path="src/components/PrivacyTips.tsx">
                  {['ProtonVPN', 'Mullvad', 'IVPN'].map((tool) =>
                  <Badge key={tool} variant="outline" className="mr-2" data-id="uim2otj8o" data-path="src/components/PrivacyTips.tsx">
                      {tool}
                    </Badge>
                  )}
                </div>
              </div>
              <div data-id="70bfta42e" data-path="src/components/PrivacyTips.tsx">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2" data-id="dnse63eg2" data-path="src/components/PrivacyTips.tsx">Extensions</h5>
                <div className="space-y-1" data-id="teid5ly5t" data-path="src/components/PrivacyTips.tsx">
                  {['uBlock Origin', 'Privacy Badger', 'ClearURLs'].map((tool) =>
                  <Badge key={tool} variant="outline" className="mr-2" data-id="ngzcjv9jq" data-path="src/components/PrivacyTips.tsx">
                      {tool}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>);

};

export default PrivacyTips;