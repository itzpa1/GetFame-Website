import React from "react";
import {
  ArrowLeft,
  Target,
  Users,
  ShieldCheck,
  Zap,
  Instagram,
} from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

interface AboutUsProps {
  onBack: () => void;
}

export function AboutUs({ onBack }: AboutUsProps) {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent">
          About Us
        </h1>

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-12 text-muted-foreground">
          <section>
            <p className="text-lg leading-relaxed">
              Welcome to <strong>GetFame</strong>, your number one source for
              social media growth. We're dedicated to providing you the very
              best of social media services, with an emphasis on speed, safety,
              and user privacy.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-muted-foreground">
                To empower content creators and businesses by providing
                accessible, high-quality social media growth tools that deliver
                real results without compromising security.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Our Community
              </h3>
              <p className="text-sm text-muted-foreground">
                We serve millions of users worldwide, helping them build their
                online presence and reach their target audience effectively
                across all major social platforms.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why We Started
            </h2>
            <p>
              Founded in 2025, GetFame has come a long way from its beginnings.
              When we first started out, our passion for "Social Media for
              Everyone" drove us to start our own business. We realized that
              many growth tools were either too expensive, required sensitive
              passwords, or were simply ineffective.
            </p>
            <p className="mt-4">
              We decided to change that. We built GetFame to be the tool we
              wanted to use: fast, free-to-start, and 100% secure.
            </p>
          </section>

          <section className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-left">
              Our Core Values :-
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">Privacy First</h4>
                  <p className="text-sm">
                    We never ask for your passwords or sensitive data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">Instant Results</h4>
                  <p className="text-sm">
                    Our systems are optimized for the fastest delivery possible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="not-prose mt-16 p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-24 h-24 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden shadow-xl">
                  <img
                    src="/assets/codeitzpa1.png"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="text-center sm:text-left">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Code.itzpa1
                  </h3>
                  <p className="text-[#aa00ff] font-semibold mb-3">
                    Lead Developer & Founder
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md mb-4">
                    Passionate about building secure and high-performance tools
                    that help people grow their digital presence.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-purple-500/20 hover:bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    asChild
                  >
                    <a
                      href="https://instagram.com/code.itzpa1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Connect on Instagram
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          <section>
            <p>
              We hope you enjoy our services as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
            <p className="mt-8 font-bold text-foreground">
              Sincerely,
              <br />
              The GetFame Team
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
