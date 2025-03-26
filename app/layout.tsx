import type { ReactNode } from 'react';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#F9FAFB] text-[#323941] font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
