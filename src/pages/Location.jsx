import React from "react";
import image1 from "../assets/location-1.jpg";
import image2 from "../assets/location-2.jpg";
import image3 from "../assets/location-3.jpg";
import image4 from "../assets/location-4.jpg";
import bg from "../assets/location-4.jpg";



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
      className="py-16 md:py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* container */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        {/* head */}
        <div className="flex flex-col max-w-[440px]">
          <h2 className="font-cool text-6xl md:text-5xl font-bold mb-3 tracking-wider">
            OUR LOCATIONS
          </h2>
          <p className="">
            Ready to take your tennis game to the next level? Experience
            world-class coaching, state-of-the-art facilities, and a vibrant
            tennis community. Enroll today and become part of a legacy of
            excellence.
          </p>
          <button className="bg-primary text-black text-base px-8 py-4 rounded-full hover:opacity-90 transition-all mt-6 self-start w-fit">
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
                className="w-full h-56 object-cover rounded-2xl"
              />
              <div className="">
                <p className="font-semibold ">{loc.name}</p>
                <p className="text-sm">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
