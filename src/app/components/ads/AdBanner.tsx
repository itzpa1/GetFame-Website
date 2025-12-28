import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto my-8 px-4 ${className}`}>
      <div className="relative group overflow-hidden rounded-xl border border-border bg-muted/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-xs">
              AD
            </div>
            <div>
              <h4 className="font-bold text-foreground">
                Boost Your Profile Faster
              </h4>
              <p className="text-sm text-muted-foreground">
                Try our premium booster for 2x faster results.
              </p>
            </div>
          </div>

          <button className="whitespace-nowrap px-6 py-2 rounded-full bg-foreground text-background text-sm font-bold hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-1">
          <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
            Sponsored
          </span>
        </div>
      </div>
    </div>
  );
}
