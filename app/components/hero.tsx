'use client';
import Image from "next/image";
import $ from 'jquery';
import { useEffect } from "react";
import { Activities, Ballon1, Ballon2 } from '@/public/ui/ui'

export default function Hero() {
  useEffect(() => {
    const moveBalloon = () => {
      $('.balloon')
        .animate({ top: '+=10px' }, 1000)
        .animate({ top: '-=10px' }, 1000, moveBalloon);
    };
    moveBalloon();
  }, []);

  return (
    <section className="relative text-center flex flex-col items-center sm:px-4 md:px-0 pt-12 mb-50">
      <div className="text-[#052B36] text-lg sm:text-2xl font-medium mb-2 text-md md:text-2xl leading-loose">
        عيد فطر مبارك
      </div>
      <Image
        src={Ballon1}
        alt="Balloon 1"
        className="balloon absolute left-[-0%] top-[-10%] transform -translate-y-1/4 md:left-[-300px] md:top-[10%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[120px] sm:h-[120px] md:h-[180px] lg:h-[240px]"
        width={150}
        height={150}
      />

      <Image
        src={Activities}
        alt="Activities"
        className="relative z-10 mb-8 w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[90px] md:h-[200px] md:mb-12"
        width={300}
        height={100}
      />

      <div className="max-w-2xl text-center text-[#052B36] space-y-6">
        <p className="text-md md:text-2xl leading-loose">
          تهنئكم مبادرة مسار بعيد الفطر المبارك، متمنين لكم عيدًا سعيدًا مليئًا بالخير والبركة.
          &nbsp;
          <span className="text-[#34A0BD] font-semibold">
            كلُ عامٍ وأنتمْ بخيرْ
          </span>
          &nbsp; !
        </p>
      </div>

      <Image
        src={Ballon2}
        alt="Balloon 2"
        className="balloon absolute right-[-0%] top-[120%] transform -translate-y-1/4 md:right-[-300px] md:top-[100%] md:transform md:-translate-y-1/4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[140px] sm:h-[120px] md:h-[150px] lg:h-[270px]"
        width={150}
        height={150}
      />
    </section>
  );
}
