import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { navLinks } from "../constants";
import search from "../assets/search.svg";
import list from "../assets/list.svg";

const Navbar = () => {
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleExploreMenuToggle = () => {
    setShowExploreMenu(!showExploreMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`flex max-w-[1440px]
       h-[56px] w-full md:w-3/4 lg:w-2/3 mx-auto items-center justify-between sticky top-0  z-10
       ${scrolled ? "bg-gray-300 border-2 border-gray-400/20" : ""}`}
    >
      <nav className="flex justify-between items-center w-full">
        {/* left side */}
        <div className="flex justify-between items-center gap-6">
          <a href="/" className="justify-center items-center">
            <img
              src={logo}
              alt="logo"
              width={36}
              height={36}
              className="ml-2"
            />
          </a>
          <ul className={`flex-1 flex justify-center gap-8 max-lg:hidden ${showExploreMenu ? "": "hidden"} lg:flex `}>
            {navLinks.map((link,index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lg font-semibold
                    text-black hover:text-gray-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* left div end */}
        {/* right side */}
        <div className="flex items-center">
          <ul className="flex flex-1 justify-between items-center gap-5 pr-2">
            <li>
              <a href="/" className="font-semibold text-black-500 text-lg">
                For Tattoers
              </a>
            </li>
            <li>
              <button>
                <img src={search} width={24} height={24} />
              </button>
            </li>
            <li>
              <button
                className="focus:outline-none lg:hidden"
                onClick={handleExploreMenuToggle}
              >
                <img
                  src={list}
                  width={24}
                  height={24}
                  style={{ fill: "white" }}
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
