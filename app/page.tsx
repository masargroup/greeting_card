import Hero from './components/hero';
import CelebrationSection from './components/celebration';
import EidGreeting from './components/greeting';
import Cards from './components/cards';

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <Hero />

      <CelebrationSection />

      <EidGreeting />

      <Cards />
    </div>
  );
}
