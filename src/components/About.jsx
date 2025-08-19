import { motion } from "framer-motion";

const skills = [
  { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", name: "Figma" },
  { type: "icon", class: "devicon-html5-plain colored", name: "HTML5" },
  { type: "icon", class: "devicon-css3-plain colored", name: "CSS3" },
  { type: "icon", class: "devicon-javascript-plain colored", name: "JavaScript" },
  { type: "icon", class: "devicon-bootstrap-plain colored", name: "Bootstrap" },
  { type: "icon", class: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
  { type: "icon", class: "devicon-react-original colored", name: "React" },
  { type: "icon", class: "devicon-mysql-plain colored", name: "MySQL" },
  { type: "icon", class: "devicon-java-plain colored", name: "Java" },
  { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
  { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", name: "SQL" },
  { type: "icon", class: "devicon-vscode-plain colored", name: "VS Code" },
  { type: "icon", class: "devicon-github-original", name: "GitHub" },
  { type: "icon", class: "devicon-behance-plain colored", name: "Behance" },
  { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
];
// duplicate for infinite seamless scroll
const loop = skills.concat(skills);

export const About = () => {
  return (
    <div className="bg-[#000000] text-white px-4 sm:px-10 lg:px-10 py-5 flex flex-col" id="About">    
      <h1 className="text-orange-500 text-4xl sm:text-5xl lg:text-5xl font-bold mb-5 achh1">
        About Me
      </h1>
     
      <motion.div
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg sm:text-xl">
          I’m Tanisha Chauhan, 
          a final-year B.Tech Computer Science student at Dronacharya College of Engineering, 
          passionate about crafting impactful digital experiences through 
          web development and UI/UX design.
          My journey began with designing flyers and posters in school, evolving into 
          building dynamic websites and managing data-driven projects in college.
          As a Core Team Web Developer in my college’s tech clubs, I’ve worked on diverse 
          projects, combining creativity with technical precision.
          Beyond development, I’m deeply interested in research and writing. My paper "Impact of Industrialization and Automation on the Labour Market"
          was published and presented at the Researchfora International Conference, Malaysia, and another on 
          Quantum Computing is currently under review.
          I’m also an active NSS volunteer, participating in social initiatives that align 
          with my belief in technology for positive change.
        </p>
      </motion.div>
   {/* skiils section */}
      <div>
        <h1 className="text-orange-500 text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-3 achh1 text-center">
          My Skills
        </h1>
        <div className="relative overflow-hidden">
        <div
          className="flex items-center w-max animate-scroll"
        >
          {loop.map((item, idx) => (
            <div
              key={idx}
              className="flex min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] flex-col items-center justify-center py-4"
            >
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20">
                {item.type === "icon" ? (
                  <i
                    className={`${item.class} text-[44px] sm:text-[52px] lg:text-[60px]`}
                    aria-label={item.name}
                    title={item.name}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Keyframes for smooth infinite scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-7">      
        {/* UI/UX */}
        <motion.div 
          className="bg-[#111111] border border-gray-800 rounded-2xl p-4 shadow-lg  hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-white-400 mb-2">UI/UX</h2>
          <p className="text-gray-400">
            User Research, Wireframing, Auto Layout, Prototyping, Visual & Interaction Design, 
            User Testing, Figma, Behance
          </p>
        </motion.div>

        {/* Web Development */}
        <motion.div 
          className="bg-[#111111] border border-gray-800 rounded-2xl p-4 shadow-lg hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-white-400 mb-2">Web Development</h2>
          <p className="text-gray-400">
            HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Redux, Framer Motion
          </p>
        </motion.div>

        {/* Languages */}
        <motion.div 
          className="bg-[#111111] border border-gray-800 rounded-2xl p-4 shadow-lg hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-white-400 mb-2">Languages</h2>
          <p className="text-gray-400">
            JavaScript, Java, Python, SQL
          </p>
        </motion.div>

        {/* Libraries & Frameworks */}
        <motion.div 
          className="bg-[#111111] border border-gray-800 rounded-2xl p-4 shadow-lg hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-white-400 mb-2">Libraries, Frameworks & Databases</h2>
          <p className="text-gray-400">
            React, Pandas, Numpy, Matplotlib, Redux, Framer Motion, Bootstrap, Tailwind CSS, MySQL
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div 
          className="bg-[#111111] border border-gray-800 rounded-2xl p-4 shadow-lg hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-white-400 mb-1">Platforms & Version Control</h2>
          <p className="text-gray-400">
            GitHub, VS Code, Git, GitLab, Jupyter, Figma, Behance
          </p>
        </motion.div>

      </div>
      </div>
    </div>
  );
};
