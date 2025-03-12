import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="w-full bg-black py-20 mb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-md"
        >
          <img
            src="kll.webp"
            alt="About us"
            width="320"
            height="320"
            className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            We are a team of experienced developers and designers dedicated to building
            high-quality, performance-driven websites. Our mission is to help businesses
            grow and succeed in the digital world.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            From strategy to execution, we work closely with you to deliver tailored
            solutions that meet your business needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};
