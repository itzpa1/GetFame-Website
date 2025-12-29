import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const screenshots = [
  {
    title: "Home Dashboard",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=800&fit=crop",
  },
  {
    title: "Service Selection",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=800&fit=crop",
  },
  {
    title: "Order Tracking",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=800&fit=crop",
  },
  {
    title: "Profile Growth",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=800&fit=crop",
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            App Screenshots
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at the clean and intuitive interface of GetFame.
            Designed for simplicity and speed.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {screenshots.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="relative aspect-[9/19] rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-background">
                  <ImageWithFallback
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">
                      {screen.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative gradients for horizontal scroll */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background/50 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background/50 to-transparent pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
}
