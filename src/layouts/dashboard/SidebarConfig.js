import { Icon } from '@iconify/react';
import Dashboard from '@iconify/icons-eva/pie-chart-2-fill';
import Pemerintah from '@iconify/icons-eva/shield-fill';
import Tentang from '@iconify/icons-eva/info-fill';
import Bank from '@iconify/icons-eva/cube-fill';
import Sarana from '@iconify/icons-eva/layers-fill';
import Layanan from '@iconify/icons-eva/people-fill';
import Pengumuman from '@iconify/icons-eva/volume-down-fill';
import Informasi from '@iconify/icons-eva/radio-fill';
import Galeri from '@iconify/icons-eva/tv-fill';
import Reg from '@iconify/icons-eva/lock-fill';
import Log from '@iconify/icons-eva/person-add-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

// const sidebarConfig = [
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: getIcon(pieChart2Fill)
//   },
//   {
//     title: 'user',
//     path: '/dashboard/user',
//     icon: getIcon(peopleFill)
//   },
//   {
//     title: 'product',
//     path: '/dashboard/products',
//     icon: getIcon(shoppingBagFill)
//   },
//   {
//     title: 'blog',
//     path: '/dashboard/blog',
//     icon: getIcon(fileTextFill)
//   },
//   {
//     title: 'login',
//     path: '/login',
//     icon: getIcon(lockFill)
//   },
//   {
//     title: 'register',
//     path: '/register',
//     icon: getIcon(personAddFill)
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: getIcon(alertTriangleFill)
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: getIcon(alertTriangleFill)
//   }
// ];

const sidebarConfig = [
  {
    title: 'Dashboard',
    icon: getIcon(Dashboard),
    path: '/dashboard/app'
  },
  {
    id: 'pemerintahan',
    title: 'Pemerintahan',
    icon: getIcon(Pemerintah),
    children: [
      {
        id: 'datapegawai',
        title: 'Data Pegawai',
        path: '/dashboard/user'
      },
      {
        id: 'dokumen',
        title: 'Dokumen Perencanaan',
        path: '/dashboard/user'
      },
      {
        id: 'prestasi',
        title: 'Prestasi Inovasi',
        path: '/dashboard/user'
      },
      {
        id: 'produk',
        title: 'Produk Hukum',
        path: '/dashboard/user'
      },
      {
        id: 'profilwalikota',
        title: 'Profil Walikota',
        path: '/dashboard/user'
      },
      {
        id: 'profilwakilwalikota',
        title: 'Profil Wakil Walikota',
        path: '/dashboard/user'
      },
      {
        id: 'programkerja',
        title: 'Program Kerja',
        path: '/dashboard/user'
      },
      {
        id: 'skpd',
        title: 'SKPD',
        path: '/dashboard/user'
      },
      {
        id: 'strukturpemerintahan',
        title: 'Struktur Pemerintahan',
        path: '/dashboard/user'
      },
      {
        id: 'visimisi',
        title: 'Visi Misi',
        path: '/dashboard/products'
      }
    ]
  },
  {
    id: 'tentang',
    title: 'Tentang',
    icon: getIcon(Tentang),
    children: [
      {
        id: 'artilambangkotabitung',
        title: 'Arti Lambang Kota Bitung',
        path: '/dashboard/user'
      },
      {
        id: 'daftarwalikotabitung',
        title: 'Daftar Walikota Bitung',
        path: '/dashboard/user'
      },
      {
        id: 'kondisidemografi',
        title: 'Kondisi Demografi',
        path: '/dashboard/user'
      },
      {
        id: 'kondisigeografi',
        title: 'Kondisi Geografi',
        path: '/dashboard/user'
      },
      {
        id: 'potensikotabitung',
        title: 'Potensi Kota Bitung',
        path: '/dashboard/user'
      },
      {
        id: 'sejarahkotabitung',
        title: 'Sejarah Kota Bitung',
        path: '/dashboard/user'
      }
    ]
  },
  {
    id: 'saranaprasarana',
    title: 'Sarana & Prasarana',
    icon: getIcon(Sarana),
    children: [
      {
        id: 'perusahaandaerah',
        title: 'Perusahaan Daerah',
        path: '/dashboard/user'
      },
      {
        id: 'puskesmas',
        title: 'Puskesmas',
        path: '/dashboard/user'
      },
      {
        id: 'rumahhibadah',
        title: 'Rumah Ibadah',
        path: '/dashboard/user'
      },
      {
        id: 'rumahsakit',
        title: 'Rumah Sakit',
        path: '/dashboard/user'
      },
      {
        id: 'sekolah',
        title: 'Sekolah',
        path: '/dashboard/user'
      }
    ]
  },
  {
    id: 'layanan',
    title: 'Layanan',
    path: '/dashboard/user',
    icon: getIcon(Layanan)
  },
  {
    id: 'bankdata',
    title: 'Bank Data',
    path: '/dashboard/user',
    icon: getIcon(Bank)
  },
  {
    id: 'pengumuman',
    title: 'Pengumuman',
    path: '/dashboard/user',
    icon: getIcon(Pengumuman)
  },
  {
    id: 'informasi',
    title: 'Informasi',
    icon: getIcon(Informasi),
    children: [
      {
        id: 'berita',
        title: 'Berita',
        path: '/dashboard/berita'
      },
      {
        id: 'event',
        title: 'Event',
        path: '/dashboard/user'
      }
    ]
  },
  {
    id: 'galeri',
    title: 'Galeri',
    icon: getIcon(Galeri),
    children: [
      {
        id: 'galerifoto',
        title: 'Galeri Foto',
        path: '/dashboard/user'
      },
      {
        id: 'Galeri Video',
        title: 'Galeri Video',
        path: '/dashboard/user'
      },
      {
        title: 'login',
        path: '/login',
        icon: getIcon(Log)
      },
      {
        title: 'register',
        path: '/register',
        icon: getIcon(Reg)
      }
    ]
  }
];

export default sidebarConfig;
