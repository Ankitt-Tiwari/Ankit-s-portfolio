import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder & Developer",
      company: "CodeKashi",
      duration: "2026 - Present",
      description:
        "Working on modern website development, digital branding, UI/UX solutions, and digital marketing projects for businesses and clients.",
    },

    {
      title: "Data Science Intern",
      company: "Prodigy Infotech",
      duration: "Dec 2025 - Dec 2025",
      description:
        "Worked on data visualization, exploratory data analysis, NLP, machine learning, and real-world traffic data analysis using Python.",
    },

    {
      title: "Web Developer Intern",
      company: "Dtodstint Private Limited",
      duration: "19 March 2026 - 19 April 2026",
      description:
        "Worked on responsive website development, frontend UI improvements, and modern web design implementation using React.js, JavaScript, HTML, and CSS.",
    },

    {
      title: "Master of Computer Applications (MCA)",
      company: "Galgotias University",
      duration: "2024 - Present",
      description:
        "Focused on Full Stack Development, Artificial Intelligence, Machine Learning, DBMS, and modern software technologies.",
    },

    {
      title: "Bachelor of Computer Applications (BCA)",
      company: "United University Prayagraj",
      duration: "2021 - 2024",
      description:
        "Built strong foundations in programming, networking, web development, OOP concepts, and machine learning fundamentals.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <p className="text-orange-500 text-lg mb-3">
          Experience & Education
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-4">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-10 ml-6 relative"
            >

              {/* Dot */}
              <span className="absolute -left-3 top-2 w-4 h-4 bg-orange-500 rounded-full"></span>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-2 transition duration-300">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-orange-500 mt-1">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-gray-400 mt-3 md:mt-0">
                    {item.duration}
                  </p>

                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;