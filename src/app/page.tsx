import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/contact';
import Feedback from '@/components/feedback';
import FirstSection from '@/components/firstSection';
import Pricing from '@/components/pricing';
import SecondSection from '@/components/secondSection';
import ThirdSection from '@/components/thirdSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col 
      bg-[url("/bg-home-1.svg")] w-full bg-no-repeat 
      bg-contain'
    >
      {/* <div className='absolute inset-0 -top-[15rem]'>
        <Image src='/bg-home-1.svg' alt='background image' fill />
      </div> */}
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Feedback />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
