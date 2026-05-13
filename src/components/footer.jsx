import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >

        {/* Left Side */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl font-bold text-orange-500">
            Ankit Tiwari
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Developer • Co-Founder at CodeKashi
          </p>

        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Ankitt-Tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ankittiwari6203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/ankit_tiwari.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:sankittiwari@gmail.com"
            className="text-gray-400 hover:text-orange-500 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-800 pt-6">

        © 2026 Ankit Tiwari. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;