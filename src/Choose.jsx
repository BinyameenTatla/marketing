import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

export const Choose = () => {
  const reasons = [
    {
      title: "Expert Team with Proven Results",
      description:
        "Our team consists of experienced developers and designers who have delivered successful projects for businesses of all sizes. We focus on creating scalable and high-performance solutions tailored to your needs.",
    },
    {
      title: "Cutting-Edge Design and Technology",
      description:
        "We leverage the latest design trends and technologies to ensure your website stands out. Our approach focuses on user experience, speed, and functionality to help you achieve your business goals.",
    },
    {
      title: "Dedicated Support and Maintenance",
      description:
        "We don’t just build websites — we provide ongoing support and maintenance to keep your site secure and up-to-date. Our team is available to address any issues and implement improvements as needed.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
        >
          Why <span className="text-blue-600">Choose Us?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
        >
          We deliver high-quality, performance-driven websites tailored to your business
          needs. Our expertise ensures you get the best possible results.
        </motion.p>

        {/* Reasons */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <CheckCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Animation */}
      <motion.div
        className="absolute top-16 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, -10, 0],
          y: [0, 10, -10, 0],
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -10, 10, 0],
          y: [0, -10, 10, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};
