import React from "react";
import heroPic from "../assets/fineline-bird-hero (1).jpg";

const Hero = () => {
  return (
    <section className="w-full mt-10 justify-center flex flex-1">
      <div className="relative flex h-full max-w-[1440px] bg-cover bg-center flex-col">
        <img src={heroPic} />
        <div className="absolute top-10 left-0 p-6 text-white">
            <h1 className="text-7xl font-bold tracking-wide">Find the right<br/> artist
                for your<br/> next tattoo
            </h1>
            <p className="text-2xl pt-4 whitespace-pre-line">Tattoodo curates the best tattoo
                 artists and<br/> makes it easy for you
                  to connect to the<br/> right artist for
                   your idea.</p>
                   <button className="bg-blue-800 mt-4 flex p-2 text-white rounded-lg px-10">
                    Get Started
                   </button>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;
