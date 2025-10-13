import React from "react";
import image1 from "../assets/location-img-1.jpg";
import image2 from "../assets/location-img-2.jpg";
import image3 from "../assets/locBg4.jpg";
import image4 from "../assets/location-img-4.jpg";
import bg from "../assets/locationBG2.jpg";



function Location() {
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
      className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat text-gray-200"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-black/0"></div>

      {/* container */}
      <div className="max-w-[1180px] w-[90%] mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* head */}
        <div className="flex flex-col max-w-[440px] justify-center">
          <h2 className="font-cool text-6xl md:text-5xl font-bold mb-3 tracking-wider">
            OUR LOCATIONS
          </h2>
          <p className="leading-relaxed">
            Ready to take your tennis game to the next level? Experience
            world-class coaching, state-of-the-art facilities, and a vibrant
            tennis community. Enroll today and become part of a legacy of
            excellence.
          </p>
          <button className="bg-primary text-black text-base px-8 py-4 rounded-full hover:bg-[#abd455] transition-all mt-6 self-start w-fit">
            START TODAY
          </button>
        </div>

        {/* card container */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth">
          {locations.map((loc, i) => (
            // card
            <div
              key={i}
              className="flex-shrink-0 w-80 md:w-auto overflow-hidden hover:shadow-lg transition-all snap-start"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-56 object-cover rounded-2xl mb-3"
              />
              <div className="">
                <p className="font-cool tracking-wider text-2xl uppercase">
                  {loc.name}
                </p>
                <p className="text-sm font-light uppercase tracking-wider">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
