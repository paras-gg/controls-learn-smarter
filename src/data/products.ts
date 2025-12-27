export type ProductType = 'ebook' | 'video' | 'membership';

export interface Product {
  id: string;
  title: string;
  slug: string;
  type: ProductType;
  price: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Dasar-Dasar Investasi Saham',
    slug: 'dasar-investasi-saham',
    type: 'ebook',
    price: 'Rp 149.000',
    description: 'Panduan lengkap untuk pemula memulai investasi saham dengan strategi yang tepat.',
    fullDescription: 'E-book komprehensif yang membahas seluruh aspek investasi saham dari nol. Anda akan mempelajari cara membaca laporan keuangan, analisis fundamental, cara memilih saham yang tepat, dan strategi diversifikasi portofolio yang efektif untuk investor pemula.',
    benefits: [
      'Memahami konsep dasar pasar modal',
      'Cara membaca dan menganalisis laporan keuangan',
      'Strategi pemilihan saham yang tepat',
      'Tips manajemen risiko investasi',
      'Template analisis saham siap pakai'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: '2',
    title: 'Masterclass Trading Saham',
    slug: 'masterclass-trading-saham',
    type: 'video',
    price: 'Rp 499.000',
    description: 'Video course intensif tentang teknik trading profesional untuk hasil maksimal.',
    fullDescription: 'Kursus video lengkap dengan 30+ jam materi pembelajaran yang membahas teknik trading dari level pemula hingga advanced. Termasuk analisis teknikal, membaca candlestick, penggunaan indikator, dan strategi entry-exit yang profitable.',
    benefits: [
      '30+ jam video materi berkualitas HD',
      'Akses selamanya tanpa batas waktu',
      'Studi kasus real-time market analysis',
      'Template trading plan profesional',
      'Grup diskusi eksklusif dengan mentor'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: '3',
    title: 'Controls Academy Premium',
    slug: 'controls-academy-premium',
    type: 'membership',
    price: 'Rp 299.000/bulan',
    description: 'Akses unlimited ke seluruh materi pembelajaran dan komunitas eksklusif.',
    fullDescription: 'Membership premium yang memberikan akses penuh ke seluruh katalog e-book dan video course Controls. Dapatkan juga akses ke webinar bulanan, sinyal trading harian, dan komunitas diskusi eksklusif dengan para trader profesional.',
    benefits: [
      'Akses ke seluruh e-book dan video course',
      'Webinar live bulanan dengan expert',
      'Sinyal trading harian via Telegram',
      'Komunitas Discord eksklusif',
      'Konsultasi 1-on-1 setiap bulan',
      'Update materi terbaru secara berkala'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: '4',
    title: 'Manajemen Keuangan Pribadi',
    slug: 'manajemen-keuangan-pribadi',
    type: 'ebook',
    price: 'Rp 99.000',
    description: 'Panduan praktis mengatur keuangan pribadi untuk masa depan yang lebih baik.',
    fullDescription: 'E-book yang mengajarkan cara mengatur keuangan pribadi secara efektif. Mulai dari budgeting, saving, hingga strategi investasi sederhana untuk mencapai kebebasan finansial.',
    benefits: [
      'Template budgeting Excel siap pakai',
      'Strategi menabung yang efektif',
      'Tips mengurangi pengeluaran tidak perlu',
      'Cara membuat dana darurat',
      'Panduan memulai investasi sederhana'
    ],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: '5',
    title: 'Crypto Trading 101',
    slug: 'crypto-trading-101',
    type: 'video',
    price: 'Rp 399.000',
    description: 'Pelajari dasar-dasar trading cryptocurrency dengan aman dan menguntungkan.',
    fullDescription: 'Video course lengkap tentang dunia cryptocurrency dan cara trading yang aman. Materi mencakup pemahaman blockchain, analisis market crypto, manajemen risiko, dan strategi trading yang sudah terbukti profitable.',
    benefits: [
      '20+ jam video pembelajaran',
      'Pemahaman teknologi blockchain',
      'Strategi trading crypto yang aman',
      'Analisis market cryptocurrency',
      'Tips keamanan wallet dan exchange'
    ],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: '6',
    title: 'Financial Freedom Blueprint',
    slug: 'financial-freedom-blueprint',
    type: 'ebook',
    price: 'Rp 199.000',
    description: 'Roadmap lengkap mencapai kebebasan finansial dalam 5 tahun.',
    fullDescription: 'E-book komprehensif yang memberikan blueprint step-by-step untuk mencapai financial freedom. Termasuk strategi passive income, investasi jangka panjang, dan mindset yang tepat untuk sukses finansial.',
    benefits: [
      'Roadmap 5 tahun menuju financial freedom',
      'Strategi passive income yang proven',
      'Tips investasi jangka panjang',
      'Mindset sukses finansial',
      'Worksheet perencanaan keuangan'
    ],
    image: '/placeholder.svg',
    featured: false
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByType = (type: ProductType): Product[] => {
  return products.filter(p => p.type === type);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const productTypeLabels: Record<ProductType, string> = {
  ebook: 'E-Book',
  video: 'Video Course',
  membership: 'Membership'
};
