import Inspireimg from "../assets/inspire.png";
const Inspire = () => {
  return (
    <section className="my-8 h-full flex justify-center items-center flex-wrap md:flex-nowrap mb-16">
      <div
        className="w-full md:w-5/6 lg:w-5/6
        rounded-lg flex flex-col md:flex-row justify-center sm:items-center items-center p-4"
      >
        <div className="w-full md:w-1/2 md:order-1 mb-4 md:mb-0">
          <img src={Inspireimg} className="object-cover h-auto w-full" />
        </div>
        <div className="w-full md:w-1/2 md:order-1 flex flex-col p-8 gap-2">
          <h2 className="text-3xl mb-4 font-semibold">
            Get inspired for your next tattoo.
          </h2>
          <p className="mb-2">
            We’ve curated a gallery of beautiful tattoos for you to explore.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 ">
            <button className="bg-gray-200 px-4 py-2 rounded-lg font-sans">
              Tattoo gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspire;
