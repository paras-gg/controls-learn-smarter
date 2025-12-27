import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilter } from '@/components/products/ProductFilter';
import { products, ProductType } from '@/data/products';

const ProductCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = (searchParams.get('type') as ProductType | 'all') || 'all';
  const [activeFilter, setActiveFilter] = useState<ProductType | 'all'>(initialFilter);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((product) => product.type === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: ProductType | 'all') => {
    setActiveFilter(filter);
    if (filter === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', filter);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Katalog Produk — Controls</title>
        <meta 
          name="description" 
          content="Jelajahi koleksi e-book, video course, dan membership edukasi finance dari Controls. Pilih produk yang sesuai dengan kebutuhan belajar Anda." 
        />
      </Helmet>

      <Layout>
        <section className="pt-32 pb-24 min-h-screen">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Katalog <span className="text-gradient">Produk</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan berbagai produk edukasi finance yang dirancang untuk membantu Anda 
                mencapai kebebasan finansial.
              </p>
            </div>

            {/* Filter */}
            <div className="flex justify-center mb-10">
              <ProductFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Tidak ada produk dalam kategori ini.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductCatalog;
