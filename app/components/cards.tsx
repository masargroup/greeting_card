'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';

export default function GreetingCardPage() {
  const [selectedCard, setSelectedCard] = useState<keyof typeof cardStyles | ''>('');
  const [userName, setUserName] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const cardStyles = {
    '/cards/Card_01.png': { position: { x: 1000, y: 1490 }, color: 'black' },
    '/cards/Card_02.png': { position: { x: 1000, y: 1490 }, color: 'white' },//
    '/cards/Card_03.png': { position: { x: 1000, y: 1398 }, color: 'white' }, //
    '/cards/Card_04.png': { position: { x: 1000, y: 1490 }, color: 'white' }, //
  };

  const handleCardSelection = (cardUrl: "" | "/cards/Card_01.png" | "/cards/Card_02.png" | "/cards/Card_03.png" | "/cards/Card_04.png") => {
    setSelectedCard(cardUrl);
    setIsModalOpen(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const renderCardWithName = (cardUrl: string, name: string, position: { x: number, y: number }, color: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');

    img.src = cardUrl;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (ctx) {
        ctx.drawImage(img, 0, 0);
        ctx.font = '45px El Messiri';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(name, position.x, position.y);

        const previewUrl = canvas.toDataURL('image/png');
        setPreviewUrl(previewUrl);
      }
    };
  };

  useEffect(() => {
    if (userName && selectedCard) {
      const { position, color } = cardStyles[selectedCard] || { position: { x: 900, y: 1490 }, color: 'white' };
      renderCardWithName(selectedCard, userName, position, color);
    }
  }, [userName, selectedCard]);

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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
        {/* <div>
          <Image
            src="/cards/Card_01.png"
            alt="بطاقة تهنئة ١"
            width={400}
            height={300}
            className="object-cover w-full h-48 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
          />
          <div className="my-4 text-right">
            <button
              onClick={() => handleCardSelection('/cards/Card_01.png')}
              className="bg-[#052B36] text-white px-14 py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
            >
              معـاينة وتحميــل
            </button>
          </div>
        </div> */}
        <div>
          <Image
            src="/cards/Card_02.png"
            alt="بطاقة تهنئة ١"
            width={400}
            height={300}
            className="object-cover w-full h-48 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
          />
          <div className="my-4 text-right">
            <button
              onClick={() => handleCardSelection('/cards/Card_02.png')}
              className="bg-[#052B36] text-white px-14 py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
            >
              معـاينة وتحميــل
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/cards/Card_03.png"
            alt="بطاقة تهنئة ١"
            width={400}
            height={300}
            className="object-cover w-full h-48 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
          />
          <div className="my-4 text-right">
            <button
              onClick={() => handleCardSelection('/cards/Card_03.png')}
              className="bg-[#052B36] text-white px-14 py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
            >
              معـاينة وتحميــل
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/cards/Card_04.png"
            alt="بطاقة تهنئة ١"
            width={400}
            height={300}
            className="object-cover w-full h-48 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
          />
          <div className="my-4 text-right">
            <button
              onClick={() => handleCardSelection('/cards/Card_04.png')}
              className="bg-[#052B36] text-white px-14 py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
            >
              معـاينة وتنزيــل
            </button>
          </div>
        </div>
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
