import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start centered, small
      gsap.set(videoRef.current, {
        scale: 0.6, // start at 60% size
        transformOrigin: "center center", // keeps it centered
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      // Scroll-triggered scale up
      gsap.to(videoRef.current, {
        scale: 1, // grow to full size
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // home
    <div className="pt-10">
      {/* container */}
      <div
        ref={containerRef}
        className="relative top-12 h-[100vh] overflow-hidden bg-white text-black"
      >
        {/* title */}
        <div className="absolute top-0 left-[50%] transform translate-x-[-50%] z-10 text-center">
          <h1 className="font-cool text-[80px] md:text-[112px] lg:text-[160px] leading-[0.92]">
            <span className="whitespace-nowrap">SWING WITH</span>
            <br />
            CONFIDENCE
          </h1>
        </div>

        {/* Learn More button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
            Learn More
            <i className="ri-arrow-down-long-line text-2xl"></i>
          </button>
        </div>

        {/* video wrapper */}
        <div>
          <video
            ref={videoRef}
            className="object-cover w-full h-full rounded-[60px]"
            src="/homeBG.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
