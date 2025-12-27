import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, Crown, ArrowRight } from 'lucide-react';
import { Product, productTypeLabels, ProductType } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import productEbook from '@/assets/product-ebook.jpg';
import productVideo from '@/assets/product-video.jpg';
import productMembership from '@/assets/product-membership.jpg';

interface ProductCardProps {
  product: Product;
  index?: number;
}

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

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = typeIcons[product.type];

  return (
    <Link
      to={`/produk/${product.slug}`}
      className={cn(
        'group block glass-effect rounded-xl overflow-hidden hover-lift',
        'opacity-0 animate-slide-up',
        `stagger-${Math.min(index + 1, 5)}`
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img 
          src={typeImages[product.type]} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        {product.featured && (
          <div className="absolute top-3 right-3 z-20">
            <Badge className="bg-primary text-primary-foreground border-0">
              Unggulan
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className={cn('text-xs', typeColors[product.type])}>
            <Icon className="w-3 h-3 mr-1" />
            {productTypeLabels[product.type]}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
            Lihat Detail
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};
