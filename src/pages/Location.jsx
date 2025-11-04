import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import image1 from "../assets/loc1.jpeg";
import image2 from "../assets/loc2.jpeg";
import image3 from "../assets/loc3.jpeg";
import image4 from "../assets/loc4.jpeg";

import bg from "../assets/locationBG2.jpg";

function Location() {
  const locationRef = useRef(null);

  // gsap animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const triggerConfig = {
        trigger: locationRef.current,
        start: "top 70%",
      };

      // heading + button
      gsap.fromTo(
        ".headbuttonup",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          stagger: 0.25,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: triggerConfig,
        }
      );

      // paragraph
      gsap.fromTo(
        ".paraimg",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: triggerConfig,
        }
      );

      // cards
      gsap.fromTo(
        ".img",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: triggerConfig,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const locations = [
    {
      img: image1,
      name: "Grandview Park Tennis Center",
      address: "123 Maplewood Drive, Riverton",
    },
    {
      img: image2,
      name: "Lakeside Tennis Complex",
      address: "45 Willow Street, Eastbrook",
    },
    {
      img: image3,
      name: "Sunset Valley Courts",
      address: "98 Hilltop Avenue, Clearwater",
    },
    {
      img: image4,
      name: "Riverside Tennis Club",
      address: "76 Riverbend Road, Fairview",
    },
  ];

  return (
    <div
      ref={locationRef}
      className="relative py-16 md:py-20 text-gray-200 overflow-hidden"
    >
      {/* blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-black/0"></div>

      {/* content container */}
      <div className="max-w-[1180px] w-[90%] mx-auto flex flex-col lg:flex-row gap-8 relative z-10 justify-between">
        {/* left section */}
        <div className="flex flex-col max-w-[440px] justify-center">
          <h2 className="font-cool text-6xl md:text-5xl font-bold mb-3 tracking-wider">
            <span className="headbuttonup block">OUR</span>
            <span className="headbuttonup block">LOCATIONS</span>
          </h2>
          <p className="leading-relaxed paraimg">
            Ready to take your tennis game to the next level? Experience
            world-class coaching, state-of-the-art facilities, and a vibrant
            tennis community. Enroll today and become part of a legacy of
            excellence.
          </p>
          <button className="bg-primary headbuttonup text-black text-base px-8 py-4 rounded-full hover:bg-[#abd455] transition-all mt-6 self-start w-fit">
            START TODAY
          </button>
        </div>

        {/* right section - cards */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="img flex-shrink-0 w-80 md:w-auto overflow-hidden rounded-2xl transition-all snap-start hover:scale-[1.03] hover:shadow-xl duration-500"
            >
              {/* image container with 4:3 ratio */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-3 shadow-[0_100px_80px_#00000012,0_64px_46px_#0000000f,0_40px_25px_#0000000d,0_20px_13px_#0000000a,0_8px_7px_#00000008,0_2px_3px_#00000005]">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <p className="font-cool tracking-wider text-2xl uppercase">
                  {loc.name}
                </p>
                <p className="text-sm font-light uppercase tracking-wider">
                  {loc.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
