import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";

export const Projects = () => {
  const projects = [
    {
      img: pro3,
      title: "Tanzfolio",
      desc: "A sleek and modern personal portfolio website that showcases my projects, designs, and creative journey. Built with React.js, Tailwind CSS, and Framer Motion, it delivers an engaging and smooth user experience.",
      live: "#",
      github: "#",
    },
    {
      img: pro1,
      title: "Drishti - Sees what u can't",
      desc: "An AI-powered mental health assessment platform that detects early signs of stress, anxiety, and depression using behavioral and textual data. It leverages ML & data analytics to provide personalized insights.",
      live: "#",
      github: "https://github.com/Tannzz10/Drishti-Sees-What-You-Can-t",
    },
    {
      img: pro2,
      title: "Houser - Real Estate Platform",
      desc: "A modern real estate platform with property listings, search functionality, and interactive details. Built with React and modern web technologies for responsiveness and a smooth experience.",
      live: "https://houser-indol.vercel.app/",
      github: "https://github.com/Tannzz10/Houser",
    },
  ];

  return (
    <div
      className="pro bg-[#000000] text-white px-4 sm:px-10 lg:px-10 py-10"
      id="Projects"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-orange-500 text-4xl sm:text-5xl font-bold mb-10"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#181717] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
            />
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.desc}</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg hover:bg-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> View Project
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#302c2c] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg hover:bg-[#424040] transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
