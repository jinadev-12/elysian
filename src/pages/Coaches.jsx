import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import img1 from "../assets/coach-img1.jpg";
import img2 from "../assets/coach-img2.jpg";
import img3 from "../assets/coach-img3.jpg";
import img4 from "../assets/coach-img4.jpg";

function Coaches() {
  const sectionRef = useRef(null);
  const headingcoachRef = useRef(null);
  const inputcoachesRef = useRef(null);

  const headingcoachText = "MEET THE COACHES BEHIND ELYSIAN";
  const wordscoachArray = headingcoachText.split(" ");

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate each image individually
    const imgs = gsap.utils.toArray(".coach-image");
    imgs.forEach((img) => {
      gsap.set(img, { scale: 0.7 });

      gsap.to(img, {
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img, // each image triggers its own animation
          start: "top 88%",
          end: "top top",
          scrub: 1.5, // smoother transition (takes more time)
        },
      });
    });

    // Heading animation (unchanged)
    const words = headingcoachRef.current.querySelectorAll(".wordcoach");
    gsap.fromTo(
      words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingcoachRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Input button animation (unchanged)
    gsap.fromTo(
      inputcoachesRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headingcoachRef.current,
          start: "top 50%",
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);



  const coaches = [
    {
      img: img1,
      city: "Los Angeles, CA",
      name: "MARCO BELLINI",
      desc: "With 18 years of coaching under her belt, Sarah is known for her ability to develop young talent, guiding players to reach their full potential on the court.",
    },
    {
      img: img2,
      city: "Austin, TX",
      name: "RYDER CAINE",
      desc: "Jessica brings 22 years of experience to the table, specializing in refining advanced techniques and mental toughness in competitive players.",
    },
    {
      img: img3,
      city: "Miami, FL",
      name: "LUKA DRAVIK",
      desc: "A former collegiate athlete with 15 years of coaching experience, Martina is praised for her dynamic coaching style and her success in training elite junior players.",
    },
    {
      img: img4,
      city: "Chicago, IL",
      name: "AXEL STRAYER",
      desc: "With 20 years of experience, Kevin’s passion for tennis has made him a favorite among players seeking to improve both their technical skills and strategic thinking.",
    },
  ];

  return (
    <div ref={sectionRef} className="py-20 relative z-20 bg-white">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        {/* Heading and Button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <h1
            ref={headingcoachRef}
            className="text-[48px] sm:text-[64px] font-cool uppercase leading-[1.04]"
          >
            {wordscoachArray.map((word, i) => (
              <React.Fragment key={i}>
                <span className="wordcoach inline-block">{word}</span>
                {word === "COACHES" ? <br /> : " "}
              </React.Fragment>
            ))}
          </h1>

          <div ref={inputcoachesRef}>
            <button className="bg-primary hover:bg-[#abd455] px-8 py-4 rounded-[80px] font-manrope">
              EXPLORE ACADEMY <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {coaches.map((coach, i) => (
            <div key={i} className="flex flex-col gap-6 items-start">
              <div className="coach-image overflow-hidden rounded-[12%] w-full aspect-[1/1] shadow-[0_100px_80px_#00000012,0_64px_46px_#0000000f,0_40px_25px_#0000000d,0_20px_13px_#0000000a,0_8px_7px_#00000008,0_2px_3px_#00000005]">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-left">
                <p className="uppercase text-[14px] tracking-[1.4px] text-[#080808] mt-6">
                  {coach.city}
                </p>
                <h3 className="font-cool text-[40px] sm:text-[56px] mt-2">
                  {coach.name}
                </h3>
                <p className="text-[18px] leading-[28.8px] max-w-[440px] mt-3">
                  {coach.desc}
                </p>
                <button className="py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-gray-400">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coaches;
