import React from "react";
import { Gift, Play, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function DemoBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1"
        >
          <div className="bg-background rounded-[1.4rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    Try Before You Download
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  See GetFame in Action
                </h2>

                <p className="text-muted-foreground text-lg">
                  Experience our Instagram Views service with a live demo. No
                  download required!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <Button
                    onClick={() => navigate("/demo/instagram-views")}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                  >
                    <Gift className="w-5 h-5 mr-2 size-2" />
                    Try Free Demo
                  </Button>
                </div>
              </div>

              {/* Right: Stats/Visual */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center"
                >
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    300+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Demo Views
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-6 text-center"
                >
                  <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                    Instant
                  </div>
                  <div className="text-sm text-muted-foreground">Delivery</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="col-span-2 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                    100% Safe & Free
                  </div>
                  <div className="text-sm text-muted-foreground">
                    No signup or download needed for demo
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
