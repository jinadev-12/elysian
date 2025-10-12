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
    <section className="py-16 bg-black text-white font-inter">
      {/* Container */}
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[64px] md:text-4xl text-white font-cool">
            FAQS
          </h2>
          <p className="text-lg text-[#ddd] mb-2">
            Can’t find the answer you’re looking for? Chat with our friendly
            team or email us at
          </p>
          <a
            href="mailto:info@elysiantennis.com"
            className="text-primary text-lg hover:underline"
          >
            info@elysiantennis.com
          </a>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span
                  className={`transition-transform duration-200 text-2xl text-gray-400 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`text-gray-400 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
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
