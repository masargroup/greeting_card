'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { card1, card2, card3, card4 } from '@/public/cards/images';
import { Logo } from '@/public/ui/ui';

export default function GreetingCardPage() {
  const [selectedCard, setSelectedCard] = useState<keyof typeof cardStyles | ''>('');
  const [userName, setUserName] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(true);

  const cardStyles = {
    card1: { image: card1, position: { x: 550, y: 1090 }, color: 'black' },
    card2: { image: card2, position: { x: 530, y: 850 }, color: '#0c596f' },
    card3: { image: card3, position: { x: 530, y: 850 }, color: '#0c596f' },
    card4: { image: card4, position: { x: 530, y: 850 }, color: '#0c596f' },
  };

  const handleCardSelection = (cardKey: keyof typeof cardStyles) => {
    setSelectedCard(cardKey);
    setIsModalOpen(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowLogo(e.target.checked);
  };

  const renderCardWithName = (cardUrl: string, name: string, position: { x: number, y: number }, color: string, logoUrl: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');
    const logo = document.createElement('img');

    img.src = cardUrl;
    logo.src = logoUrl;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (ctx) {
        ctx.drawImage(img, 0, 0);
        ctx.font = '40px El Messiri';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(name, position.x, position.y);

        if (showLogo) {
          logo.onload = () => {
            const logoWidth = 170;
            const logoHeight = 140;
            const logoX = 900;
            const logoY = 20;
            ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

            const previewUrl = canvas.toDataURL('image/png');
            setPreviewUrl(previewUrl);
          };

          if (logo.complete) {
            logo.onload?.(new Event('load'));
          }
        } else {
          const previewUrl = canvas.toDataURL('image/png');
          setPreviewUrl(previewUrl);
        }
      }
    };

    if (img.complete) {
      img.onload?.(new Event('load'));
    }
  };

  useEffect(() => {
    if (userName && selectedCard) {
      const { image, position, color } = cardStyles[selectedCard];
      renderCardWithName(image.src, userName, position, color, Logo.src);
    }
  }, [userName, selectedCard, showLogo]);

  const handleDownload = () => {
    if (previewUrl) {
      const downloadLink = document.createElement('a');
      downloadLink.href = previewUrl;
      downloadLink.download = 'greeting-card.png';
      downloadLink.click();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewUrl(null);
    setUserName('');
  };

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto p-5">
        {Object.entries(cardStyles).map(([key, { image }]) => (
          <div key={key}>
            <Image
              src={image}
              alt={`بطاقة تهنئة ${key}`}
              width={400}
              height={300}
              className="object-cover w-full  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            />
            <div className="my-4 text-right">
              <button
                onClick={() => handleCardSelection(key as keyof typeof cardStyles)}
                className="bg-[#052B36] text-white w-full py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
              >
                معـاينة وتحميــل
              </button>
            </div>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-full sm:w-96 m-5">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview Card" className="w-full h-auto" />
            ) : (
              <div> الرجاء إدخال اسم صاحب التهنئة للمعاينة</div>
            )}
            <div className="mt-4">
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="اسم صاحب التهنئة"
                className="w-full px-3 py-2 border border-gray-300 focus:border-[#34A0BD] focus-within:outline-[#34A0BD] rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showLogo}
                  onChange={handleLogoChange}
                  className="mr-2"
                />
                إظهار شعار مسار
              </label>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleDownload}
                className="bg-[#34A0BD] text-white px-4 py-2 rounded-md"
              >
                تنزيــل
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
