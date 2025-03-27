import Image from "next/image";

export default function CelebrationSection() {
  return (
    <section className="w-full flex justify-center px-4 mb-60">
      <div className="max-w-2xl text-center text-[#052B36] space-y-6">
        <p className="text-md md:text-2xl leading-loose">
          {/* <span className="inline-flex items-center gap-2">

            <Image src='/ui/heart.svg' alt="Heart" width={24} height={24} />
          </span> */}
          &nbsp;
          تتقدم مبادرة مسار إليكم بأحر التهاني والتبريكات بمناسبة عيد الفطر المبارك، سائلين الله أن يعيده علينا وعليكم أعوامًا عديدة وأزمنة مديدة، وأن يملأ أيامكم بالخير والبركة والسعادة,
          &nbsp;
          <span className="text-[#34A0BD]  font-semibold">
            كلُ عامٍ وأنتمْ بخيرْ
          </span>
          &nbsp; !
          {/* &nbsp;يسرّنا أن نهنئكم بحلول عيد الفطر المبارك،شكرًا لجهودكم وتفانيكم، ونتطلع إلى المزيد من النجاحات معًا */}
          {/* <span className="inline-flex items-center gap-2">
            <Image src='/ui/heart.svg' alt="Heart" width={24} height={24} />
          </span> */}
        </p>
      </div>
    </section>
  );
}
