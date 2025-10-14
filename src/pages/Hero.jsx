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
     const mm = gsap.matchMedia();

     mm.add(
       {
         isLg: "(min-width: 1024px)",
         isMd: "(min-width: 768px) and (max-width: 1023px)",
         isSm: "(max-width: 767px)",
       },
       (context) => {
         const { isLg, isMd, isSm } = context.conditions;

         // Set initial scale and border radius
         const initialScale = isLg ? 0.6 : 0.9;
         const borderRadius = isLg ? 60 : isMd ? 40 : 20;

         gsap.set(videoRef.current, {
           scale: initialScale,
           transformOrigin: "center center",
           borderRadius: `${borderRadius}px`,
         });

         // Calculate scroll distance dynamically so the video fully scales
         const vh = window.innerHeight;
         const scrollDistance = vh * (1 / initialScale - 1) * 1.5;
         // multiplier 1.5 gives some extra space for title/bottom text movement

         const tl = gsap.timeline({
           scrollTrigger: {
             trigger: containerRef.current,
             start: "top top",
             end: `+=${scrollDistance}`,
             scrub: true,
             pin: true,
             pinSpacing: false,
           },
         });

         // Animate video scale and border radius
         tl.to(videoRef.current, { scale: 1, borderRadius: "0px" }, 0);
         // Move title and bottom text
         tl.to(titleRef.current, { y: isSm ? -150 : -300 }, 0);
         tl.to(bottomTextRef.current, { y: isSm ? 150 : 300 }, 0);
       }
     );

     return () => mm.revert();
   }, containerRef);

   return () => ctx.revert();
 }, []);


  return (
    <section className="relative h-screen overflow-hidden bg-white text-black">
      {/* container */}
      <div ref={containerRef} className="relative w-full h-full">
        {/* title */}
        <div
          ref={titleRef}
          className="absolute left-1/2 top-[10%] transform -translate-x-1/2 z-10 text-center"
        >
          <h1 className="font-cool text-[60px] md:text-[112px] lg:text-[160px] leading-[1] md:leading-[0.92]">
            <span className="whitespace-nowrap">SWING WITH</span>
            <br />
            CONFIDENCE
          </h1>
        </div>

        {/* Learn More button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <span className="text-white font-cool uppercase text-2xl md:text-3xl">
            Learn More
          </span>
          <div className="h-10 w-10 flex items-center justify-center bg-primary text-black rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
            <i className="ri-arrow-down-long-line text-lg"></i>
          </div>
        </div>

        {/* video wrapper */}
        <video
          ref={videoRef}
          className="object-cover w-full h-full rounded-[60px] md:rounded-[40px] sm:rounded-[20px]"
          src="/homeBG.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* bottom text */}
        <div
          ref={bottomTextRef}
          className="absolute bottom-[15%] md:bottom-[22%] left-1/2 transform -translate-x-1/2 z-10"
        >
          <h2 className="text-white font-cool text-2xl md:text-4xl lg:text-5xl tracking-wide uppercase">
            ELEVATE YOUR GAME
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
