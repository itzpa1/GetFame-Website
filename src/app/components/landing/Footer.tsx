import React from "react";
import {
  Heart,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Music,
} from "lucide-react";
import { motion } from "motion/react";
import { Page } from "../../App";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
    { icon: <Music className="w-5 h-5" />, label: "TikTok", href: "#" },
    { icon: <Send className="w-5 h-5" />, label: "Telegram", href: "#" },
  ];

  return (
    <footer className="bg-[#7c00bf] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm"
              >
                <img
                  src="/src/assets/favicon.png"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </motion.div>
              <span className="text-2xl font-bold tracking-wider">GetFame</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              The best application to get free followers, likes, and views.
              Safe, secure, and effective for all major platforms.
            </p>
            <div className="flex gap-4 flex-wrap">
              <TooltipProvider>
                {socialLinks.map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        {social.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-3 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-lg mb-6">Menu</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigate("home")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigate("help")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigate("privacy")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("tos")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("cookie")}
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} GetFame. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>for Social Media Users</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
