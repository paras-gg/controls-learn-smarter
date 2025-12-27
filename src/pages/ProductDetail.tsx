import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, CheckCircle, BookOpen, PlayCircle, Crown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductBySlug, productTypeLabels, ProductType } from '@/data/products';
import { getProductWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

import productEbook from '@/assets/product-ebook.jpg';
import productVideo from '@/assets/product-video.jpg';
import productMembership from '@/assets/product-membership.jpg';

const typeIcons: Record<ProductType, React.ComponentType<{ className?: string }>> = {
  ebook: BookOpen,
  video: PlayCircle,
  membership: Crown,
};

const typeImages: Record<ProductType, string> = {
  ebook: productEbook,
  video: productVideo,
  membership: productMembership,
};

const typeColors: Record<ProductType, string> = {
  ebook: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  video: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  membership: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/produk" replace />;
  }

  const Icon = typeIcons[product.type];

  return (
    <>
      <Helmet>
        <title>{product.title} — Controls</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <Layout>
        <section className="pt-32 pb-24 min-h-screen">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Katalog
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Image/Preview */}
              <div className="space-y-4">
                <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border relative">
                  <img 
                    src={typeImages[product.type]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-0">
                        Unggulan
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Details */}
              <div>
                {/* Type Badge */}
                <Badge variant="outline" className={cn('mb-4', typeColors[product.type])}>
                  <Icon className="w-3 h-3 mr-1" />
                  {productTypeLabels[product.type]}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Apa yang Anda Dapatkan:
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
                  <a
                    href={getProductWhatsAppLink(product.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hubungi WhatsApp
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Klik tombol di atas untuk melakukan pemesanan via WhatsApp. Tim kami akan membantu proses pembelian Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductDetail;
