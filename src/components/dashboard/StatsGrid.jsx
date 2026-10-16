import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ExclamationCircleIcon 
} from '@heroicons/react/24/outline';

const statConfigs = [
  { 
    icon: DocumentTextIcon, 
    label: 'Total Laporan', 
    key: 'total', 
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  { 
    icon: CheckCircleIcon, 
    label: 'Selesai', 
    key: 'selesai', 
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-500',
  },
  { 
    icon: ClockIcon, 
    label: 'Proses', 
    key: 'proses', 
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-500',
  },
  { 
    icon: ExclamationCircleIcon, 
    label: 'Pending', 
    key: 'pending', 
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/10',
    iconColor: 'text-red-500',
  },
];

function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {statConfigs.map((config, index) => (
        <motion.div
          key={config.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="card-premium hover:shadow-premium-lg transition-all duration-500">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-light-muted dark:text-dark-muted font-medium">
                  {config.label}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mt-1">
                  {stats[config.key] || 0}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${config.bgColor} flex items-center justify-center`}>
                <config.icon className={`w-6 h-6 ${config.iconColor}`} />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-light-border/50 dark:border-dark-border/50">
              <div className="w-full h-1.5 bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.total ? (stats[config.key] / stats.total) * 100 : 0}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsGrid;