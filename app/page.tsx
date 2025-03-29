import Hero from './components/hero';
import EidGreeting from './components/greeting';
import Cards from './components/cards';

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <Hero />
      <div className="text-[#052B36] text-lg sm:text-2xl font-medium mb-2 text-md md:text-2xl leading-loose">
        اختر بطاقتك</div>
      <EidGreeting />
      <div className="max-w-2xl text-center text-[#052B36] space-y-6 px-8">
        <p className="text-md md:text-2xl leading-loose">
          تصميم فريد يجسّد هوية مسار بأسلوب مميز
        </p>
      </div>
      <Cards />
    </div>
  );
}
