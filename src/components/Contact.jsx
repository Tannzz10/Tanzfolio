import {
  FaHeart,
  FaRegCopyright,
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaXTwitter,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa6";
import React from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c4a69669-d02d-4a78-8f0d-15d43d85b9dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <>
      <div
        className="contactbox bg-[#212121] text-white px-4 sm:px-10 lg:px-10 py-5"
        id="Contact"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-orange-500 text-4xl sm:text-5xl font-bold mb-10"
        >
          Connect with me
        </motion.h1>

        {/* Stacked Layout - Left on Top, Right Below */}
        <div className="flex flex-col gap-10 items-center">
          {/* Left Side - Intro, Icons, Mail */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 max-w-2xl text-center"
          >
            <p className="text-xl leading-relaxed">
              Not your regular techie — I’m
              who codes with coffee, designs with vibes, and sometimes
              overthinks life like it’s a bug. A writer, nature lover, and an
              explorer of the never-ending tech ocean.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-4xl">
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

            {/* Email */}
            <p className="text-xl">
              Drop a mail at{" "}
              <a
                href=" https://mail.google.com/mail/?view=cm&fs=1&to=chauhantanisha831@gmail.com"
                className="text-orange-500 underline"
              >
                chauhantanisha831@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            className="bg-[#010101] p-6 rounded-lg shadow-md space-y-6 w-full max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-900 rounded px-4 py-2 bg-[#212121] text-white"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-900 rounded px-4 py-2 bg-[#212121] text-white"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-900 rounded px-4 py-2 bg-[#212121] text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border border-gray-900 rounded px-4 py-2 bg-[#212121] text-white resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition w-full sm:w-auto mx-auto"
            >
              {result ? result : "Send Message"} <FaPaperPlane size={18} />
            </button>

            <ToastContainer position="top-right" autoClose={3000} />
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#000000] text-white px-5 sm:px-10 py-6">
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <h4 className="flex items-center gap-2 text-sm sm:text-base">
            Made with <FaHeart className="text-red-600" /> by Tanisha
          </h4>
          <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <FaRegCopyright /> 2025 Tanisha Chauhan. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
