import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full  py-12 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 - Brand & Description */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Binyameen
            </motion.h2>
            <p className="mt-4 text-black leading-relaxed">
              We build high-quality, performance-driven websites to help your
              business grow and succeed.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-black  transition duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Social Media Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-semibold mb-4"
            >
              Follow Us
            </motion.h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-black "
              >
                <FaFacebook size={28} />
              </motion.a>
              {/* Twitter */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-black"
              >
                <FaTwitter size={28} />
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-black"
              >
                <FaInstagram size={28} />
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-black"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-500 pt-6 text-center text-black text-sm">
          © {new Date().getFullYear()} Binyameen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
