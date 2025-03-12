import { motion } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/oo.webp"; // Ensure the path is correct
    document.head.appendChild(link);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12 py-20">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
          >
            Elevate Your Business with{" "}
            <span className="text-blue-600">Expert Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 text-base sm:text-lg"
          >
            We craft stunning, high-performance websites tailored to elevate your
            brand’s digital presence. Our designs are sleek, responsive, and
            optimized for maximum engagement. Unlock your business's true
            potential with cutting-edge web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center lg:justify-start space-x-4"
          >
            <a
              href="#get-started"
              className="bg-blue-600 text-white px-3 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full hover:bg-blue-500 transition duration-300 shadow-md"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border border-blue-600 text-blue-600 px-3 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full hover:bg-blue-50 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{
              opacity: 0,
              x: 50,
              rotate: 0, // Initial rotation state
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 10, -10, 0], // Rotate right on mobile
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="transform transition-transform duration-500 hover:scale-105 rotate-6 sm:-rotate-6"
            src="/oo.webp"
            alt="Agency Hero"
            width={500} // Set explicit width
            height={500} // Set explicit height
          />
        </div>
      </div>

      {/* Background Circle Animation */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
          x: [0, 5, -5, 0],
          y: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};
