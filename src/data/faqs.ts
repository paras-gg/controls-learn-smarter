export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Bagaimana cara membeli produk di Controls?',
    answer: 'Untuk membeli produk di Controls, cukup pilih produk yang Anda inginkan, lalu klik tombol "Hubungi WhatsApp". Tim kami akan membantu proses pembelian dan pengiriman produk digital ke email Anda.'
  },
  {
    id: '2',
    question: 'Apakah ada garansi untuk produk yang dibeli?',
    answer: 'Ya, kami memberikan garansi 7 hari untuk semua produk digital. Jika Anda merasa produk tidak sesuai ekspektasi, kami akan mengembalikan 100% pembayaran Anda.'
  },
  {
    id: '3',
    question: 'Bagaimana cara mengakses video course setelah membeli?',
    answer: 'Setelah pembayaran terkonfirmasi, Anda akan menerima link akses ke platform pembelajaran kami via email. Video course dapat diakses kapan saja tanpa batas waktu.'
  },
  {
    id: '4',
    question: 'Apakah membership bisa di-cancel kapan saja?',
    answer: 'Ya, membership Controls Academy Premium dapat di-cancel kapan saja. Tidak ada kontrak jangka panjang. Anda tetap bisa mengakses hingga periode berlangganan berakhir.'
  },
  {
    id: '5',
    question: 'Apakah materi cocok untuk pemula?',
    answer: 'Tentu! Semua materi kami dirancang untuk bisa dipahami oleh pemula sekalipun. Kami menyediakan pembelajaran bertahap dari dasar hingga advanced.'
  },
  {
    id: '6',
    question: 'Apakah ada konsultasi langsung dengan mentor?',
    answer: 'Untuk member premium, kami menyediakan sesi konsultasi 1-on-1 setiap bulan. Selain itu, ada juga grup diskusi eksklusif yang aktif setiap hari.'
  },
  {
    id: '7',
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima pembayaran via transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana), dan QRIS. Tim kami akan memberikan detail pembayaran saat Anda menghubungi WhatsApp.'
  },
  {
    id: '8',
    question: 'Berapa lama akses e-book dan video course?',
    answer: 'Untuk e-book dan video course satuan, Anda mendapatkan akses selamanya (lifetime access). Untuk membership, akses berlaku selama masa berlangganan aktif.'
  }
];
