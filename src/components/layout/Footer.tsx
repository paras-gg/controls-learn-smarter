import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Instagram, Youtube } from 'lucide-react';
import { getGeneralWhatsAppLink } from '@/lib/whatsapp';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                C
              </div>
              <span className="text-xl font-bold text-foreground">Controls</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Belajar Finance Lebih Cerdas & Terstruktur. Kami menyediakan e-book, video course, dan membership untuk membantu Anda mencapai kebebasan finansial.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@controls.id"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produk</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produk?type=ebook" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  E-Book
                </Link>
              </li>
              <li>
                <Link to="/produk?type=video" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Video Course
                </Link>
              </li>
              <li>
                <Link to="/produk?type=membership" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Controls. Hak cipta dilindungi.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
