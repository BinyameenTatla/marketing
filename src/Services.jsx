import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create responsive, fast, and SEO-friendly websites to boost your business online.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive and visually appealing user interfaces for a seamless user experience.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description:
        "Our SEO strategies help your website rank higher and attract more organic traffic.",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          We offer a wide range of digital solutions to help you grow your
          business and stand out online.
        </motion.p>

        {/* Services Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-5xl">{service.icon}</div>
              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              {/* Button */}
              <a
                href="#"
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300 shadow-md"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Animation */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, -10, 0],
          y: [0, 10, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -10, 10, 0],
          y: [0, -10, 10, 0],
          rotate: [0, -10, 10, 0],
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
