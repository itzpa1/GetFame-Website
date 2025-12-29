import React from "react";
import { Download, ShieldCheck, Zap, Coins, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Download GetFame",
    description:
      "Get started by downloading the official GetFame app directly from our website. Safe, fast, and always up to date.",
    image:
      "https://images.unsplash.com/photo-1641541519627-d0f7e3bce615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Download,
  },
  {
    number: "02",
    title: "No Login Required",
    description:
      "Experience true privacy. GetFame works without requiring your social media passwords or sensitive login details. Your account security is our top priority.",
    image:
      "https://images.unsplash.com/photo-1671293258300-979f65eec4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "No Coin Grinding",
    description:
      "Forget the hassle of earning coins by following others. GetFame provides direct, instant services without the need for any coin-based systems.",
    image:
      "https://images.unsplash.com/photo-1596568251367-1a391f2d8d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            How GetFame works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            GetFame is designed to be the simplest and most secure way to boost
            your social presence. No passwords, no grinding, just results.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-100 dark:bg-purple-900 -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`flex-1 w-full lg:w-1/2 flex flex-col justify-center ${
                    index % 2 !== 0
                      ? "lg:pl-24 text-center lg:text-left"
                      : "lg:pr-24 text-center lg:text-right"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-[#aa00ff] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Mobile only icon */}
                  <div className="lg:hidden mt-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-[#aa00ff]">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Center Number Bubble (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-100 dark:border-purple-900 items-center justify-center shadow-lg z-10 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#aa00ff]">
                    {step.number}
                  </span>
                </div>

                {/* Image Side */}
                <div
                  className={`flex-1 w-full lg:w-1/2 flex justify-center ${
                    index % 2 !== 0 ? "lg:pr-24" : "lg:pl-24"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-purple-50 dark:bg-purple-900/10 group"
                  >
                    <div className="absolute inset-0 bg-[#aa00ff]/10 group-hover:bg-[#aa00ff]/0 transition-colors duration-500"></div>
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating icon badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className={`absolute bottom-6 ${
                        index % 2 !== 0 ? "right-6" : "left-6"
                      } w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-[#aa00ff]" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
