import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { faqs } from '@/data/faqs';
import { CTASection } from '@/components/home/CTASection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ — Controls</title>
        <meta 
          name="description" 
          content="Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan layanan Controls." 
        />
      </Helmet>

      <Layout>
        <section className="pt-32 pb-24 min-h-screen">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan layanan Controls.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="glass-effect rounded-xl border-0 px-6 overflow-hidden opacity-0 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default FAQ;
