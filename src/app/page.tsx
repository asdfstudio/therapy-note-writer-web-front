import FirstSection from '@/components/firstSection';
import SecondSection from '@/components/secondSection';
import ThirdSection from '@/components/thirdSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
