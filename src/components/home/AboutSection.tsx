import { Target, Lightbulb, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Materi Terstruktur',
    description: 'Kurikulum yang dirancang sistematis dari dasar hingga advanced.'
  },
  {
    icon: Lightbulb,
    title: 'Praktis & Aplikatif',
    description: 'Pembelajaran berbasis studi kasus dan pengalaman nyata di pasar.'
  },
  {
    icon: Shield,
    title: 'Mentor Berpengalaman',
    description: 'Dibimbing oleh praktisi keuangan dengan track record terpercaya.'
  },
  {
    icon: Rocket,
    title: 'Komunitas Supportif',
    description: 'Bergabung dengan ribuan member aktif untuk saling berbagi insight.'
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 relative bg-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mengapa Memilih <span className="text-gradient">Controls</span>?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Controls hadir sebagai solusi edukasi keuangan yang terpercaya di Indonesia. 
              Kami berkomitmen membantu Anda memahami dunia finance dengan cara yang mudah, 
              terstruktur, dan bisa langsung dipraktikkan dalam kehidupan sehari-hari.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun di industri keuangan, tim Controls 
              telah membantu ribuan orang Indonesia meningkatkan literasi keuangan dan 
              mencapai tujuan finansial mereka.
            </p>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-effect p-6 rounded-xl hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
