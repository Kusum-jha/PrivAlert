import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Eye, AlertTriangle, Info } from 'lucide-react';

interface Tracker {
  name: string;
  type: string;
  risk: 'low' | 'medium' | 'high';
  description: string;
}

interface TrackerListProps {
  trackers: Tracker[];
}

const TrackerList: React.FC<TrackerListProps> = ({ trackers }) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low':
        return <Info className="w-4 h-4" data-id="p2gx1clib" data-path="src/components/TrackerList.tsx" />;
      case 'medium':
        return <Eye className="w-4 h-4" data-id="4voccxmni" data-path="src/components/TrackerList.tsx" />;
      case 'high':
        return <AlertTriangle className="w-4 h-4" data-id="hccw855nv" data-path="src/components/TrackerList.tsx" />;
      default:
        return <Info className="w-4 h-4" data-id="1al0r80fj" data-path="src/components/TrackerList.tsx" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'analytics':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'advertising':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'social media':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'marketing':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'e-commerce':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (trackers.length === 0) {
    return (
      <Card data-id="l1155m6tb" data-path="src/components/TrackerList.tsx">
        <CardHeader data-id="2ew1pxrtd" data-path="src/components/TrackerList.tsx">
          <CardTitle className="flex items-center space-x-2" data-id="mj6ey893c" data-path="src/components/TrackerList.tsx">
            <Eye className="w-5 h-5" data-id="1t6r8gnxt" data-path="src/components/TrackerList.tsx" />
            <span data-id="tnt8cl8nv" data-path="src/components/TrackerList.tsx">Third-Party Trackers</span>
          </CardTitle>
        </CardHeader>
        <CardContent data-id="jd4ma3vlr" data-path="src/components/TrackerList.tsx">
          <div className="text-center py-8" data-id="uvv0c8rr0" data-path="src/components/TrackerList.tsx">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4" data-id="rqklyk05d" data-path="src/components/TrackerList.tsx">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" data-id="c2n7shwre" data-path="src/components/TrackerList.tsx" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2" data-id="xr0ywxy0l" data-path="src/components/TrackerList.tsx">
              No Trackers Detected
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-id="k837wgset" data-path="src/components/TrackerList.tsx">
              This website appears to have minimal third-party tracking.
            </p>
          </div>
        </CardContent>
      </Card>);

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }} data-id="qzl5qwwju" data-path="src/components/TrackerList.tsx">

      <Card data-id="dv28rak6o" data-path="src/components/TrackerList.tsx">
        <CardHeader data-id="2yfj4p2tn" data-path="src/components/TrackerList.tsx">
          <CardTitle className="flex items-center justify-between" data-id="o6vhr560o" data-path="src/components/TrackerList.tsx">
            <div className="flex items-center space-x-2" data-id="6t7kql0vl" data-path="src/components/TrackerList.tsx">
              <Eye className="w-5 h-5" data-id="eyckpnv7z" data-path="src/components/TrackerList.tsx" />
              <span data-id="rkydcqcwt" data-path="src/components/TrackerList.tsx">Third-Party Trackers</span>
            </div>
            <Badge variant="secondary" data-id="t1mu3xid2" data-path="src/components/TrackerList.tsx">
              {trackers.length} detected
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent data-id="f3qtomjg4" data-path="src/components/TrackerList.tsx">
          <div className="space-y-4" data-id="kyscbyn7i" data-path="src/components/TrackerList.tsx">
            {trackers.map((tracker, index) =>
            <motion.div
              key={tracker.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" data-id="k12mwffyd" data-path="src/components/TrackerList.tsx">

                <div className="flex items-start justify-between mb-2" data-id="sgzyfldre" data-path="src/components/TrackerList.tsx">
                  <div className="flex items-center space-x-2" data-id="ymgrxmc80" data-path="src/components/TrackerList.tsx">
                    <div className={`p-1 rounded ${getRiskColor(tracker.risk)}`} data-id="8yws0d88z" data-path="src/components/TrackerList.tsx">
                      {getRiskIcon(tracker.risk)}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white" data-id="k8injte73" data-path="src/components/TrackerList.tsx">
                      {tracker.name}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2" data-id="ouyc20imt" data-path="src/components/TrackerList.tsx">
                    <Badge className={getTypeColor(tracker.type)} data-id="w41cxiso8" data-path="src/components/TrackerList.tsx">
                      {tracker.type}
                    </Badge>
                    <Badge
                    variant={tracker.risk === 'high' ? 'destructive' : tracker.risk === 'medium' ? 'default' : 'secondary'}
                    className="capitalize" data-id="6vorxj220" data-path="src/components/TrackerList.tsx">

                      {tracker.risk} risk
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300" data-id="xyzaoztex" data-path="src/components/TrackerList.tsx">
                  {tracker.description}
                </p>
              </motion.div>
            )}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500" data-id="9lyvtehf6" data-path="src/components/TrackerList.tsx">
            <div className="flex items-center space-x-2 mb-2" data-id="pr7pqk3in" data-path="src/components/TrackerList.tsx">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" data-id="7p9pnb9oh" data-path="src/components/TrackerList.tsx" />
              <span className="font-semibold text-amber-800 dark:text-amber-200" data-id="277ohzf50" data-path="src/components/TrackerList.tsx">
                Tracker Impact
              </span>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-300" data-id="fsnthhxnu" data-path="src/components/TrackerList.tsx">
              These trackers may collect your browsing data, create user profiles, and share information 
              with third parties. Consider using privacy tools like ad blockers or VPNs.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default TrackerList;