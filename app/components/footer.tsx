import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin, FaSnapchat, FaYoutube } from "react-icons/fa";
import { Logo } from '@/public/ui/ui';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-2 px-4  w-full  items-center justify-between space-y-4 md:space-y-0">
      <div className="text-center md:text-right space-y-4">
        <div className=" justify-center md:justify-start">
          <Image
            src={Logo}
            alt="Masar Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <p className="text-sm md:text-lg font-semibold text-[#052B36]">
          المسار الصحيح لتحقيق طموحاتك الوظيفية
        </p>

        <div className="space-x-6">
          {/* <a
            href="#about"
            className="text-sm text-gray-500 hover:text-[#34A0BD]"
          >
            عن مسار
          </a>
          <a
            href="#join"
            className="text-sm text-gray-500 hover:text-[#34A0BD]"
          >
            انضم إلينا
          </a>
          <a
            href="#privacy"
            className="text-sm text-gray-500 hover:text-[#34A0BD]"
          >
            سياسة الخصوصية والإستخدام
          </a>
          <a
            href="#support"
            className="text-sm text-gray-500 hover:text-[#34A0BD]"
          >
            الدعم الفني
          </a> */}
        </div>
      </div>


      <div className="flex justify-between">
        <div className="flex space-x-4 text-center md:text-start">

          <a
            href="https://x.com/masar_2030?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.instagram.com/masar_2030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/masar2030/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.snapchat.com/add/masar2030?share_id=VD+Ua2rDTP+4sBuEKPXeMw&locale=ar_EG&sid=cf8b935f9f3b43dba340328d38137917"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchat
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.youtube.com/@MASAR-yt1wy/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>جميع الحقوق محفوظة © 2025 | لفريق مبادرة مسار</p>
        </div>
      </div>
    </footer>
  );
}
