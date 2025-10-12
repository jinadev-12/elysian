import React from 'react'

function Exp() {
  return (
    // main
    <div className="bg-[#080808] overflow-x-hidden">
      {/* container */}
      <div className="w-[90%] max-w-[1180px] flex  m-auto flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center py-[120px]">
        {/* heading */}
        <div className="font-cool text-[64px] text-white">
          <h1 className="uppercase max-w-[610px] leading-[1.04]">
            let’s experience Tennis together
          </h1>
        </div>

        {/* email-input */}
        <div className="">
          <p className="text-lg text-gray-400">Stay up to date</p>
          {/* button and input */}
          <div className="flex flex-col sm:flex-row  gap-5 items-center mt-3">
            {/* input */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent
                w-full lg:w-auto
                outline-none  duration-500 ease-in
                 border rounded-[40px] py-[15px] pr-16 pl-4 border-x-[#ceff65] border-y-primary hover:border-x-[#b5bdb7] focus:bg-[#898b86] transition-colors"
              />
            </div>

            {/* button */}
            <div className="w-full sm:w-auto ">
              <button className="bg-primary hover:bg-[#abd455] w-full sm:w-auto  px-8 py-4 rounded-[80px] font-manrope">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp