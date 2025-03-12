import { motion } from "framer-motion";

export const Client = () => {
  const clients = [
    { name: "Google", logo: "i.webp" },
    { name: "Facebook", logo: "f.webp" },
    { name: "Microsoft", logo: "m.webp" },
    { name: "Netflix", logo: "k.webp" },
    { name: "Amazon", logo: "d.webp" },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center "
        >
          Our <span className="text-blue-600">Clients</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          We are trusted by some of the world's leading brands.
        </motion.p>

        {/* Client Logos */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto   transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Animation */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"
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
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-40"
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
