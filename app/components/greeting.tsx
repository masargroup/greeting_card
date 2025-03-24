import Image from 'next/image';

export default function EidGreeting() {
  return (
    <section className="relative w-full flex justify-center py-8 px-4">

      <Image
        src='/ui/candy.svg'
        alt="Candy"
        width={64} 
        height={64} 
        className="absolute top-8 left-4 md:w-24 md:h-24"
      />


      <Image
        src='/ui/star-big.svg'
        alt="Big Star"
        width={40}
        height={40}
        className="absolute bottom-12 right-4 md:w-16 md:h-16"
      />


      <Image
        src='/ui/star-small.svg'
        alt="Small Star"
        width={24}
        height={24}
        className="absolute top-12 right-12 md:w-12 md:h-12"
      />


      <Image
        src='/ui/happy-eid.svg'
        alt="عيد سعيد"
        width={300} 
        height={100} 
        className="w-1/2 max-w-sm md:max-w-sm lg:max-w-xs object-contain"
      />
    </section>
  );
}
