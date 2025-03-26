import Image from "next/image";
import logo from '@/public/ui/logo.png'; 

export default function Header() {
  return (
    <header className="py-6 px-10 flex justify-start items-center">
      <Image 
        src={logo} 
        alt="شعار العيد" 
        width={100} 
        height={100} 
        className="object-contain"
      />
    </header>
  );
}
