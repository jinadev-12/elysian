import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebaropen = () => setIsOpen(!isOpen);

  return (
    // main
    <div>
      {/* container */}
      <div className=" font-cool w-[90%] tracking-wider max-w-[1180px] m-auto shadow-sm flex justify-between items-center py-[20px] lg:py-[32px] lg:px-20 px-4">
        {/* left */}
        <div className="gap-16 text-lg hidden md:flex">
          <a
            href="#popular"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
          >
            LOCATIONS
          </a>
          <a
            href="#popular"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
          >
            FITNESS
          </a>
        </div>
        {/* logo */}
        <div className="text-2xl">
          <h4>ELYSIAN TENNIS ACADEMY</h4>
        </div>
        {/* right */}
        <div className="gap-16 text-lg hidden md:flex">
          <a
            href="#aboutus"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUT
          </a>
          <a
            href="#products"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
          >
            CONTACT
          </a>
        </div>
        {/* mobile hamburger */}
        <div className="block md:hidden z-50">
          <button
            className=" w-8  h-6 flex flex-col justify-between items-center "
            onClick={sidebaropen}
          >
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* sidebar */}
        <div
          className={`fixed  bg-white top-0 right-0 w-full h-[100vh] flex justify-start text-left  pt-14  ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }  lg:hidden duration-300 z-40`}
        >
          <ul className="flex flex-col gap-14 text-2xl font-medium font-saira mt-10 ml-5">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                LOCATIONS
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                FITNESS
              </a>
            </li>

            <li>
              <a
                href="#aboutus"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



