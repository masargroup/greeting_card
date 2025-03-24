import Image from "next/image";
import ballon1 from '@/public/eid-ballon1.png';
import ballon2 from '@/public/eid-ballon2.png';
import activitiesText from '@/public/eid-activities.png';

export default function Hero() {
  return (
    <section className="relative text-center space-y-6 flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <div className="text-[#34A0BD] text-xl sm:text-4xl font-semibold">
        كلُ عامٍ وأنتمْ بخيرْ
      </div>

      <div className="text-[#052B36] text-lg sm:text-2xl font-medium mb-16">
        عيدكم مبارك
      </div>

      <Image
        src={ballon1}
        alt="Balloon 1"
        className="absolute left-[-30%] top-[-10%] transform -translate-y-1/4 md:left-[-500px] md:top-[10%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[120px] sm:h-[120px] md:h-[180px] lg:h-[240px]"
        width={150} 
        height={150}
      />
      
      <Image
        src={activitiesText}
        alt="Activities"
        className="relative z-10 mb-24 w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[90px] md:h-[200px] md:mb-4"
        width={300} 
        height={100} 
      />

      <Image
        src={ballon2}
        alt="Balloon 2"
        className="absolute right-[-30%] top-[85%] transform -translate-y-1/4 md:right-[-500px] md:top-[80%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[140px] sm:h-[120px] md:h-[150px] lg:h-[270px]"
        width={150} 
        height={150}
      />
    </section>
  );
}
