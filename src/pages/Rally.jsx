import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import img from "../assets/rally-img.jpg";

function Rally() {

    const imageRef = useRef(null);
    const rallyRef = useRef(null);


useEffect(() => {


  gsap.fromTo(
    imageRef.current,
    { scaleX: 1.3 }, // starting scale
    {
      scaleX: 1, // ending scale
      ease: "power2.out",
      scrollTrigger: {
        trigger: rallyRef.current,
        start: "top 99%", // section top hits viewport bottom
        scrub: true,
      },
    }
  );
}, []);


  return (
    // main
    <div className="overflow-x-hidden">
      {/* Container */}
      <div ref={rallyRef} className="w-[90%]  max-w-[1180px] mx-auto">
        {/* image and text container */}
        <div className="relative m-auto text-center mt-40 md:mt-80 h-[550px]">
          <h1 className="z-30 absolute top-[-112.5px] md:top-[-255px] left-1/2 -translate-x-1/2 text-[80px] md:text-[180px] m-auto font-cool lg:max-w-[495px] lg:tracking-[-3.6px] tracking-[-1.6px] leading-[0.9] ">
            <span className="whitespace-nowrap">READY TO </span> RALLY?
          </h1>
          <div ref={imageRef} className="absolute top-0  h-[530px] w-full ">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center rounded-[50px]"
            />
          </div>
        </div>
        {/* button */}
        <div>
          <button className="flex justify-center items-center gap-2 w-full z-50 py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)]">
            JOIN A CAMP{" "}
            <span className="inline-block">
              <img
                src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670563f226883663736a6d20_icon-arrow-light.svg"
                alt=""
                className=""
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rally;
