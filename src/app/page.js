import HeroSection from '@/components/HeroSection';
import Introduction from '@/components/Introduction';
import Activities from '@/components/Activities';
import HowWeWork from '@/components/HowWeWork';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Introduction />
        <Activities />
        <HowWeWork />
      </main>
      <Footer />
    </>
  );
}