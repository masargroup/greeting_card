import Image from "next/image";
import ballon1 from '@/public/ui/eid-ballon1.png';
import ballon2 from '@/public/ui/eid-ballon2.png';
import activitiesText from '@/public/ui/eid-activities.png';

export default function Hero() {
  return (
    <section className="relative text-center flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <Image
        src={ballon1}
        alt="Balloon 1"
        className="absolute left-[-8%] top-[-10%] transform -translate-y-1/4 md:left-[-500px] md:top-[10%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[120px] sm:h-[120px] md:h-[180px] lg:h-[240px]"
        width={150} 
        height={150}
      />
      
      <Image
        src={activitiesText}
        alt="Activities"
        className="relative z-10"
        width={300} 
        height={100} 
      />

      <Image
        src={ballon2}
        alt="Balloon 2"
        className="absolute right-[-10%] top-[80%] transform -translate-y-1/4 md:right-[-500px] md:top-[30%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[130px] sm:h-[120px] md:h-[150px] lg:h-[270px]"
        width={150} 
        height={150}
      />
    </section>
  );
}
