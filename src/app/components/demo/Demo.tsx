import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Instagram,
  Eye,
  TrendingUp,
  Zap,
  Shield,
  Download,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Play,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion, AnimatePresence } from "motion/react";
import { Progress } from "../ui/progress";

interface InstagramDemoProps {
  onBack: () => void;
  onDownload: () => void;
}

export function InstagramDemo({ onBack, onDownload }: InstagramDemoProps) {
  const [username, setUsername] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [liveStats, setLiveStats] = useState({
    totalUsers: 125847,
    viewsDelivered: 45892341,
    activeNow: 3421,
  });

  // Simulate live stats updating
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 5),
        viewsDelivered: prev.viewsDelivered + Math.floor(Math.random() * 100),
        activeNow: prev.activeNow + Math.floor(Math.random() * 10 - 5),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsProcessing(true);
    setProgress(0);
    setShowSuccess(false);
    setViewsCount(0);

    // Simulate processing
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Simulate views counting up
    setTimeout(() => {
      const viewsInterval = setInterval(() => {
        setViewsCount((prev) => {
          if (prev >= 500) {
            clearInterval(viewsInterval);
            setShowSuccess(true);
            setIsProcessing(false);
            return 500;
          }
          return prev + Math.floor(Math.random() * 50) + 10;
        });
      }, 100);
    }, 2500);
  };

  const resetDemo = () => {
    setUsername("");
    setIsProcessing(false);
    setProgress(0);
    setViewsCount(0);
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Try Before You Download
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Instagram Views Demo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how GetFame delivers real Instagram views instantly. Try
            our demo to see the magic happen!
          </p>
        </motion.div>

        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {liveStats.totalUsers.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-6 text-center">
            <Eye className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
              {liveStats.viewsDelivered.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Views Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {liveStats.activeNow.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Active Now</div>
          </div>
        </motion.div>

        {/* Demo Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl sticky top-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Try Demo</h2>
                <p className="text-sm text-muted-foreground">
                  Enter any username
                </p>
              </div>
            </div>

            <form onSubmit={handleDemo} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="@username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isProcessing}
                  className="bg-muted/50 border-border text-lg py-6"
                  required
                />
              </div>

              <AnimatePresence mode="wait">
                {!isProcessing && !showSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-purple-500/30"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Demo
                    </Button>
                  </motion.div>
                )}

                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        Processing...
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {progress}% Complete
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                        +{viewsCount}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        Views Delivered
                      </div>
                    </div>
                  </motion.div>
                )}

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                      <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        Demo Complete!
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Successfully delivered {viewsCount} views to @{username}
                      </div>
                      <Button
                        onClick={resetDemo}
                        variant="outline"
                        className="w-full rounded-full"
                      >
                        Try Again
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white text-center">
                      <Zap className="w-10 h-10 mx-auto mb-3" />
                      <div className="text-lg font-bold mb-2">
                        Want More Views?
                      </div>
                      <div className="text-sm opacity-90 mb-4">
                        Download GetFame to get unlimited views for your posts!
                      </div>
                      <Button
                        onClick={onDownload}
                        className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-full font-semibold"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download App
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-muted-foreground">
                  100% Safe & Secure
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-muted-foreground">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-muted-foreground">Real Active Users</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose GetFame?</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast Delivery",
                    description:
                      "Get views delivered to your posts within seconds. No waiting, no delays.",
                    color: "text-yellow-500",
                    bg: "bg-yellow-500/10",
                  },
                  {
                    icon: Shield,
                    title: "100% Safe & Secure",
                    description:
                      "Your account is completely safe. We never ask for your password.",
                    color: "text-green-500",
                    bg: "bg-green-500/10",
                  },
                  {
                    icon: Users,
                    title: "Real Active Users",
                    description:
                      "All views come from real, active Instagram users. No bots or fake accounts.",
                    color: "text-blue-500",
                    bg: "bg-blue-500/10",
                  },
                  {
                    icon: TrendingUp,
                    title: "Boost Your Growth",
                    description:
                      "More views lead to better engagement and organic growth on Instagram.",
                    color: "text-purple-500",
                    bg: "bg-purple-500/10",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${feature.bg}`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    @sarahj_official
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "GetFame helped me grow my Instagram from 500 to 50K followers
                in just 3 months! The views are real and the engagement is
                amazing. Highly recommended! 🚀"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-3">
                Ready to Grow Your Instagram?
              </h3>
              <p className="opacity-90 mb-6">
                Join 125,000+ users who are already growing their Instagram with
                GetFame
              </p>
              <Button
                onClick={onDownload}
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download GetFame Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
