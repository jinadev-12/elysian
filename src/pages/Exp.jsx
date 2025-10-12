import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Exp() {
  const headingRef = useRef(null);
    const inputRef = useRef(null);


  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 30 }, // from state
      {
        opacity: 1,
        y: 0,

        stagger: 0.1, // animate each word with delay
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current, // element that triggers animation
          start: "top 50%", // when top of element hits 80% of viewport
          toggleActions: "play none none none", // play only once
        },
      }
    );

    // inputbox
    gsap.fromTo(
      inputRef.current,
      { y: 20, autoAlpha: 0 }, // start
      {
        y: 0,
        autoAlpha: 1, // end
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50%",
        },
      }
    );
  }, []);



  

  const headingText = "let’s experience Tennis together";
  const wordsArray = headingText.split(" ");

  return (
    <div className="bg-[#080808] overflow-x-hidden">
      <div className="w-[90%] max-w-[1180px] flex m-auto flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center py-[120px]">
        <div className="font-cool text-[64px] text-white">
          <h1
            ref={headingRef}
            className="uppercase max-w-[610px] leading-[1.04] flex flex-wrap gap-2"
          >
            {wordsArray.map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </h1>
        </div>
{/* input box */}
        <div ref={inputRef}>
          <p className="text-lg text-gray-400">Stay up to date</p>
          <div className="flex flex-col sm:flex-row gap-5 items-center mt-3">
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent w-full lg:w-auto outline-none duration-500 ease-in border rounded-[40px] py-[15px] pr-16 pl-4 border-x-[#ceff65] border-y-primary hover:border-x-[#b5bdb7] focus:bg-[#898b86] transition-colors"
              />
            </div>
            <div className="w-full sm:w-auto">
              <button className="bg-primary hover:bg-[#abd455] w-full sm:w-auto px-8 py-4 rounded-[80px] font-manrope">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
