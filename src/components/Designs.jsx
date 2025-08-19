import { motion } from "framer-motion";
import { FaEye, FaBehance } from "react-icons/fa";

// Design data
const designProjects = [
  {
    id: 1,
    img: "/src/assets/h&mimage.jpg",
    title: "H&M Shopping App Recreation",
    description:
      "Redesigned the H&M mobile shopping app to enhance usability, navigation, and overall user experience. Identified key UX issues in the original interface and addressed them through clean layouts and improved accessibility.",
    viewLink: "https://drive.google.com/file/d/1XB7E1g5hyZ5xEJhQhr69QWA9Lwm6PaRU/view?usp=drivesdk", 
    behanceLink: "https://www.behance.net/gallery/231540483/H-M-Shopping-App-Recreation", 
  },
  {
    id: 2,
    img: "/src/assets/slider.jpg",
    title: "Juicer – 3D Carousel Slider",
    description:
      "Designed a 3D carousel slider in Figma to showcase products interactively using perspective and motion effects. Focused on enhancing user engagement through smooth transitions, layered depth, and modern UI styling.",
    viewLink: "https://drive.google.com/file/d/1bxmQO-eU-RXB2h9cfDo-akRs4owCoytG/view?usp=drivesdk", 
    behanceLink: "https://www.behance.net/gallery/231767901/juicer-A-3D-Carousel-Slider-made-in-figma", 
  },
];

export const Designs = () => {
  return (
    <div className="design bg-[#101010] text-white px-4 sm:px-10 lg:px-10 py-5" id="Designs">
      <h1 className="text-orange-500 text-4xl sm:text-5xl font-bold mb-10">
        Designs
      </h1>

      {/* Grid Layout */}
      <motion.div   initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {designProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="bg-[#181818] rounded-2xl p-6 shadow-lg flex flex-col items-center"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-xl font-semibold mb-3 text-center">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm text-center mb-6">
              {project.description}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              {/* View Design Button */}
              <a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg text-white font-medium transition transform hover:scale-105"
              >
                <FaEye /> View Design
              </a>
              {/* View on Behance Button */}
              <a
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#302f2f] hover:bg-[#474343] px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg text-white font-medium transition transform hover:scale-105"
              >
                <FaBehance /> View on Behance
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-6 mb-10"
      >
        <p className="text-gray-300 text-lg sm:text-2xl font-medium leading-relaxed">
          Want to explore more designs?
        </p>
        <a
          href=" https://www.behance.net/tanishachauhan11" 
          target="_blank"
          rel="noopener noreferrer"
          className="block sm:inline text-orange-500 font-semibold text-lg sm:text-xl mt-2 sm:mt-0 hover:underline"
        >
          Visit my Behance Profile
        </a>
      </motion.div>
    </div>
  );
};
