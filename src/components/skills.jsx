import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React.js",
    "Node.js",
    "JavaScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "WordPress",
    "Data Analysis",
    "Git & GitHub",
    "Power BI",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-black text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl py-6 text-center text-gray-300 hover:text-white hover:border-orange-500 transition"
          >
            {skill}
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;