import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import img from "../assets/rally-img.jpg";

function Rally() {
  const imageRef = useRef(null);
  const rallyRef = useRef(null);
    const rallyheadRef = useRef(null);


useEffect(() => {
  // Image shrink animation (slower scroll-based scaling)
  gsap.fromTo(
    imageRef.current,
    { scale: 1.2 },
    {
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rallyRef.current,
        start: "top bottom", // starts as soon as image enters viewport
        end: "top top", // now takes longer (scrolls entire height of image)
        scrub: 1.5, // adds smooth slow feel
      },
    }
  );

  // Heading animation (unchanged)
  gsap.fromTo(
    ".word",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rallyheadRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);



  return (
    <div ref={rallyheadRef} className="overflow-x-hidden">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        {/* Image & Heading Container */}
        <div
          ref={rallyRef}
          className="relative m-auto text-center mt-40 md:mt-80 h-[550px]"
        >
          <h1 className="rally-heading z-30 absolute top-[-112.5px] md:top-[-255px] left-1/2 -translate-x-1/2 text-[80px] md:text-[180px] m-auto font-cool lg:max-w-[495px] lg:tracking-[-3.6px] tracking-[-1.6px] leading-[0.9]">
            <span className="whitespace-nowrap">
              <span className="word">READY </span>
              <span className="word">TO </span>
            </span>
            <span className="word"> RALLY?</span>
          </h1>

          <div ref={imageRef} className="absolute top-0 h-[530px] w-full">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center rounded-[50px]"
            />
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="flex justify-center items-center gap-2 w-full z-50 py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)]">
            JOIN A CAMP{" "}
            <span className="inline-block">
              <img
                src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670563f226883663736a6d20_icon-arrow-light.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rally;
