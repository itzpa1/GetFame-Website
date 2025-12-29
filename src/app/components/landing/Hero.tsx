import React from "react";
import {
  ShieldCheck,
  Gift,
  Tag,
  Ticket,
  Settings,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Music,
  Play,
} from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onDownload: () => void;
}

export function Hero({ onDownload }: HeroProps) {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
    { icon: <Music className="w-5 h-5" />, label: "TikTok", href: "#" },
    { icon: <Send className="w-5 h-5" />, label: "Telegram", href: "#" },
  ];
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-background transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[10%] left-[-5%] w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute bottom-[10%] right-[-5%] w-96 h-96 rounded-full bg-pink-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-bold">
              <ShieldCheck className="w-4 h-4" />
              Verified Safe & Secure APK
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Boost Your <br />
              Social Media <br />
              <span className="text-[#aa00ff]">Instantly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-medium"
            >
              Download the official GetFame APK and get real followers, likes,
              and views in minutes. No passwords, no coins, just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                onClick={onDownload}
                className="bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full px-12 h-16 text-xl font-black shadow-2xl shadow-purple-500/40 transition-all hover:scale-105 active:scale-95"
              >
                Download Now (FREE)
              </Button>
              <Button
                size="lg"
                onClick={() => navigate("/demo/instagram-views")}
                variant="outline"
                className="border-2 border-purple-500/30 hover:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full px-8 h-16 text-lg font-bold transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <span className="text-sm font-bold text-foreground">
                v1.0.4 - Latest
              </span>
              <span className="text-xs text-muted-foreground">
                Updated 2 days ago
              </span>
            </motion.div>

            {/* Platform Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start text-muted-foreground/50 gap-2 "
            >
              {socialLinks.map((social, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href={social.href}
                      className="p-1 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {social.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mr-0 flex justify-center items-center"
          >
            {/* Purple Circle Background */}
            <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#aa00ff] rounded-full mix-blend-multiply dark:mix-blend-normal opacity-90 dark:opacity-50 blur-xl"></div>

            {/* Phone Body */}
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 w-[280px] bg-white dark:bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform"
            >
              {/* Status Bar */}
              <div className="h-7 bg-gray-900 w-full absolute top-0 left-0 z-20 rounded-t-[2rem]"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>

              {/* App Content */}
              <div className="h-[580px] bg-gray-50 flex flex-col pt-10">
                {/* App Header */}
                <div className="px-6 pb-6 pt-2 bg-[#aa00ff] rounded-b-[2rem] shadow-lg relative">
                  <div className="absolute top-4 right-4 text-white/50">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div className="flex justify-center mt-4 mb-2">
                    <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-black overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                          alt="User"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#aa00ff]">
                        Request Views
                      </span>
                    </div>
                  </div>
                </div>

                {/* App Menu Items */}
                <div className="p-6 space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-white">
                      <Gift className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-700">Daily bonus</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                      <Tag className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-700">Codes</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white">
                      <Ticket className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-700">Coupons</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-4 sm:right-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-xl"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#aa00ff] flex items-center justify-center text-[#aa00ff]">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 -left-4 sm:left-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-xl"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#aa00ff] flex items-center justify-center text-[#aa00ff]">
                <Heart className="w-6 h-6 fill-[#aa00ff]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
