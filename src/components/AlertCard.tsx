import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Eye } from 'lucide-react';

interface AlertCardProps {
  data: {
    website: string;
    score: number;
    riskLevel: 'low' | 'medium' | 'high';
    issues: {
      trackers: number;
      gdprCompliance: boolean;
      dataDeletion: boolean;
      ipLogging: boolean;
      dataRetention: string;
    };
  };
}

const AlertCard: React.FC<AlertCardProps> = ({ data }) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low':
        return '🟢';
      case 'medium':
        return '🟡';
      case 'high':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'default';
      case 'medium':
        return 'secondary';
      case 'high':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} data-id="bjw10i0yl" data-path="src/components/AlertCard.tsx">

      <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl" data-id="h226dvsyp" data-path="src/components/AlertCard.tsx">
        <CardHeader className="pb-3" data-id="usv1fyefz" data-path="src/components/AlertCard.tsx">
          <CardTitle className="flex items-center justify-between" data-id="f0q15aiah" data-path="src/components/AlertCard.tsx">
            <div className="flex items-center space-x-2" data-id="pu6l2vi97" data-path="src/components/AlertCard.tsx">
              <Shield className="w-6 h-6 text-blue-600" data-id="2ig5kkjmz" data-path="src/components/AlertCard.tsx" />
              <span data-id="2ed4l24by" data-path="src/components/AlertCard.tsx">Privacy Alert</span>
            </div>
            <Badge variant={getRiskBadge(data.riskLevel)} className="text-sm" data-id="rkxr5q16j" data-path="src/components/AlertCard.tsx">
              {getRiskIcon(data.riskLevel)} {data.riskLevel.toUpperCase()} RISK
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" data-id="uw63atra8" data-path="src/components/AlertCard.tsx">
          {/* Website */}
          <div data-id="wm1f4cpj1" data-path="src/components/AlertCard.tsx">
            <p className="text-sm text-gray-500 dark:text-gray-400" data-id="fxsdkzavu" data-path="src/components/AlertCard.tsx">Website:</p>
            <p className="font-semibold text-lg" data-id="lty5njw2r" data-path="src/components/AlertCard.tsx">{data.website}</p>
          </div>

          {/* Score */}
          <div data-id="hxhiud3oc" data-path="src/components/AlertCard.tsx">
            <p className="text-sm text-gray-500 dark:text-gray-400" data-id="lfl8r3gkx" data-path="src/components/AlertCard.tsx">Privacy Score:</p>
            <div className="flex items-center space-x-3" data-id="flxiwbrb4" data-path="src/components/AlertCard.tsx">
              <span className={`text-3xl font-bold ${getRiskColor(data.riskLevel)}`} data-id="gng54qgpb" data-path="src/components/AlertCard.tsx">
                {data.score}
              </span>
              <span className="text-lg text-gray-400" data-id="92p0t3k6d" data-path="src/components/AlertCard.tsx">/100</span>
            </div>
          </div>

          {/* Issues Summary */}
          <div className="space-y-3 pt-2" data-id="9v1busx32" data-path="src/components/AlertCard.tsx">
            <div className="flex items-center space-x-3" data-id="yjdhnzcrw" data-path="src/components/AlertCard.tsx">
              <Eye className="w-4 h-4 text-orange-500" data-id="tczzq2omu" data-path="src/components/AlertCard.tsx" />
              <span className="text-sm" data-id="4li6j0apf" data-path="src/components/AlertCard.tsx">
                <strong data-id="plr2lthuv" data-path="src/components/AlertCard.tsx">{data.issues.trackers}</strong> Third-party trackers detected
              </span>
            </div>

            <div className="flex items-center space-x-3" data-id="yonko3crj" data-path="src/components/AlertCard.tsx">
              {data.issues.dataDeletion ?
              <CheckCircle className="w-4 h-4 text-green-500" data-id="48q8x7f3a" data-path="src/components/AlertCard.tsx" /> :

              <XCircle className="w-4 h-4 text-red-500" data-id="l2f7azmrm" data-path="src/components/AlertCard.tsx" />
              }
              <span className="text-sm" data-id="c8l7zt786" data-path="src/components/AlertCard.tsx">
                {data.issues.dataDeletion ? 'Data deletion option available' : 'No data deletion option'}
              </span>
            </div>

            <div className="flex items-center space-x-3" data-id="0wg5zgzom" data-path="src/components/AlertCard.tsx">
              {data.issues.ipLogging ?
              <AlertTriangle className="w-4 h-4 text-red-500" data-id="34f6l37jj" data-path="src/components/AlertCard.tsx" /> :

              <CheckCircle className="w-4 h-4 text-green-500" data-id="7xlkas948" data-path="src/components/AlertCard.tsx" />
              }
              <span className="text-sm" data-id="uuukcn2ww" data-path="src/components/AlertCard.tsx">
                {data.issues.ipLogging ?
                `IP logged & stored ${data.issues.dataRetention.toLowerCase()}` :
                'IP logging limited'
                }
              </span>
            </div>

            <div className="flex items-center space-x-3" data-id="e9ckvrn9h" data-path="src/components/AlertCard.tsx">
              {data.issues.gdprCompliance ?
              <CheckCircle className="w-4 h-4 text-green-500" data-id="iwmujp46z" data-path="src/components/AlertCard.tsx" /> :

              <XCircle className="w-4 h-4 text-red-500" data-id="fece7n07y" data-path="src/components/AlertCard.tsx" />
              }
              <span className="text-sm" data-id="1dlsopo42" data-path="src/components/AlertCard.tsx">
                {data.issues.gdprCompliance ? 'GDPR compliance statement' : 'No GDPR compliance statement'}
              </span>
            </div>
          </div>

          {/* Tip */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500" data-id="wfes50pp3" data-path="src/components/AlertCard.tsx">
            <p className="text-sm text-blue-700 dark:text-blue-300" data-id="cm6sudgts" data-path="src/components/AlertCard.tsx">
              <strong data-id="kzhzrnuz6" data-path="src/components/AlertCard.tsx">💡 Tip:</strong> Use with VPN + tracker blocker for enhanced privacy
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default AlertCard;