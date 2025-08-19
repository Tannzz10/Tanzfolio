import { motion } from "framer-motion";
import { FaMedal, FaBook, FaTrophy, FaUsers } from "react-icons/fa";

export const Achievements = () => {
  const achievements = [
    {
      icon: <FaMedal className="text-orange-500 text-3xl" />,
      text: "Selected for IDE Bootcamp Edition 2 and ranked among the Top 10 teams.",
    },
    {
      icon: <FaBook className="text-orange-500 text-3xl" />,
      text: 'Published a research paper titled "Impact of Industrialization and Automation on the Labour Market" at the Researchfora International Conference held in Malaysia.',
    },
    {
      icon: <FaTrophy className="text-orange-500 text-3xl" />,
      text: "2nd Runner-Up of Ideathon held by Gurugram University.",
    },
    {
      icon: <FaUsers className="text-orange-500 text-3xl" />,
      text: "Actively serving as an NSS volunteer and attended the G20 University Meet.",
    },
  ];

  return (
    <div className="achieve bg-[#101010] text-white py-12 px-6">
      <h1 className="text-orange-500 text-4xl sm:text-5xl font-bold mb-12 text-center">
        Achievements
      </h1>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-transparent hover:border-gray-400 transition-all duration-300"
          >
            {item.icon}
            <p className="text-lg leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
