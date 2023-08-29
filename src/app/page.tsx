import Contact from '@/components/contact';
import Feedback from '@/components/feedback';
import FirstSection from '@/components/firstSection';
import Pricing from '@/components/pricing';
import SecondSection from '@/components/secondSection';
import ThirdSection from '@/components/thirdSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Feedback />
      <Pricing />
      <Contact />
    </main>
  );
}
