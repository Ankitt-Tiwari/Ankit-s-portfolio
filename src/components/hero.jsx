import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";

const Hero = () => {
  return (

    <section
      id="home"
      className="min-h-screen bg-black relative overflow-hidden flex items-center px-6 md:px-20"
    >

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="z-10">

          {/* Top Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 text-lg mb-4"
          >
            Full Stack Developer • Co-Founder at CodeKashi
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >

            Hi, I'm <span className="text-orange-500">Ankit Tiwari</span>

          </motion.h1>

          {/* Typing Effect */}
          <h2 className="text-xl md:text-2xl text-gray-400 mt-4 h-10">

            <Typewriter
              words={[
                "Full Stack Developer",
                "React.js Developer",
                "WordPress Developer",
                "Data Analyst",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400 mt-6 max-w-2xl text-lg leading-8"
          >

            I create modern, scalable, and user-focused web applications
            with expertise in React.js, Node.js, MongoDB, and frontend
            development while exploring AI, Machine Learning, and
            data-driven digital solutions.

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-5 mt-10 flex-wrap"
          >

            <a
              href="#projects"
              className="bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-700 px-6 py-3 rounded-xl hover:border-orange-500 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 transition"
            >
              Download Resume
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex gap-6 mt-10 text-gray-400"
          >

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              Instagram
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center z-10"
        >

          <div className="relative">

            {/* Image Glow */}
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profile}
              alt="Ankit Tiwari"
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-orange-500 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>

  );
};

export default Hero;