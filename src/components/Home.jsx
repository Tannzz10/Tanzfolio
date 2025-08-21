import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaBehance,
  FaDiscord,
} from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
export const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#101010] text-white flex flex-col items-center justify-center" id="Home">
      {/* Profile Image  */}
      <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center justify-center p-10 ">
        <motion.div  initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}className="uphome flex justify-center items-center bg-orange-500 rounded-full p-2 w-40 h-40 sm:w-48 sm:h-48 shadow-lg">
          <img
            src="/cropped_circle_image.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </motion.div>
        {/* Name and Intro */}
        <div className="downhome text-center mt-6">
          <h1 className="text-lg sm:text-xl text-gray-300">Hey! What's up</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-2">
            I'm <span className="text-white">Tanisha Chauhan</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "UI/UX Designer",
              1000,
              "Software Engineer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="text-2xl sm:text-3xl lg:text-4xl text-orange-500 font-semibold mt-2 min-h-[2.5rem]"
          />
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Designing with style, coding with purpose, engineering with impact —
            let's connect and build something amazing together!
          </p>
          {/* Social Icons */}
          <div className="flex justify-center mt-5 gap-6 text-white text-2xl lg:text-3xl">
            <a
              href="https://www.linkedin.com/in/tanisha-chauhan-a71776321/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Tannzz10"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.behance.net/tanishachauhan11"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaBehance />
            </a>
            <a
              href="https://x.com/tannzz_10"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Download Resume Button with Dropdown */}
          <div ref={dropdownRef} className="relative mt-6 flex justify-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold shadow-lg"
            >
              Resume <RiDownloadLine size={20} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-52 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <a
                  href="https://drive.google.com/file/d/1cgPk_CiObUtSKOAR88zZJkGljFHhJ7pQ/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-2 hover:bg-gray-200 transition"
                >
                   Resume Web Developer 
                </a>
                <a
                  href="https://drive.google.com/file/d/1cS5orupJSXdlhxuCViEiGSwKUzvq4I3x/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-2 hover:bg-gray-200 transition"
                >
                 Resume UI/UX
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
