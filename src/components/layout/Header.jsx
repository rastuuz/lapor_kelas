import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  BellIcon, 
  MagnifyingGlassIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

function Header({ sidebarOpen, setSidebarOpen, isMobile }) {
  const location = useLocation();
  const { isDark } = useTheme();
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const getPageTitle = () => {
    const paths = {
      '/': 'Dashboard',
      '/laporan-baru': 'Buat Laporan',
      '/daftar-laporan': 'Daftar Laporan',
      '/statistik': 'Statistik',
      '/pengaturan': 'Pengaturan',
      '/profil': 'Profil',
    };
    return paths[location.pathname] || 'Dashboard';
  };

  return (
    <header className={`
      sticky top-0 z-40
      ${isDark ? 'glass-premium-dark' : 'glass-premium'}
      border-b border-light-border/50 dark:border-dark-border/50
      transition-all duration-500
    `}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2.5 rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
          >
            <Bars3Icon className="w-5 h-5 text-light-text dark:text-dark-text" />
          </button>
          
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-light-text dark:text-dark-text">
              {getPageTitle()}
            </h1>
            <p className="text-sm text-light-muted dark:text-dark-muted">
              Selamat datang kembali! 👋
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search - Desktop */}
          <div className="hidden md:flex items-center gap-2 bg-light-bg dark:bg-dark-card/30 rounded-xl px-4 py-2.5 border border-light-border/50 dark:border-dark-border/50 focus-within:border-primary-500 transition-all duration-300">
            <MagnifyingGlassIcon className="w-4 h-4 text-light-muted dark:text-dark-muted" />
            <input
              type="text"
              placeholder="Cari laporan..."
              className="bg-transparent outline-none text-sm text-light-text dark:text-dark-text w-48 lg:w-64"
            />
            <kbd className="text-xs text-light-muted dark:text-dark-muted bg-light-hover dark:bg-dark-hover px-2 py-0.5 rounded">⌘K</kbd>
          </div>

          {/* Search - Mobile */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden p-2.5 rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-light-text dark:text-dark-text" />
          </button>

          {/* New Report */}
          <Link to="/laporan-baru">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 gradient-premium text-white px-4 py-2.5 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
            >
              <PlusIcon className="w-4 h-4" />
              <span className="font-semibold text-sm">Laporan Baru</span>
            </motion.button>
          </Link>

          {/* Notification */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
          >
            <BellIcon className="w-5 h-5 text-light-text dark:text-dark-text" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-dark-bg animate-pulse" />
          </motion.button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Profile */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl gradient-premium flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/30">
                G
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-light-text dark:text-dark-text">Guru Utama</p>
                <p className="text-xs text-light-muted dark:text-dark-muted">guru@sekolah.com</p>
              </div>
            </motion.button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-64 glass-premium-dark rounded-2xl shadow-premium-lg border border-dark-border/50 overflow-hidden"
                >
                  <div className="p-4 border-b border-dark-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center text-white font-bold text-lg">
                        G
                      </div>
                      <div>
                        <p className="font-semibold text-dark-text">Guru Utama</p>
                        <p className="text-sm text-dark-muted">guru@sekolah.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link to="/profil">
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-dark-hover transition-all duration-300 text-dark-text">
                        <UserCircleIcon className="w-5 h-5" />
                        <span>Profil Saya</span>
                      </button>
                    </Link>
                    <Link to="/pengaturan">
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-dark-hover transition-all duration-300 text-dark-text">
                        <Cog6ToothIcon className="w-5 h-5" />
                        <span>Pengaturan</span>
                      </button>
                    </Link>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-red-400">
                      <ArrowRightOnRectangleIcon className="w-5 h-5" />
                      <span>Keluar</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4"
          >
            <div className="flex items-center gap-2 bg-light-bg dark:bg-dark-card/30 rounded-xl px-4 py-3 border border-light-border/50 dark:border-dark-border/50">
              <MagnifyingGlassIcon className="w-4 h-4 text-light-muted dark:text-dark-muted" />
              <input
                type="text"
                placeholder="Cari laporan..."
                className="bg-transparent outline-none text-sm text-light-text dark:text-dark-text w-full"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;