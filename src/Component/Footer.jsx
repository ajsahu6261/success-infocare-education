import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D1C42] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Institute Info */}
        <div>
          <h2 className="text-2xl font-bold">
            Success Infocare<span className="text-blue-400">Institute</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Learn, grow and build your future with computer education
            and professional skill development.
          </p>

          <div className="mt-5 flex gap-3">
            <a href="https://www.facebook.com/share/1C3toMitUX/"
              target="_blank" rel="noreferrer"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-blue-600">
              Facebook
            </a>

            <a href="https://www.instagram.com/successinfocare?rpxt=azF1MXV1Nmc1YTI="
              target="_blank" rel="noreferrer"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-pink-600">
              Instagram
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#Home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#About" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#Courses" className="hover:text-blue-400">Our Courses</a></li>
            <li><a href="#Faculty" className="hover:text-blue-400">Our Faculty</a></li>
            <li><a href="#Enquiry" className="hover:text-blue-400">Enquiry</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Our Courses</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>DCA</li>
            <li>PGDCA</li>
            <li>Basic Computer</li>
            <li>PDCTT</li>
            <li>CorelDRAW & Photoshop</li>
            <li>Tally</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <strong className="text-white">Address</strong>
              <p className="mt-1">241 AD City Near Pulak City gate No 1 Palash parisar road indore</p>
            </li>

            <li>
              <strong className="text-white">Phone</strong>
              <p className="mt-1">8840654465</p>
            </li>

            <li>
              <strong className="text-white">Email</strong>
              <p className="mt-1 break-words">successinfocare@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Success Infocare Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

