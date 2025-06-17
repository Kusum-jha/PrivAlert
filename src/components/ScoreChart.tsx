import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ScoreChartProps {
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
}

const ScoreChart: React.FC<ScoreChartProps> = ({ score, riskLevel }) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = (score: number) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (score: number) => {
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-green-500" data-id="4pidkb53u" data-path="src/components/ScoreChart.tsx" />;
    if (score >= 40) return <Minus className="w-5 h-5 text-yellow-500" data-id="xl1c5ki8x" data-path="src/components/ScoreChart.tsx" />;
    return <TrendingDown className="w-5 h-5 text-red-500" data-id="zwpq1ad1d" data-path="src/components/ScoreChart.tsx" />;
  };

  const getRiskDescription = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return 'Good privacy practices detected. This website respects user privacy.';
      case 'medium':
        return 'Some privacy concerns. Review the recommendations below.';
      case 'high':
        return 'Significant privacy risks detected. Use with caution.';
      default:
        return 'Privacy analysis complete.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }} data-id="vn4d2njix" data-path="src/components/ScoreChart.tsx">

      <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl" data-id="qz2z0tkk6" data-path="src/components/ScoreChart.tsx">
        <CardHeader data-id="gkpot9rfo" data-path="src/components/ScoreChart.tsx">
          <CardTitle className="flex items-center justify-between" data-id="r8j6ojrct" data-path="src/components/ScoreChart.tsx">
            <span data-id="s4ecjiflf" data-path="src/components/ScoreChart.tsx">Privacy Score</span>
            {getTrendIcon(score)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6" data-id="cly582sbi" data-path="src/components/ScoreChart.tsx">
          {/* Circular Progress */}
          <div className="relative w-32 h-32 mx-auto" data-id="cz3xjdsrm" data-path="src/components/ScoreChart.tsx">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120" data-id="x4exkmd5n" data-path="src/components/ScoreChart.tsx">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200 dark:text-gray-700" data-id="1hixdyy0v" data-path="src/components/ScoreChart.tsx" />

              {/* Progress circle */}
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                className={getProgressColor(score).replace('bg-', 'text-')}
                strokeDasharray={`${2 * Math.PI * 54}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                animate={{
                  strokeDashoffset: 2 * Math.PI * 54 - score / 100 * 2 * Math.PI * 54
                }}
                transition={{ duration: 1.5, ease: "easeOut" }} data-id="cahwcpss6" data-path="src/components/ScoreChart.tsx" />

            </svg>
            <div className="absolute inset-0 flex items-center justify-center" data-id="br54bw236" data-path="src/components/ScoreChart.tsx">
              <div className="text-center" data-id="pes23heex" data-path="src/components/ScoreChart.tsx">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`text-3xl font-bold ${getScoreColor(score)}`} data-id="12d7uvvtr" data-path="src/components/ScoreChart.tsx">

                  {score}
                </motion.div>
                <div className="text-sm text-gray-500 dark:text-gray-400" data-id="nwlfdl4il" data-path="src/components/ScoreChart.tsx">out of 100</div>
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-3" data-id="b72957e08" data-path="src/components/ScoreChart.tsx">
            <div className="flex justify-between items-center" data-id="bcm586gch" data-path="src/components/ScoreChart.tsx">
              <span className="text-sm text-gray-600 dark:text-gray-300" data-id="ytrynuvgx" data-path="src/components/ScoreChart.tsx">Data Protection</span>
              <div className="flex items-center space-x-2" data-id="y24441xrk" data-path="src/components/ScoreChart.tsx">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" data-id="bbo0rjtqr" data-path="src/components/ScoreChart.tsx">
                  <motion.div
                    className={getProgressColor(Math.max(0, score - 10))}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(0, score - 10)}%` }}
                    transition={{ duration: 1, delay: 0.8 }} data-id="jzdo67uvr" data-path="src/components/ScoreChart.tsx" />

                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400" data-id="igpm3murl" data-path="src/components/ScoreChart.tsx">
                  {Math.max(0, score - 10)}%
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center" data-id="5l4cf0wqd" data-path="src/components/ScoreChart.tsx">
              <span className="text-sm text-gray-600 dark:text-gray-300" data-id="vravng2yt" data-path="src/components/ScoreChart.tsx">Transparency</span>
              <div className="flex items-center space-x-2" data-id="ajjywysrm" data-path="src/components/ScoreChart.tsx">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" data-id="kqrn7s4bi" data-path="src/components/ScoreChart.tsx">
                  <motion.div
                    className={getProgressColor(Math.min(100, score + 5))}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, score + 5)}%` }}
                    transition={{ duration: 1, delay: 1 }} data-id="l6d9mz3kf" data-path="src/components/ScoreChart.tsx" />

                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400" data-id="m6qtv8z2m" data-path="src/components/ScoreChart.tsx">
                  {Math.min(100, score + 5)}%
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center" data-id="v6jumslzf" data-path="src/components/ScoreChart.tsx">
              <span className="text-sm text-gray-600 dark:text-gray-300" data-id="p6fu5qbrg" data-path="src/components/ScoreChart.tsx">User Control</span>
              <div className="flex items-center space-x-2" data-id="bgs3tm7yo" data-path="src/components/ScoreChart.tsx">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" data-id="3j2vcp1k6" data-path="src/components/ScoreChart.tsx">
                  <motion.div
                    className={getProgressColor(Math.max(0, score - 20))}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(0, score - 20)}%` }}
                    transition={{ duration: 1, delay: 1.2 }} data-id="8ud8uyk49" data-path="src/components/ScoreChart.tsx" />

                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400" data-id="eofxwh394" data-path="src/components/ScoreChart.tsx">
                  {Math.max(0, score - 20)}%
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700" data-id="ok1nffp8h" data-path="src/components/ScoreChart.tsx">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center" data-id="a1xzkcogh" data-path="src/components/ScoreChart.tsx">
              {getRiskDescription(riskLevel)}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default ScoreChart;