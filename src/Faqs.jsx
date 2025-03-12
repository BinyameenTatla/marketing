import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

 const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What major services do you offer?",
      answer:
        "We offer a comprehensive range of web development services, including responsive design, performance optimization, SEO integration, and custom React-based solutions. "
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The time required to build a website depends on the complexity and scope of the project. On average, a standard business website takes 4 to 6 weeks from planning to launch."
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your website remains secure, fast, and updated. Our team is available to troubleshoot issues, implement new features",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Absolutely! We implement best practices for on-page SEO during development to improve search engine rankings. We also offer consultation on content strategy, keyword research, ",
    },
    {
      question: "How do you handle revisions and feedback?",
      answer:
        "We value your input and work closely with you throughout the development process. We provide regular updates and allow for multiple revision rounds to ensure the final product ",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl  font-bold text-blue-600 text-center"
        >
          Frequently Asked <span className="text-black">Questions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-100 text-center text-base sm:text-lg max-w-2xl mx-auto"
        >
          Find answers to the most common questions about our services and
          process.
        </motion.p>

        {/* FAQ List */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f2f2f2] rounded-2xl shadow-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between sm:justify-between items-center p-2 lg:p-6 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-6 pb-6"
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Faqs