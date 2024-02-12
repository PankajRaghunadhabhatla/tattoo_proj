import { SupportCards } from "../constants/supportCard.jsx";

const Support = () => {
  return (
    <section className="my-8 h-full flex flex-col justify-center md:flex-row mb-16">
      <div
        className="w-full md:w-5/6 lg:w-5/6
        rounded-lg flex flex-col h-full bg-gray-200 pb-12"
      >
        <div className="text-center mt-14">
          <h2 className="text-4xl p-10 font-bold">A better way to get tattooed.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 mt-4">
          {SupportCards.map((card) => (
            <div className="flex flex-col gap-4 px-4 mx-2 sm:flex-col sm:flex" key={card.heading}>
              {card.image}
              <span className="text-xl font-bold">{card.heading}</span>
              <span className="flex text-[16px] leading-6">{card.details}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
