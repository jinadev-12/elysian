import React, { useEffect, useRef } from "react";
import img1 from "../assets/coach-img1.jpg";
import img2 from "../assets/coach-img2.jpg";
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
            <button className="bg-primary   px-8 py-4 rounded-[80px] font-manrope">
              EXPLORE ACADEMY <i class="ri-arrow-right-s-line "></i>
            </button>
          </div>
        </div>

        {/*row-1 */}
        <div ref={row1Ref} className="mt-28 flex justify-between">
          {/* col-1 */}
          <div className="flex flex-col gap-1">
            {/* image */}
            <div className="w-[372px] h-[372px] coach-image">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="ml-[-60px]">
              <p className="text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                AUSTIN, TX
              </p>
              <h3 className=" font-cool text-[64px]">Jessica Novak</h3>
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
            <div className="w-[372px] h-[372px] coach-image">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="ml-[-60px]">
              <p className="text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                AUSTIN, TX
              </p>
              <h3 className=" font-cool text-[64px]">Jessica Novak</h3>
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
        </div>

        {/*row-2 */}
        <div ref={row2Ref} className="mt-32 flex justify-between">
          {/* col-1 */}
          <div className="flex flex-col gap-1">
            {/* image */}
            <div className="w-[372px] h-[372px] coach-image-2">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="ml-[-60px]">
              <p className="text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                AUSTIN, TX
              </p>
              <h3 className=" font-cool text-[64px]">Jessica Novak</h3>
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
            <div className="w-[372px] h-[372px] coach-image-2">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover object-center rounded-[3.5rem]"
              />
            </div>
            <div className="ml-[-60px]">
              <p className="text-[14px] mt-32 tracking-[1.4px] leading-none text-[#080808]">
                AUSTIN, TX
              </p>
              <h3 className=" font-cool text-[64px]">Jessica Novak</h3>
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
        </div>
      </div>
    </div>
  );
}

export default Coaches;
