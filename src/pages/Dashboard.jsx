import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ExclamationCircleIcon,
  PlusIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { useLaporan } from '../context/LaporanContext';
import StatsGrid from '../components/dashboard/StatsGrid';
import ActivityChart from '../components/dashboard/ActivityChart';
import RecentReports from '../components/dashboard/RecentReports';
import QuickActions from '../components/dashboard/QuickActions';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Dashboard() {
  const { laporanList, getStats } = useLaporan();
  const stats = getStats();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">
            Selamat Pagi, Guru! 👋
          </h1>
          <p className="text-light-muted dark:text-dark-muted mt-1">
            Berikut ringkasan laporan kegiatan kelas Anda
          </p>
        </div>
        <Link to="/laporan-baru">
          <Button icon={PlusIcon} size="lg">
            Buat Laporan Baru
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={stats} />

      {/* Charts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                📊 Aktivitas Laporan
              </h3>
              <Link to="/statistik" className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1">
                Lihat Semua
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <ActivityChart data={laporanList} />
          </Card>
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Recent Reports */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
            📋 Laporan Terbaru
          </h3>
          <Link to="/daftar-laporan" className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1">
            Lihat Semua
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <RecentReports laporanList={laporanList.slice(0, 4)} />
      </div>
    </div>
  );
}

export default Dashboard;