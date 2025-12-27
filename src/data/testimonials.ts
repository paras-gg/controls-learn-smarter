export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    role: 'Karyawan Swasta',
    content: 'Controls benar-benar mengubah cara saya memandang investasi. Sekarang saya sudah punya portofolio saham yang growing 30% dalam setahun!',
    avatar: '/placeholder.svg',
    rating: 5
  },
  {
    id: '2',
    name: 'Siti Rahma',
    role: 'Entrepreneur',
    content: 'Video course trading-nya sangat comprehensive. Penjelasannya mudah dipahami bahkan untuk pemula seperti saya.',
    avatar: '/placeholder.svg',
    rating: 5
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Fresh Graduate',
    content: 'E-book manajemen keuangan-nya membantu saya mengatur gaji pertama dengan baik. Sekarang sudah bisa menabung 30% setiap bulan!',
    avatar: '/placeholder.svg',
    rating: 5
  },
  {
    id: '4',
    name: 'Diana Kusuma',
    role: 'Ibu Rumah Tangga',
    content: 'Membership premium sangat worth it! Banyak insight berharga dari komunitas dan webinar bulanannya.',
    avatar: '/placeholder.svg',
    rating: 5
  },
  {
    id: '5',
    name: 'Reza Firmansyah',
    role: 'Freelancer',
    content: 'Setelah ikut masterclass trading, return trading saya meningkat signifikan. Materinya sangat aplikatif!',
    avatar: '/placeholder.svg',
    rating: 5
  },
  {
    id: '6',
    name: 'Mega Putri',
    role: 'Mahasiswa',
    content: 'Controls adalah investasi terbaik untuk diri sendiri. Ilmu finance yang diajarkan sangat relevan dengan kondisi Indonesia.',
    avatar: '/placeholder.svg',
    rating: 5
  }
];
