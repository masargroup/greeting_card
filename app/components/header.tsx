import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6 px-10 flex justify-start items-center">
      <Image 
        src='/ui/logo.svg'
        alt="شعار العيد" 
        width={100} 
        height={100} 
        className="object-contain"
      />
    </header>
  );
}
