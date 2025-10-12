import React, { useEffect, useRef } from "react";
import img1 from "../assets/coach-img1.jpg";
import img2 from "../assets/coach-img2.jpg";
import img3 from "../assets/coach-img3.jpg";
import img4 from "../assets/coach-img4.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Coaches() {

    const row1Ref = useRef(null);
        const row2Ref = useRef(null);


    useEffect(() => {
      const ctx = gsap.context(() => {
        // row-1
        gsap.fromTo(
          ".coach-image",
          { scale: 1 },
          {
            scale: 1.46,
            scrollTrigger: {
              trigger: row1Ref.current,
              start: "top 88%", // row hits the middle of viewport
              end: "top top", // row hits the top of viewport
              scrub: true, // smooth scaling while scrolling
            },
            ease: "power2.out",
          }
        );
// row-2
         gsap.fromTo(
           ".coach-image-2",
           { scale: 1 },
           {
             scale: 1.46,
             scrollTrigger: {
               trigger: row2Ref.current,
               start: "top 88%", // row hits the middle of viewport
               end: "top top", // row hits the top of viewport
               scrub: true, // smooth scaling while scrolling
             },
             ease: "power2.out",
           }
         );
      });

      return () => ctx.revert();
    }, []);

  return (
    // main
    <div className="py-20">
      {/* container */}
      <div className="w-[90%] max-w-[1180px] mx-auto">
        {/* heading and button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          {/* heading */}
          <h3 className="text-[64px] font-cool leading-[1.04]">
            MEET THE COACHES <br />
            BEHIND ELYSIAN
          </h3>
          {/* button */}
          <div>
            <button className="bg-primary hover:bg-[#abd455]  px-8 py-4 rounded-[80px] font-manrope">
              EXPLORE ACADEMY <i class="ri-arrow-right-s-line "></i>
            </button>
          </div>
        </div>

        {/*row-1 */}
        <div
          ref={row1Ref}
          className="mt-28  lg:gap-0 gap-28 lg:flex-row flex-col mx-auto flex lg:justify-between"
        >
          {/* col-1 */}
          <div className="flex  flex-col gap-1">
            {/* image */}
            <div className="m-auto lg:m-0 sm:w-[372px] sm:h-[372px] w-[250px] h-[250px]  coach-image">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            {/* text-container */}
            <div className="lg:lg:ml-[-60px]">
              <p className="uppercase text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                Los Angeles, CA
              </p>
              <h3 className=" font-cool text-[64px]">MARCO BELLINI</h3>
              <p className="text-[18px] leading-[28.8px] max-w-[440px]">
                With 18 years of coaching under her belt, Sarah is known for her
                ability to develop young talent, guiding players to reach their
                full potential on the court.
              </p>
              <button className="py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)] mr-auto">
                LEARN MORE
              </button>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex flex-col gap-1">
            {/* image */}
            <div className="m-auto lg:m-0 sm:w-[372px] sm:h-[372px] w-[250px] h-[250px]  coach-image">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="lg:ml-[-60px]">
              <p className="uppercase text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                AUSTIN, TX
              </p>
              <h3 className=" font-cool text-[64px]">RYDER CAINE</h3>
              <p className="text-[18px] leading-[28.8px] max-w-[440px]">
                Jessica brings 22 years of experience to the table, specializing
                in refining advanced techniques and mental toughness in
                competitive players.
              </p>
              <button className="py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)] mr-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/*row-2 */}
        <div
          ref={row2Ref}
          className="mt-28 lg:gap-0 gap-28 lg:flex-row flex-col mx-auto flex lg:justify-between"
        >
          {/* col-1 */}
          <div className="flex flex-col gap-1">
            {/* image */}
            <div className="m-auto lg:m-0 sm:w-[372px] sm:h-[372px] w-[250px] h-[250px]  coach-image-2">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="lg:ml-[-60px]">
              <p className="uppercase text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                Miami, FL
              </p>
              <h3 className=" font-cool text-[64px]">LUKA DRAVIK</h3>
              <p className="text-[18px] leading-[28.8px] max-w-[440px]">
                A former collegiate athlete with 15 years of coaching
                experience, Martina is praised for her dynamic coaching style
                and her success in training elite junior players.
              </p>
              <button className="py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)] mr-auto">
                LEARN MORE
              </button>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex flex-col gap-1">
            {/* image */}
            <div className="m-auto lg:m-0 sm:w-[372px] sm:h-[372px] w-[250px] h-[250px]  coach-image-2">
              <img
                src={img4}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="lg:ml-[-60px]">
              <p className="uppercase text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                Chicago, IL
              </p>
              <h3 className=" font-cool text-[64px]">AXEL STRAYER</h3>
              <p className="text-[18px] leading-[28.8px] max-w-[440px]">
                With 20 years of experience, Kevin’s passion for tennis has made
                him a favorite among players seeking to improve both their
                technical skills and strategic thinking.
              </p>
              <button className="py-4 hover:bg-gray-300 px-8 mt-5 rounded-[80px] border border-[rgb(169,169,169)] mr-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
