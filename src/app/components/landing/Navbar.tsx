import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Music2,
} from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/theme-toggle";
import { motion, AnimatePresence } from "motion/react";
import { Page } from "../../App";

interface NavbarProps {
  onNavigate: (page: Page) => void;
  onDownload: () => void;
}

export function Navbar({ onNavigate, onDownload }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              onClick={() => onNavigate("home")}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/20 cursor-pointer"
            >
              <img src="/assets/logo.png" alt="Logo" width={24} height={24} />
            </motion.div>
            <span
              onClick={() => onNavigate("home")}
              className="text-2xl font-bold tracking-wider bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            >
              GetFame
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Layers className="w-4 h-4 mr-1" />
                All in One{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown for Platforms */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 bg-popover rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-3 gap-2 p-2">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-[10px] font-medium">Insta</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Send className="w-5 h-5 text-blue-500" />
                    <span className="text-[10px] font-medium">Telegram</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <span className="text-[10px] font-medium">Facebook</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Twitter className="w-5 h-5 text-sky-500" />
                    <span className="text-[10px] font-medium">Twitter</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="text-[10px] font-medium">YouTube</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Music2 className="w-5 h-5 text-black dark:text-white" />
                    <span className="text-[10px] font-medium">TikTok</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </a>
            <button
              onClick={() => onNavigate("help")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Help Center
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <span className="absolute -inset-1 rounded-full bg-purple-500/40 animate-pulse blur-sm"></span>
                <Button
                  onClick={onDownload}
                  className="relative bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full px-8 font-bold shadow-lg shadow-purple-500/20 transition-all"
                >
                  Download Now
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Platforms
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                  <Send className="w-5 h-5 text-blue-500 shrink-0" />
                  <Facebook className="w-5 h-5 text-blue-600 shrink-0" />
                  <Twitter className="w-5 h-5 text-sky-500 shrink-0" />
                  <Youtube className="w-5 h-5 text-red-500 shrink-0" />
                  <Music2 className="w-5 h-5 text-black dark:text-white shrink-0" />
                </div>
              </div>
              <a
                href="#features"
                className="text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                How it works
              </a>
              <button
                className="text-base font-medium text-left text-foreground hover:text-primary"
                onClick={() => {
                  onNavigate("help");
                  setIsOpen(false);
                }}
              >
                Help Center
              </button>
              <button
                className="text-base font-medium text-left text-foreground hover:text-primary"
                onClick={() => {
                  onNavigate("about");
                  setIsOpen(false);
                }}
              >
                About
              </button>
              <button
                className="text-base font-medium text-left text-foreground hover:text-primary"
                onClick={() => {
                  onNavigate("contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </button>
              <Button
                onClick={() => {
                  onDownload();
                  setIsOpen(false);
                }}
                className="w-full bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full"
              >
                Download
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
