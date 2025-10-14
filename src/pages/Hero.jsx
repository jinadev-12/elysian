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
      // Start centered, small
      gsap.set(videoRef.current, {
        scale: 0.9, // start at 90% size
        borderRadius: "25px", // start with rounded corners
        transformOrigin: "center center",
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      // Scroll-triggered scale up + border radius + text motion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // video scale + border radius
      tl.to(
        videoRef.current,
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
        },
        0
      );

      // black title moves upward
      tl.to(
        titleRef.current,
        {
          y: -100,
          ease: "none",
        },
        0
      );

      // white bottom text moves downward
      tl.to(
        bottomTextRef.current,
        {
          y: 100,
          ease: "none",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // home
    <div className="pt-10">
      {/* container */}
      <div
        ref={containerRef}
        className="relative top-16 h-[100vh] bg-white text-black"
      >
        {/* title */}
        <div
          ref={titleRef}
          className="absolute -top-16 left-[50%] transform translate-x-[-50%] z-10 text-center"
        >
          <h1 className="font-cool text-[80px] md:text-[112px] lg:text-[160px] leading-[0.92]">
            <span className="whitespace-nowrap">SWING WITH</span>
            <br />
            CONFIDENCE
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
        <div className="relative w-full h-full">
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white text-3xl md:text-5xl font-cool uppercase tracking-wider"
          >
            ELEVATE YOUR GAME
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
