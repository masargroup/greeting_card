import Image from "next/image";
import logo from "@/public/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4   items-center justify-between space-y-4 md:space-y-0">
      <div className="text-center md:text-right space-y-4">
        <div className=" justify-center md:justify-start">
          <Image
            src={logo}
            alt="Masar Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <p className="text-lg font-semibold text-[#052B36]">
          المسار الصحيح لتحقيق طموحاتك الوظيفية
        </p>

        <div className="space-x-6 mb-8">
          <a
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
          </a>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-gray-500 text-right">
          <p>جميع الحقوق محفوظة © 2025 | لفريق مبادرة مسار</p>
        </div>

        <div className="flex space-x-4 justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-gray-600 hover:text-[#34A0BD] transition"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
