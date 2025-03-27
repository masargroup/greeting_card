import Image from "next/image";
import { Logo } from '@/public/ui/ui'


export default function Header() {
  return (
    <header className="py-6 px-10 flex justify-between  items-center">
      <Image
        src={Logo}
        alt="شعار العيد"
        width={100}
        height={100}
        className="object-contain"
      />
      {/* <button className="bg-[#052B36] text-white px-4 py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
      >
        اختر بطاقة تهنئة
      </button> */}
    </header>
  );
}
