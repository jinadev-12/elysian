import React from 'react'

function Navbar() {
  return (
    // navbar
    <div className="font-cool tracking-wider">
      {/* container */}
      <div className="w-[90%] mx-auto max-w-[1180px] flex justify-between items-center  lg:h-24 h-16">
        {/* left */}
        <div className="gap-16 text-lg hidden lg:flex">
          <div>LOCATION</div>
          <div>FITNESS</div>
        </div>
        {/* logo */}
        <div className="text-2xl">
          <div>ELYSIAN TENNIS ACADEMY</div>
        </div>
        {/* Right */}
        <div className="hidden lg:flex gap-16 text-lg">
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
        {/* hamburger */}
        <div className="flex lg:hidden">
          <i className="ri-menu-fill text-black text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar