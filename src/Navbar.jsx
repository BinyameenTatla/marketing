import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md py-4 w-[100%] fixed top-0 left-0 z-50 backdrop-blur-3xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-600">
          AgencyPro
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-[#000] hover:text-blue-600 transition duration-300">
            Services
          </a>
          <a href="#portfolio" className="text-[#000] hover:text-blue-600 transition duration-300">
            Portfolio
          </a>
          <a href="#about" className="text-[#000] hover:text-blue-600 transition duration-300">
            About
          </a>
          <a href="#contact" className="text-[#000] hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#get-started"
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fff] focus:outline-none"
          >
            <motion.svg
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#000000]"
          >
            <a
              href="#services"
              className="block px-6 py-3 text-white hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-6 py-3 text-white hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="block px-6 py-3 text-white hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-6 py-3 text-white hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#get-started"
              className="block px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
