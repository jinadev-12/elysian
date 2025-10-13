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
        scale: 0.5, // start at 50% size
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
    <div ref={containerRef} className="relative bg-white text-black">
      {/* home content text absolute mela */}
      <div className=" left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="font-cool text-[80px] md:text-[112px] lg:text-[180px] leading-none">
          SWING WITH <br /> CONFIDENCE
        </h1>
      </div>

      {/* Home video section */}
      <div className="relative h-[100vh] overflow-hidden">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          src="/homeBG.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}

export default Hero;
