import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { AboutSection } from '@/components/home/AboutSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Controls — Belajar Finance Lebih Cerdas & Terstruktur</title>
        <meta 
          name="description" 
          content="Controls adalah platform edukasi finance terpercaya di Indonesia. Dapatkan e-book, video course, dan membership untuk meningkatkan literasi keuangan Anda." 
        />
        <meta name="keywords" content="edukasi finance, belajar investasi, literasi keuangan, e-book finance, video course investasi" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
