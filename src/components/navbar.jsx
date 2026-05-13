import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (

    <nav className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-orange-500">
          Ankit.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-[15px]">

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={item.link}
                className="hover:text-orange-500 transition"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition"
        >
          Hire Me
        </a>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >

          {open ? <HiX /> : <HiMenuAlt3 />}

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >

        <div className="mx-6 bg-[#111111] border border-gray-800 rounded-2xl p-6">

          <ul className="flex flex-col items-center gap-6 text-gray-300">

            {navItems.map((item, index) => (

              <li key={index}>

                <a
                  href={item.link}
                  className="hover:text-orange-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>

              </li>

            ))}

            <a
              href="#contact"
              className="bg-orange-500 px-5 py-3 rounded-xl hover:bg-orange-600 transition mt-2"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;