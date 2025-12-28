import React from "react";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Globe,
  Send,
  CheckCircle2,
  Home,
  Instagram,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface ContactUsProps {
  onBack: () => void;
}

export function ContactUs({ onBack }: ContactUsProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  // Success page
  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <CheckCircle2
                className="w-24 h-24 text-green-500 relative"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Your message has been sent successfully!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-12 max-w-md mx-auto"
          >
            We appreciate you reaching out to us. Our team will review your
            message and get back to you as soon as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-muted transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>

            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/30 transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border space-y-2"
          >
            <p className="text-base font-bold text-white">
              Need immediate assistance?
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
        </motion.div>
      </div>
    );
  }

  // Contact form page
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Have a question or feedback? We'd love to hear from you. Fill out
              the form and our team will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-muted-foreground">support@getfame.app</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Live Chat</h3>
                  <p className="text-muted-foreground">
                    Available 24/7 in our mobile app
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Social Media</h3>
                  <p className="text-muted-foreground">
                    Follow us on Instagram and Twitter
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission

                const form = e.currentTarget;
                const formData = new FormData(form);

                // Submit to Google Forms in the background
                const formActionUrl = import.meta.env
                  .VITE_GOOGLE_FORM_ACTION_URL;

                if (!formActionUrl) {
                  console.error("Google Form action URL is not configured");
                  return;
                }

                fetch(formActionUrl, {
                  method: "POST",
                  body: formData,
                  mode: "no-cors", // Required for Google Forms
                })
                  .then(() => {
                    // Show success page
                    setSubmitted(true);
                    form.reset(); // Clear the form
                  })
                  .catch(() => {
                    // Even if there's an error, show success (no-cors doesn't return response)
                    setSubmitted(true);
                    form.reset();
                  });
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    name="entry.1170512975"
                    placeholder="John"
                    className="bg-muted/50 border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    name="entry.2069210394"
                    placeholder="Doe"
                    className="bg-muted/50 border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="entry.80792566"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-muted/50 border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="entry.1281537634"
                  placeholder="How can we help?"
                  className="bg-muted/50 border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="entry.1637161134"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[150px] bg-muted/50 border-border"
                  required
                />
              </div>

              <Button
                className="w-full bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-purple-500/20 cursor-pointer"
                type="submit"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
