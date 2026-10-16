import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartPieIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const menuItems = [
  { path: '/', icon: HomeIcon, label: 'Dashboard' },
  { path: '/laporan-baru', icon: DocumentPlusIcon, label: 'Buat Laporan' },
  { path: '/daftar-laporan', icon: DocumentTextIcon, label: 'Daftar Laporan' },
  { path: '/statistik', icon: ChartBarIcon, label: 'Statistik' },
  { path: '/pengaturan', icon: Cog6ToothIcon, label: 'Pengaturan' },
  { path: '/profil', icon: UserCircleIcon, label: 'Profil' },
];

function Sidebar({ isOpen, setIsOpen, isMobile }) {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: isOpen ? 280 : 88,
          x: isMobile && !isOpen ? -280 : 0,
        }}
        className={`
          fixed left-0 top-0 h-full z-50
          ${isDark ? 'glass-premium-dark' : 'glass-premium'}
          border-r border-light-border/50 dark:border-dark-border/50
          transition-all duration-500 ease-in-out
          ${isMobile ? 'shadow-premium-lg' : ''}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-light-border/50 dark:border-dark-border/50">
          <motion.div
            animate={{ scale: isOpen ? 1 : 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl gradient-premium flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">
                K
              </div>
              <div className="absolute -inset-1 gradient-premium opacity-20 blur-xl animate-pulse-slow" />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col"
                >
                  <span className="text-xl font-bold text-gradient">LaporKelas</span>
                  <span className="text-xs text-light-muted dark:text-dark-muted">Premium v2.0</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1.5 overflow-y-auto h-[calc(100vh-180px)]">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'gradient-premium text-white shadow-lg shadow-primary-500/30' 
                    : 'text-light-muted dark:text-dark-muted hover:bg-light-hover dark:hover:bg-dark-hover hover:text-light-text dark:hover:text-dark-text'
                  }
                  ${!isOpen ? 'justify-center' : ''}
                `}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-4 rounded-2xl gradient-premium shadow-lg shadow-primary-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10"
                >
                  <p className="text-white/70 text-xs font-medium">Total Laporan</p>
                  <p className="text-white text-3xl font-bold">12</p>
                  <div className="flex gap-1 mt-1">
                    <span className="text-xs text-white/60">✅ 5 Selesai</span>
                    <span className="text-xs text-white/60">• 🔄 4 Proses</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 text-center"
                >
                  <p className="text-white text-2xl font-bold">12</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;