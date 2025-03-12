import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

export const Test = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Solutions",
      feedback:
        "Working with this team has been a game-changer for our business. We’ve seen a significant increase in traffic and customer engagement since launching our new site.",
      image: "opp.jpg",
    },
    {
      name: "Emily Smith",
      role: "Marketing Manager, Creative Hub",
      feedback:
        "I was impressed by their ability to understand our vision and translate it into a website that truly reflects our brand identity. The seamless user experience ",
      image: "kx.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Founder, Startup Co.",
      feedback:
        "The team’s professionalism and expertise made the entire development process smooth and efficient. They provided valuable insights and ensured that every element of the site was optimized for performance",
      image: "kx.jpg",
    },
  ];

  return (
    <section className="w-full bg-black py-20 mb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          What Our Clients <span className="text-blue-500">Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-center text-base sm:text-lg max-w-2xl mx-auto"
        >
          Hear from businesses we've helped grow and succeed with high-performance websites.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.feedback}"
              </p>

              {/* Stars */}
              <div className="flex items-center mt-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
