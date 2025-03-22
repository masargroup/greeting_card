import Hero from './hero';
import CelebrationSection from './celebration';
import EidGreeting from './greeting';
import Cards from './cards';

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
