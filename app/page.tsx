import Hero from './components/hero';
import CelebrationSection from './components/celebration';
import EidGreeting from './components/greeting';
import Cards from './components/cards';

export default function Page() {
  //     // Use the following code to get the data and then send it to the database, I have put them to make it easy so who gonna do the rest of the code will know how to do it.
  // const [message, setMessage] = useState('');
  // const [userName, setUserName] = useState('');
  // const [url, setUrl] = useState('');
  // const [statusMessage, setStatusMessage] = useState('');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const response = await fetch('/api/messages', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ message, userName, url }),
  //   });
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-8 space-y-12">
      <Hero />

      {/* <CelebrationSection /> */}
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
