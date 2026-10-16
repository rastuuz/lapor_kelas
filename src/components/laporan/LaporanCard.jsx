import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EllipsisVerticalIcon, 
  PaperClipIcon, 
  ChatBubbleLeftIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useLaporan } from '../../context/LaporanContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

const statusConfig = {
  Selesai: { variant: 'success', icon: '✅', label: 'Selesai' },
  Proses: { variant: 'warning', icon: '🔄', label: 'Proses' },
  Pending: { variant: 'danger', icon: '⏳', label: 'Pending' },
};

const priorityConfig = {
  Tinggi: { color: 'text-red-500', label: '🔴 Tinggi' },
  Sedang: { color: 'text-yellow-500', label: '🟡 Sedang' },
  Rendah: { color: 'text-blue-500', label: '🔵 Rendah' },
};

function LaporanCard({ laporan }) {
  const { updateStatus, deleteLaporan } = useLaporan();
  const [showMenu, setShowMenu] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const status = statusConfig[laporan.status] || statusConfig.Pending;
  const priority = priorityConfig[laporan.priority] || priorityConfig.Sedang;

  return (
    <Card className="p-6 hover:border-primary-500/30 transition-all duration-500">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-light-text dark:text-dark-text truncate">
            {laporan.judul}
          </h4>
          <div className="flex items-center gap-3 mt-1 text-sm text-light-muted dark:text-dark-muted">
            <span className="flex items-center gap-1">
              <UserIcon className="w-3.5 h-3.5" />
              {laporan.guru}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              {laporan.tanggal}
            </span>
          </div>
        </div>
        
        <div className="relative flex-shrink-0 ml-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
          >
            <EllipsisVerticalIcon className="w-5 h-5 text-light-muted dark:text-dark-muted" />
          </button>
          
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute right-0 mt-2 w-48 glass-premium-dark rounded-xl shadow-premium-lg border border-dark-border/50 overflow-hidden z-10"
              >
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-dark-hover transition-all duration-300 text-dark-text"
                >
                  <span>🔄</span>
                  <span>Ubah Status</span>
                </button>
                <button
                  onClick={() => deleteLaporan(laporan.id)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/10 transition-all duration-300 text-red-400"
                >
                  <span>🗑️</span>
                  <span>Hapus</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-light-text/70 dark:text-dark-text/70 mb-4 line-clamp-2">
        {laporan.deskripsi}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant={status.variant}>
          {status.icon} {status.label}
        </Badge>
        <span className={`text-xs font-medium ${priority.color}`}>
          {priority.label}
        </span>
        <span className="text-xs text-light-muted dark:text-dark-muted">
          • {laporan.category || 'Umum'}
        </span>
        {laporan.attachments > 0 && (
          <span className="flex items-center gap-1 text-xs text-light-muted dark:text-dark-muted">
            <PaperClipIcon className="w-3.5 h-3.5" />
            {laporan.attachments}
          </span>
        )}
        {laporan.comments > 0 && (
          <span className="flex items-center gap-1 text-xs text-light-muted dark:text-dark-muted">
            <ChatBubbleLeftIcon className="w-3.5 h-3.5" />
            {laporan.comments}
          </span>
        )}
      </div>

      {/* Quick Status Update */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-light-border/50 dark:border-dark-border/50">
        {['Selesai', 'Proses', 'Pending'].map((s) => {
          const isActive = laporan.status === s;
          return (
            <button
              key={s}
              onClick={() => updateStatus(laporan.id, s)}
              className={`
                text-xs px-3 py-1.5 rounded-lg transition-all duration-300
                ${isActive 
                  ? 'gradient-premium text-white shadow-lg shadow-primary-500/30' 
                  : 'bg-light-hover dark:bg-dark-hover text-light-muted dark:text-dark-muted hover:bg-light-border dark:hover:bg-dark-border'
                }
              `}
            >
              {s}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export default LaporanCard;