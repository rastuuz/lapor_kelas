import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const LaporanContext = createContext();

const initialData = [
  {
    id: 1,
    judul: 'Pembelajaran React JS - Komponen & Props',
    kelas: 'XII RPL 1',
    tanggal: '2026-09-09',
    status: 'Selesai',
    deskripsi: 'Materi tentang komponen fungsional dan class, props, serta state management dasar dengan praktik langsung membuat aplikasi todo list.',
    guru: 'Dr. Budi Santoso, M.Kom',
    priority: 'Tinggi',
    category: 'Pembelajaran',
    attachments: 2,
    comments: 5,
  },
  {
    id: 2,
    judul: 'Workshop UI/UX Design dengan Figma',
    kelas: 'XI RPL 2',
    tanggal: '2026-09-08',
    status: 'Proses',
    deskripsi: 'Pelatihan desain antarmuka menggunakan Figma, mencakup wireframe, prototyping, dan design system untuk aplikasi mobile.',
    guru: 'Ibu Siti Rahayu, S.Ds',
    priority: 'Sedang',
    category: 'Workshop',
    attachments: 4,
    comments: 3,
  },
  {
    id: 3,
    judul: 'Evaluasi Tengah Semester Ganjil',
    kelas: 'X RPL 1',
    tanggal: '2026-09-07',
    status: 'Pending',
    deskripsi: 'Pelaksanaan ujian tengah semester untuk mata pelajaran pemrograman web, mencakup HTML, CSS, JavaScript, dan PHP dasar.',
    guru: 'Ahmad Fauzi, S.Kom',
    priority: 'Tinggi',
    category: 'Evaluasi',
    attachments: 1,
    comments: 8,
  },
  {
    id: 4,
    judul: 'Proyek Akhir Semester - Aplikasi E-Learning',
    kelas: 'XII RPL 2',
    tanggal: '2026-09-06',
    status: 'Proses',
    deskripsi: 'Pengembangan aplikasi e-learning berbasis web menggunakan React JS dan Firebase untuk manajemen kelas online.',
    guru: 'Dr. Budi Santoso, M.Kom',
    priority: 'Tinggi',
    category: 'Proyek',
    attachments: 6,
    comments: 12,
  },
];

export function LaporanProvider({ children }) {
  const [laporanList, setLaporanList] = useState(() => {
    const saved = localStorage.getItem('laporanData');
    return saved ? JSON.parse(saved) : initialData;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('laporanData', JSON.stringify(laporanList));
  }, [laporanList]);

  const addLaporan = async (data) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newLaporan = {
      ...data,
      id: Date.now(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      attachments: 0,
      comments: 0,
    };
    setLaporanList([newLaporan, ...laporanList]);
    toast.success('✨ Laporan berhasil dibuat!', {
      icon: '🎉',
    });
    setLoading(false);
  };

  const updateStatus = (id, status) => {
    setLaporanList(
      laporanList.map((l) =>
        l.id === id ? { ...l, status } : l
      )
    );
    toast.success(`✅ Status diperbarui ke "${status}"`);
  };

  const deleteLaporan = (id) => {
    setLaporanList(laporanList.filter((l) => l.id !== id));
    toast.success('🗑️ Laporan berhasil dihapus');
  };

  const editLaporan = (id, data) => {
    setLaporanList(
      laporanList.map((l) =>
        l.id === id ? { ...l, ...data } : l
      )
    );
    toast.success('📝 Laporan berhasil diperbarui!');
  };

  const getStats = () => ({
    total: laporanList.length,
    selesai: laporanList.filter((l) => l.status === 'Selesai').length,
    proses: laporanList.filter((l) => l.status === 'Proses').length,
    pending: laporanList.filter((l) => l.status === 'Pending').length,
    categories: [...new Set(laporanList.map(l => l.category))],
  });

  const getCategoryCount = (category) => {
    return laporanList.filter(l => l.category === category).length;
  };

  return (
    <LaporanContext.Provider
      value={{
        laporanList,
        loading,
        addLaporan,
        updateStatus,
        deleteLaporan,
        editLaporan,
        getStats,
        getCategoryCount,
      }}
    >
      {children}
    </LaporanContext.Provider>
  );
}

export const useLaporan = () => useContext(LaporanContext);