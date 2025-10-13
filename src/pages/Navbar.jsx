import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebaropen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-cool tracking-wider ">
      {/* navbar */}
      <div className="w-[90%] mx-auto max-w-[1180px] flex justify-between items-center lg:h-24 h-16 fixed  top-0 left-0 right-0 bg-white z-50 shadow-sm px-4">
        {/* left */}
        <div className="gap-16 text-lg hidden md:flex">
          <div>LOCATION</div>
          <div>FITNESS</div>
        </div>
        {/* logo */}
        <div className="text-2xl">
          <h4>ELYSIAN TENNIS ACADEMY</h4>
        </div>
        {/* right */}
        <div className="hidden md:flex gap-16 text-lg">
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
        
        <div className="flex md:hidden">
          
          <button
            className=" z-50 w-6  h-6 flex flex-col justify-between items-center md:hidden"
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
      </div>

      {/* sidebar */}
      <div
        className={`fixed bg-white top-16 right-0 w-full h-[calc(100vh-4rem)] flex justify-start pt-0 text-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden z-40`}
      >
        <ul className="flex flex-col gap-14 p-12 text-left text-2xl font-medium font-saira mt-0">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              LOCATION
            </a>
          </li>
          <li>
            <a href="#popular" onClick={() => setIsOpen(false)}>
              FITNESS
            </a>
          </li>
          <li>
            <a href="#aboutus" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
