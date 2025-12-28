import React from 'react';
import { Zap, Users, ShieldCheck, Gift } from 'lucide-react';
import { motion } from 'motion/react';

const featuresLeft = [
  {
    icon: Gift,
    title: "Completely free",
    description: "Get followers and likes completely free. Earn coins by following others.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Users,
    title: "Real users",
    description: "Real people will follow you. We ensure high quality interactions.",
    color: "bg-purple-100 text-purple-600"
  }
];

const featuresRight = [
  {
    icon: Zap,
    title: "High speed",
    description: "Super fast delivery. Start getting followers immediately after ordering.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "No password required for most features. Your data is safe with us.",
    color: "bg-purple-100 text-purple-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-black/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Why GetFame is the best?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We provide the best service to boost your social media accounts safely and efficiently.
          </motion.p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 items-center"
        >
          
          {/* Left Column */}
          <div className="space-y-12">
            {featuresLeft.map((feature, index) => (
              <motion.div variants={itemVariants} key={index} className="flex flex-col items-center lg:items-end text-center lg:text-right group">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Phone Mockup */}
          <motion.div variants={itemVariants} className="relative mx-auto py-8">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/50 to-pink-200/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl transform scale-90"></div>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-[240px] bg-white dark:bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden"
            >
                <div className="h-6 bg-gray-200 dark:bg-gray-800 w-full absolute top-0 left-0 z-20"></div>
                
                {/* Screen Content */}
                <div className="h-[480px] bg-[#aa00ff] pt-8 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-lg"></div>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">GetFame</h4>
                    <span className="text-white/80 text-xs mb-8">Get Free Followers</span>
                    
                    <div className="w-full bg-white dark:bg-gray-900 rounded-t-[2rem] flex-1 p-6 space-y-4">
                        <div className="h-12 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                        <div className="h-12 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-75"></div>
                        <div className="h-12 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-150"></div>
                        <div className="h-20 w-full bg-purple-50 dark:bg-purple-900/20 rounded-xl mt-4"></div>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            {featuresRight.map((feature, index) => (
              <motion.div variants={itemVariants} key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
