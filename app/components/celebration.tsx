import Image from "next/image";

export default function CelebrationSection() {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="max-w-2xl text-center text-[#323941] space-y-6">
        <p className="text-xl md:text-2xl leading-loose">
          <span className="inline-flex items-center gap-2">
            <Image src='/ui/heart.svg' alt="Heart" width={24} height={24} />
          </span>
          &nbsp;يسرّنا أن نهنئكم بحلول عيد الفطر المبارك،شكرًا لجهودكم وتفانيكم، ونتطلع إلى المزيد من النجاحات معًا
        </p>
      </div>
    </section>
  );
}
