import { ProductType, productTypeLabels } from '@/data/products';
import { BookOpen, PlayCircle, Crown, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  activeFilter: ProductType | 'all';
  onFilterChange: (filter: ProductType | 'all') => void;
}

const filters: { value: ProductType | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'all', label: 'Semua', icon: LayoutGrid },
  { value: 'ebook', label: productTypeLabels.ebook, icon: BookOpen },
  { value: 'video', label: productTypeLabels.video, icon: PlayCircle },
  { value: 'membership', label: productTypeLabels.membership, icon: Crown },
];

export const ProductFilter = ({ activeFilter, onFilterChange }: ProductFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            activeFilter === value
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
          )}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
};
