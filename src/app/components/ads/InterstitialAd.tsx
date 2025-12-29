import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import AdTest from "./AdsTest";

interface InterstitialAdProps {
  isOpen: boolean;
  onClose: () => void;
  onAdComplete: () => void;
}

export function InterstitialAd({
  isOpen,
  onClose,
  onAdComplete,
}: InterstitialAdProps) {
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setCountdown(5);
      setCanClose(false);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClose(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen]);

  const handleDownload = () => {
    onAdComplete();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-8"
        >
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden mx-4">
            {/* Close Button */}
            <button
              onClick={onClose}
              disabled={!canClose}
              className={`absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full transition-all z-10 ${
                canClose
                  ? "bg-muted text-foreground hover:bg-muted/80"
                  : "bg-muted/50 text-muted-foreground cursor-not-allowed"
              }`}
            >
              {canClose ? (
                <X className="w-4 md:w-5 h-4 md:h-5" />
              ) : (
                <span className="text-xs font-bold px-2">{countdown}s</span>
              )}
            </button>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col items-center text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/20 mb-6 md:mb-8">
                <ShieldCheck className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent px-4">
                Ready to Download?
              </h2>

              <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-md px-4">
                Your download is almost ready. GetFame is 100% safe and secure.
                No login required.
              </p>

              <div className="w-full bg-muted/50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-border">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    File Name
                  </span>
                  <span className="text-xs md:text-sm text-foreground font-bold truncate">
                    GetFame_v1.0.apk
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    File Size
                  </span>
                  <span className="text-xs md:text-sm text-foreground font-bold">
                    12.4 MB
                  </span>
                </div>
              </div>
              <AdTest />
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                <Button
                  onClick={handleDownload}
                  className="flex-1 bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full h-12 md:h-14 text-base md:text-lg font-bold shadow-xl shadow-purple-500/20"
                >
                  Start Download Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-full h-12 md:h-14 text-base md:text-lg font-bold border-border"
                >
                  Visit Sponsor{" "}
                  <ExternalLink className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                </Button>
              </div>

              <p className="mt-6 md:mt-8 text-xs text-muted-foreground uppercase tracking-widest">
                Sponsored Content
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
