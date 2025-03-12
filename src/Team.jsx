import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    position: "Senior Web Designer",
    description:
      "John crafts visually appealing, user-friendly websites that enhance user experience and drive conversions.",
    image: "opp.webp",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jane Smith",
    position: "SEO Specialist",
    description:
      "Jane helps businesses rank higher on search engines by implementing cutting-edge SEO strategies.",
    image: "pp.webp",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Johnson",
    position: "Backlink Expert",
    description:
      "Emily builds high-quality backlinks to boost domain authority and improve search engine rankings.",
    image: "ll.webp",
    linkedin: "#",
    twitter: "#",
  },
];

export const Team = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          Meet Our <span className="text-blue-600">Expert Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Our team of professionals brings years of experience to help you succeed in the digital world.
        </motion.p>

        {/* Team Members */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Smaller Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600 text-sm mt-1">{member.position}</p>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
