import Hero from './components/hero';
import EidGreeting from './components/greeting';
import Cards from './components/cards';

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <Hero />
      <div className="text-[#052B36] text-lg sm:text-2xl font-medium mb-8 text-md md:text-2xl leading-loose">
        اختر بطاقتك
      </div>
      
      <div className='py-14 md:px-16 w-full max-w-5xl bg-white rounded-lg shadow-md'>
        <Cards />
      </div>
    </div>
  );
}
