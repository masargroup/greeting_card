import Image from "next/image";
import heart from "@/public/heart.png";

export default function CelebrationSection() {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="max-w-3xl text-center text-[#323941] space-y-6">
        <p className="text-xl md:text-2xl leading-loose">
          <span className="inline-flex items-center gap-2">
            <Image src={heart} alt="Heart" width={24} height={24} />
          </span>
          &nbsp;يازين العيد اللي يفرح القلوب، جهزوا العود والبخور وهداياكم وعيدياتكم،
          وأكيد كشختكم ما عليها كلام، الله يجعله عيد سعيد علينا وعليكم!
        </p>
      </div>
    </section>
  );
}
