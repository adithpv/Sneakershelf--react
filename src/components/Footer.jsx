import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-footer pt-7 pb-5 relative">
        <div className="app-container text-slate-200">
          <div className="grid items-start  grid-cols-3  max-w-2xl w-full m-auto md:max-w-none md:gap-5 ">
            {titles.map((val, index) => (
              <div key={index} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, index) => (
              <ul key={index} className="grid items-center gap-1 ">
                {list.map((link, index) => (
                  <li key={index} className="text-sm sm:text-xs">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {showTopBtn && (
            <div className="bg-theme fixed right-16 bottom-40 px-4 py-4 rounded-xl sm:fixed sm:bottom-12 sm:right-12 ">
              <ArrowUpIcon className="icon-style stroke-2 " onClick={goToTop} />
            </div>
          )}
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              &copy;2023 Sneakershelf,Inc. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
