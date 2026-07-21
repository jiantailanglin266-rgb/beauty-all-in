import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FixedCta } from '@/components/layout/FixedCta';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Essence } from '@/components/sections/Essence';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Comparison } from '@/components/sections/Comparison';
import { CostComparison } from '@/components/sections/CostComparison';
import { Pricing } from '@/components/sections/Pricing';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Industries } from '@/components/sections/Industries';
import { Flow } from '@/components/sections/Flow';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { ContactForm } from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Essence />
        <About />
        <Services />
        <Comparison />
        <CostComparison />
        <Pricing />
        <BeforeAfter />
        <Industries />
        <Flow />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
      <FixedCta />
    </>
  );
}
