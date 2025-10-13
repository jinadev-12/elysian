import React, { useState } from "react";

function Faqs() {
  const faqs = [
    {
      question: "What is Elysian Tennis?",
      answer:
        "Elysian Tennis is a platform dedicated to providing tennis coaching, events, and community programs for players of all levels.",
    },
    {
      question: "How can I join a tennis program?",
      answer:
        "Simply head to our 'Programs' page and register for the session that suits your level and schedule.",
    },
    {
      question: "Do you offer private coaching?",
      answer:
        "Yes! We have professional coaches available for private one-on-one or small group sessions.",
    },
    {
      question: "Where are your tennis sessions held?",
      answer:
        "Our sessions are held at multiple tennis courts across the city. You can check the ‘Locations’ section on our website for the full list.",
    },
    {
      question: "What should I bring to my first session?",
      answer:
        "Bring your tennis racket, a bottle of water, comfortable sportswear, and positive energy! Balls and other equipment are usually provided.",
    },
    {
      question: "Can beginners join?",
      answer:
        "Absolutely. We welcome players of all skill levels — from complete beginners to advanced players looking to refine their game.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-[#080808] text-white font-inter">
      {/* Container */}
      <div className="max-w-[1180px] mx-auto w-[90%] flex flex-col lg:flex-row lg:justify-between lg:gap-20">
        {/* Header */}
        <div className="mb-16 lg:mb-0 lg:w-1/2 max-w-[460px] flex flex-col">
          <h2 className="text-[64px] text-white font-cool">FAQS</h2>
          <p className="text-lg text-[#ddd]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team or write us an email at
          </p>
          <a
            href="mailto:info@elysiantennis.com"
            className="text-primary text-lg underline"
          >
            info@elysiantennis.com
          </a>
        </div>

        {/* FAQ List */}
        <div className="lg:w-1/2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`py-2 border-b transition-colors duration-300 ${
                openIndex === index ? "border-primary" : "border-[#ceff653d]"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span
                  className={`font-semibold text-lg transition-colors duration-200 hover:text-primary ${
                    openIndex === index ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`transition-transform duration-200 text-2xl text-gray-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <i className="ri-arrow-down-s-line text-3xl md:text-4xl"></i>
                </span>
              </button>
              <div
                className={`text-gray-300 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2 mb-4"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
