import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const bottomTextRef = useRef(null);

 useEffect(() => {
   const ctx = gsap.context(() => {
     const video = videoRef.current;

     // Base properties (same for all sizes)
     gsap.set(video, {
       transformOrigin: "center center",
       position: "absolute",
       top: "50%",
       left: "50%",
       xPercent: -50,
       yPercent: -50,
     });

     // Apply borderRadius based on screen width
     if (window.matchMedia("(min-width: 1024px)").matches) {
       gsap.set(video, { borderRadius: "60px" });
     } else if (window.matchMedia("(min-width: 768px)").matches) {
       gsap.set(video, { borderRadius: "45px" });
     } else {
       gsap.set(video, { borderRadius: "25px" });
     }

     // Set scale based on screen size
     if (window.matchMedia("(min-width: 1024px)").matches) {
       gsap.set(video, { scale: 0.6 });
     } else {
       gsap.set(video, { scale: 0.9 });
     }

     // 🌟 FADE IN MAIN CONTAINER
     gsap.from(containerRef.current, {
       opacity: 0,
       duration: 1.5,
       ease: "power2.out",
     });

     // 🌟 ENTRY ANIMATION (only on load) - smoother
     const swing = titleRef.current.querySelector("span span:nth-child(1)");
     const withText = titleRef.current.querySelector("span span:nth-child(2)");
     const confidence = titleRef.current.querySelector("br + span");

     const entryTl = gsap.timeline();

     entryTl
       .from(swing, {
         opacity: 0,
         y: 20,
         duration: 0.7, // smoother
         ease: "power2.out",
       })
       .from(
         withText,
         {
           opacity: 0,
           y: 20,
           duration: 0.7, // smoother
           ease: "power2.out",
         },
         "-=0.4" // slight overlap for smoothness
       )
       .from(
         confidence,
         {
           opacity: 0,
           y: 20,
           duration: 0.7, // smoother
           ease: "power2.out",
         },
         "-=0.4"
       )
       .from(
         bottomTextRef.current,
         {
           opacity: 0,
           y: 20,
           duration: 0.7, // smoother
           ease: "power2.out",
         },
         "-=0.4"
       );

     // 🌀 Scroll-triggered animation
     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: containerRef.current,
         start: "top top",
         end: "bottom top",
         scrub: true,
         pin: true,
       },
     });

     tl.to(
       videoRef.current,
       { scale: 1.05, borderRadius: "0px", ease: "none" },
       0
     );
     tl.to(titleRef.current, { y: -400, ease: "none" }, 0);
     tl.to(bottomTextRef.current, { y: 300, ease: "none" }, 0);
   }, containerRef);

   return () => ctx.revert();
 }, []);


  return (
    <div className="pt-10 lg:pt-8">
      <div
        ref={containerRef}
        className="relative top-16 md:top-28 lg:top-0 h-[100vh] bg-white text-black"
      >
        {/* title */}
        <div
          ref={titleRef}
          className="absolute -top-16 md:-top-[72px] lg:top-1 left-[50%] transform translate-x-[-50%] z-10 text-center"
        >
          <h1 className="font-cool text-[80px] md:text-[112px] lg:text-[160px] leading-[0.92]">
            <span className="whitespace-nowrap">
              <span>SWING</span> <span>WITH</span>
            </span>
            <br />
            <span>CONFIDENCE</span>
          </h1>
        </div>

        {/* Learn More button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl text-white font-cool uppercase">
              Learn More
            </span>
            <i className="ri-arrow-down-long-line text-lg w-12 h-12 bg-primary rounded-full flex items-center justify-center"></i>
          </div>
        </div>

        {/* video wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="object-cover w-full h-full rounded-[60px]"
            src="/homeBG.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          {/* Bottom text overlay */}
          <div
            ref={bottomTextRef}
            className="absolute bottom-16 lg:bottom-48 left-1/2 transform -translate-x-1/2 z-20 text-white text-3xl md:text-5xl font-cool uppercase tracking-wider"
          >
            ELEVATE YOUR GAME
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
