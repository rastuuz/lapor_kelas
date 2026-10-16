import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LaporanCard from '../laporan/LaporanCard';

function RecentReports({ laporanList }) {
  if (laporanList.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-light-muted dark:text-dark-muted">Belum ada laporan</p>
        <Link to="/laporan-baru" className="text-primary-500 hover:text-primary-600 mt-2 inline-block">
          Buat laporan pertama
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {laporanList.map((laporan, index) => (
        <motion.div
          key={laporan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <LaporanCard laporan={laporan} />
        </motion.div>
      ))}
    </div>
  );
}

export default RecentReports;