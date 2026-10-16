import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentPlusIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const actions = [
  { icon: DocumentPlusIcon, label: 'Buat Laporan', path: '/laporan-baru', color: 'from-blue-500 to-cyan-500' },
  { icon: DocumentTextIcon, label: 'Lihat Semua', path: '/daftar-laporan', color: 'from-purple-500 to-pink-500' },
  { icon: ChartBarIcon, label: 'Statistik', path: '/statistik', color: 'from-green-500 to-emerald-500' },
  { icon: Cog6ToothIcon, label: 'Pengaturan', path: '/pengaturan', color: 'from-yellow-500 to-amber-500' },
];

function QuickActions() {
  return (
    <Card className="p-6 h-full">
      <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
        ⚡ Aksi Cepat
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link key={action.path} to={action.path}>
            <div className="group p-4 rounded-xl bg-light-bg dark:bg-dark-card/30 border border-light-border/50 dark:border-dark-border/50 hover:border-primary-500/50 transition-all duration-300 cursor-pointer hover:shadow-premium">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-medium text-light-text dark:text-dark-text group-hover:text-primary-500 transition-colors duration-300">
                {action.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

export default QuickActions;    