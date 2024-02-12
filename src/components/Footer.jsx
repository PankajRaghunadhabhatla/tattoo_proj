import { footer_Desc } from "../constants/footer_desc";

const Footer = () => {
  return (
    <footer className="my-36 w-full flex justify-center items-center relative flex-col">
      <div className="w-full flex justify-between gap-10">
        {/* left side */}
        <div className="flex flex-1 gap-40 pt-10 w-auto relative pl-20">
          <div className="absolute w-full border-t border-gray-400 top-0"></div>
          {footer_Desc.map((item, index) => (
            <div key={index} className="pt-4">
              <h4 className="font-semibold pb-8 font-serif">{item.heading}</h4>
              <ul className="text-lg whitespace-nowrap">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>
                    <a href="#">{listItem}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="flex items-center w-auto pl-80">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-xl">THE TATTOODO APP</h4>
            <p className="text-gray-900">
              Join millions of people looking to find tattoo inspiration,
              discover artists and studios, and easily book tattoo appointments.
            </p>
          </div>
          <div>
            <img />
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className="flex justify-between w-full">
        <div className="flex pl-4 pt-10">
          <h4 className="text-3xl tracking-wider text-gray-700">TATTOODO</h4>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
