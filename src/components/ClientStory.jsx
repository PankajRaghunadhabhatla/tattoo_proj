import React from "react";
import { clientInfo } from "../constants/Client";
import { FaStar } from "react-icons/fa";

const ClientStory = () => {
  return (
    <section className="my-8 h-full flex flex-col justify-center md:flex-row mb-16">
      <div
        className="w-full md:w-5/6 lg:w-5/6
        rounded-lg flex flex-col h-full pb-12"
      >
        <div className="flex flex-col gap-2 text-start">
          <h2 className="text-4xl font-semibold">Client stories</h2>
          <p>
            See more reviews on <strong>Trustpilot.</strong>
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 px-4 mt-8 overflow-scroll">
            {clientInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 sm:flex-col sm:flex"
              >
                <img
                  src={info.image}
                  alt={info.heading}
                  width={400}
                  height={900}
                />
                <div className="bg-[#202125] h-[300px] flex-col flex p-2 mt-[-7px]">
                <span className="text-yellow-500 text-[20px]">
                  {info.stars}
                </span>
                <span className="text-xl font-semibold text-white">{info.heading}</span>
                <span className="leading-8 text-[18px] text-white font-sans">{info.details}</span>
                <span className="font-semibold text-white text-[22px] pt-6 font-sans mt-auto">{info.clientname}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStory;
