import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-[#111111] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-orange-500 text-lg mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passionate About Technology & Innovation
          </h2>

          <p className="leading-8 text-base max-w-xl">
            I’m Ankit Tiwari, an MCA student and Full Stack Developer
            passionate about creating modern web applications and solving
            real-world problems through technology.

            <br /><br />

            I specialize in React.js, Node.js, MongoDB, and modern frontend
            development while also exploring Artificial Intelligence,
            Machine Learning, and Data Science.

            <br /><br />

            Along with development, I am also working as a Co-Founder
            at CodeKashi, where we build digital solutions, websites,
            and branding experiences for businesses and clients.
          </p>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

          {[
            { title: "15+", desc: "Projects Completed" },
            { title: "2+", desc: "Internships" },
            { title: "MCA", desc: "Galgotias University" },
            { title: "Data", desc: "Science Projects" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl text-center hover:border-orange-500 transition"
            >

              <h3 className="text-4xl font-bold text-orange-500">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;