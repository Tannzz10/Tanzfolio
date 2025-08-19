import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      logo: "https://cdn-prod.mybharats.in/tasks/17061776111577.png",
      title: "Gurugram Cyber Police",
      subtitle: "GPCSSI",
      date: "02-06-25 to 02-07-25",
      description:
        "As a Gurugram Police Cyber Security Summer Intern, I learned extensively about cyber security and threats. During this tenure, my team and I developed 'PriAware' – a real-time surveillance AI system with a unique dashboard displaying all records.As a Gurugram Police Cyber Security Summer Intern, I learned extensively about cyber security and threats. During this tenure, my team and I developed 'PriAware' – a real-time surveillance AI system with a unique dashboard displaying all records.",
      buttons: [
        {
          label: "View Certificate",
          link: " https://drive.google.com/file/d/1NEClNyPFEDqJ-3dloEdnPEn9T9Zl2MYp/view?usp=drivesdk",
        },
      ],
    },
    {
      id: 2,
      logo: "https://www.ibradigitals.com/img/ibra-logo.png",
      title: "IBRA Digital Branding Services Pvt Ltd",
      subtitle: "Software Developer Intern",
      date: "20-06-24 to 31-07-24",
      description:
        "As a software developer intern at IBRA Digital Branding Services Pvt. Ltd., I was tasked with building an Olympic-themed website from scratch using HTML, CSS, JavaScript, and Bootstrap. The website was fully responsive and included Home, Schedule, and Medal Tally pages.",
      buttons: [
        {
          label: "View Project 1",
          link: "https://www.funandflip.com/olympics",
        },
        {
          label: "View Project 2",
          link: "https://www.dutchnews.co/olympics", 
        },
        {
          label: "View LOR",
          link: "https://drive.google.com/file/d/1c8U4YGxMskryftJzjljNuF2a5Xs4pRIL/view?usp=drivesdk", 
        },
      ],
    },
  ];

  return (
    <div className="bg-[#101010] text-white px-4 sm:px-10 lg:px-10 py-5" id="Experience">
      <h1 className="text-orange-500 text-4xl sm:text-5xl font-bold mb-10 ">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#0b0b0b] rounded-2xl  p-6 flex flex-col items-center text-center border border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out"
          >
            {/* Company Logo */}
            <img
              src={exp.logo}
              alt={exp.title}
              className="w-32 h-32 object-contain mb-4 rounded-lg bg-white p-2"
            />

            {/* Title and Subtitle */}
            <h2 className="text-xl font-semibold text-orange-400">{exp.title}</h2>
            <p className="text-sm text-gray-300">{exp.subtitle}</p>
            <p className="text-sm text-gray-400 italic mb-3">{exp.date}</p>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {exp.description}
            </p>

            {/* Buttons with Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {exp.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-sm font-medium shadow-md transition"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
