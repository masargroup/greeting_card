import Image from 'next/image';
import happyEid from '@/public/ui/happy-eid.png';
import candy from '@/public/ui/candy.png';
import starBig from '@/public/ui/star-big.svg';
import starSmall from '@/public/ui/star-small.svg';

export default function EidGreeting() {
  return (
    <section className="relative w-full flex justify-center py-8 px-4">
      <Image
        src={candy}
        alt="Candy"
        className="absolute top-8 left-4 w-16 md:w-24"
      />
      <Image
        src={starBig}
        alt="Big Star"
        className="absolute bottom-12 right-4 w-10 md:w-16"
      />
      <Image
        src={starSmall}
        alt="Small Star"
        className="absolute top-12 right-12 w-6 md:w-12"
      />

      <Image
        src={happyEid}
        alt="عيد سعيد"
        className="w-1/2 max-w-sm md:max-w-sm lg:max-w-xs object-contain"
      />
    </section>
  );
}
