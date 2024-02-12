import Explore from "../assets/explore.jpg";
const Location = () => {
  return (
    <section className="my-8 h-full flex flex-col justify-center md:flex-row mb-16 items-center">
      {/* left div */}
      <div
        className="w-full md:w-5/6 lg:w-5/6
        rounded-lg flex justify-center h-full items-center"
      >
        <div className="flex flex-col w-1/2 items-center justify-center h-full p-16">
          <h2 className="text-3xl font-semibold py-4">
            We work with the best to make sure your tattoo experience is
            memorable.
          </h2>
          <p className="text-[18px] leading-14">
            We partner with top artists around the world to ensure your tattoo
            experience is safe and convenient. Browse through our partners to
            find the right artist for your tattoo idea.
          </p>
          <div className="pt-8 justify-center flex px-12">
            <input
              type="text"
              className="border-[1.5px] rounded-lg border-gray-400 px-20 py-2 mx-2"
              placeholder="Add your Location"
              typeof="location"
            />
            <button className="bg-blue-800 p-2 rounded-lg text-white font-semibold px-6">
              Explore
            </button>
          </div>
        </div>
        {/* right div */}
        <div className="md:w-1/2 items-center flex sm:items-center sm:gap-4">
          <img src={Explore} className="object-cover h-full w-full mr-8" />
        </div>
      </div>
    </section>
  );
};

export default Location;
