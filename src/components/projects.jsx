const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analysis platform that extracts skills, evaluates resumes, and improves candidate screening experience.",
      tech: ["React.js", "Node.js", "MongoDB"],
    },

    {
      title: "Mental Health Monitoring System",
      description:
        "Smart mental wellness monitoring system with chatbot interaction and emotional analysis features.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    },

    {
      title: "Cardiovascular Disease Prediction",
      description:
        "Machine learning-based healthcare project for predicting heart disease risks using medical datasets and predictive analytics.",
      tech: ["Python", "Machine Learning", "Scikit-learn"],
    },

    {
      title: "Smart Queue Management System",
      description:
        "Web-based queue optimization solution developed for improving user experience and reducing waiting time.",
      tech: ["Web Development", "System Design"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-[#111111]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-orange-500 text-lg mb-3">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-2 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">

                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-black/40 border border-gray-700 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;