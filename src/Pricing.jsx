import { motion } from "framer-motion";

export const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "$29/month",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Basic Support",
        "Up to 5 Pages",
      ],
      buttonText: "Get Started",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Pro",
      price: "$59/month",
      features: [
        "All Starter Features",
        "Advanced SEO",
        "Priority Support",
        "Up to 20 Pages",
        "Custom Integrations",
      ],
      buttonText: "Choose Pro",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Enterprise",
      price: "$99/month",
      features: [
        "All Pro Features",
        "Dedicated Manager",
        "Unlimited Pages",
        "Custom API Integration",
        "24/7 Support",
      ],
      buttonText: "Contact Sales",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold  text-center"
        >
          Flexible <span className="text-blue-500">Pricing Plans</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4  text-center text-lg max-w-2xl mx-auto"
        >
          Choose a plan that fits your business needs and scale with confidence.
        </motion.p>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
                {/* Price */}
                <p className="mt-2 text-3xl font-semibold text-blue-600">
                  {plan.price}
                </p>
                {/* Features */}
                <ul className="mt-4 space-y-2 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <button
                  className={`mt-6 w-full py-3 text-white font-medium rounded-full shadow-md transition duration-300 ${plan.buttonColor}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
