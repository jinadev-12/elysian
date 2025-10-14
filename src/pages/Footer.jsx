import React from 'react'

function Footer() {
  return (
    // Footer
    <div className="py-16 md:py-20">
      {/* container */}
      <div className="max-w-[1180px] mx-auto w-[90%]">
        {/* information */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-12">
          {/* notice */}
          <div>
            <p className="uppercase text-2xl tracking-wider font-cool mb-2">
              elysian Tennis Camps
            </p>
            <p className="text-lg">
              From coast to coast: Uncover <br /> our 4 tennis camp locations.
            </p>
          </div>
          {/* links */}
          <div className="font-cool tracking-wider flex text-lg gap-6 md:gap-12">
            <div>
              <a
                href="#popular"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                LOCATION
              </a>
            </div>
            <div>
              <a
                href="#popular"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                FITNESS
              </a>
            </div>
            <div>
              <a
                href="#popular"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                ABOUT
              </a>
            </div>
            <div>
              <a
                href="#popular"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#abd455] after:transition-all after:duration-300 hover:after:w-full"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
        {/* join form */}
        <div className="flex flex-col lg:justify-between lg:flex-row gap-6 mb-12">
          {/* heading */}
          <div className="max-w-[450px] lg:w-1/2">
            <p className="font-cool tracking-wider text-6xl mb-2">
              JOIN OUR NEWSLETTER
            </p>
            <p className="text-lg">
              Join our newsletter to stay up to date on academy news, events,
              camps, and special deals.
            </p>
          </div>

          {/* form */}
          <form className="flex items-start flex-col sm:flex-row gap-3 w-full lg:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-1 px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-700"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black  hover:bg-[#abd455] transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* socials and rights */}
        <div className="pt-8 flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:justify-between border-t border-t-slate-700/40 text-gray-400 text-center">
          {/* social */}
          <ul className="flex justify-center gap-6 text-xl text-gray-400">
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </li>
          </ul>

          {/* copyrights */}
          <div className="md:flex flex-row gap-2 items-center justify-center">
            <p>© 2024 Elysian Tennis. All rights reserved.</p>
            <a
              href="#"
              className="underline text-gray-400 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer