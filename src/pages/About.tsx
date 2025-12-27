import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '1,000+', label: 'Member Aktif' },
  { icon: Award, value: '10+', label: 'Produk Digital' },
  { icon: TrendingUp, value: '95%', label: 'Tingkat Kepuasan' },
  { icon: Target, value: '5+', label: 'Tahun Pengalaman' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Kami — Controls</title>
        <meta 
          name="description" 
          content="Controls adalah platform edukasi finance terpercaya di Indonesia. Kami membantu ribuan orang meningkatkan literasi keuangan mereka." 
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-transparent to-transparent blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tentang <span className="text-gradient">Controls</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Controls hadir sebagai jembatan antara Anda dan dunia keuangan. Kami percaya 
                bahwa setiap orang berhak mendapatkan edukasi finansial yang berkualitas, 
                mudah dipahami, dan bisa langsung diterapkan.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center opacity-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Cerita <span className="text-gradient">Kami</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Controls didirikan dengan satu misi sederhana: membuat edukasi keuangan 
                  menjadi lebih accessible dan mudah dipahami oleh semua kalangan di Indonesia.
                </p>
                <p>
                  Berawal dari keprihatinan terhadap rendahnya literasi keuangan di Indonesia, 
                  tim kami yang terdiri dari praktisi keuangan dan educator berpengalaman 
                  memutuskan untuk berbagi ilmu melalui platform digital.
                </p>
                <p>
                  Nama "Controls" sendiri melambangkan kemampuan untuk mengendalikan keuangan 
                  pribadi. Kami percaya bahwa dengan pengetahuan yang tepat, setiap orang 
                  dapat mengambil kendali atas masa depan finansial mereka.
                </p>
                <p>
                  Hingga saat ini, Controls telah membantu ribuan member dari berbagai latar 
                  belakang untuk memahami investasi, trading, dan manajemen keuangan pribadi. 
                  Kami terus berkomitmen untuk menghadirkan konten edukasi yang relevan dan 
                  up-to-date dengan kondisi pasar Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Nilai <span className="text-gradient">Kami</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-effect p-8 rounded-xl text-center hover-lift">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fokus pada Hasil</h3>
                <p className="text-muted-foreground text-sm">
                  Semua materi dirancang agar bisa langsung dipraktikkan dan memberikan hasil nyata.
                </p>
              </div>
              <div className="glass-effect p-8 rounded-xl text-center hover-lift">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integritas</h3>
                <p className="text-muted-foreground text-sm">
                  Kami hanya mengajarkan apa yang sudah terbukti dan tidak menjanjikan hal yang tidak realistis.
                </p>
              </div>
              <div className="glass-effect p-8 rounded-xl text-center hover-lift">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Kami terus update dengan perkembangan terbaru di dunia finance dan investasi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default About;
