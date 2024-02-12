import PhonePic from "../assets/person_with_phone.jpg";
import { artist } from "../constants";

const Phone = () => {
  return (
    <section className="my-36 w-full flex justify-center md:flex-row">
      {/* left side */}
      <div className="md:mr-20 flex-start mb-8 md:mb-0 md:flex-shrink-0">
        <img
          src={PhonePic}
          alt="phone pic"
          width={500}
          height={1200}
          className="max-w-full"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold md:text-[32px] text-3xl tracking-wide mb-8 md:mb-0">
          <span className="block">Looking for an artist?</span>
          <span className="block">Give our artist finder a</span>
          <span> try.</span>
        </h2>
        <div className="flex flex-col mt-8">
            {Object.entries(artist).map(([index, value], idx) => (
                <div key={idx} className="mb-4">
                    <span className="font-bold text-2xl">{index}</span><span className="ml-4 break-words">{value}</span>
                    {idx !== Object.keys(artist).length - 1 && <hr className="my-2
                    border border-gray-200" />}

                </div>
            ))}
            <div className="mt-16">
                <button className="bg-blue-800 text-white p-2 rounded-lg px-8
                font-bold">Get Started</button>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Phone;
