import Image from "next/image";

export default function Cards() {
  return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <Image
            src="https://images.unsplash.com/photo-1521336575822-6da63fb454f9?auto=format&fit=crop&w=800&q=80"
            alt="بطاقة تهنئة ١"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 text-right">
          <h2 className="text-xl font-semibold text-[#102B3F]">عيد سعيد</h2>
          
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <Image
            src="https://images.unsplash.com/photo-1556610973-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="بطاقة تهنئة ٢"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 text-right">
            <h2 className="text-xl font-semibold text-[#102B3F]">عيد سعيد</h2>

          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <Image
            src="https://images.unsplash.com/photo-1620912189865-6a84f18e6b07?auto=format&fit=crop&w=800&q=80"
            alt="بطاقة تهنئة ٣"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 text-right">
          <h2 className="text-xl font-semibold text-[#102B3F]">عيد سعيد</h2>

    
          </div>
        </div>
      </section>

  );
}
