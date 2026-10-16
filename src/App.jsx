import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LaporanProvider } from './context/LaporanContext';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import LaporanBaru from './pages/LaporanBaru';
import DaftarLaporan from './pages/DaftarLaporan';
import Statistik from './pages/Statistik';
import Pengaturan from './pages/Pengaturan';
import Profil from './pages/Profil';

// Styles
import './styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LaporanProvider>
          <Router>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#111228',
                  color: '#e8e9f3',
                  border: '1px solid rgba(76, 120, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  boxShadow: '0 20px 60px -15px rgba(76, 120, 255, 0.2)',
                },
                success: {
                  iconTheme: {
                    primary: '#4c78ff',
                    secondary: '#ffffff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ff4c78',
                    secondary: '#ffffff',
                  },
                },
              }}
            />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="laporan-baru" element={<LaporanBaru />} />
                  <Route path="daftar-laporan" element={<DaftarLaporan />} />
                  <Route path="statistik" element={<Statistik />} />
                  <Route path="pengaturan" element={<Pengaturan />} />
                  <Route path="profil" element={<Profil />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </AnimatePresence>
          </Router>
        </LaporanProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;