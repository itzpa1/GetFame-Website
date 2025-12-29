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
  AlertCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion, AnimatePresence } from "motion/react";
import { Progress } from "../ui/progress";
import { AdBanner } from "../ads/AdBanner";
import { InterstitialAd } from "../ads/InterstitialAd";

interface InstagramDemoProps {
  onBack: () => void;
  onDownload: () => void;
}

const COOLDOWN_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const COOLDOWN_KEY = "instagram_demo_cooldown";

// Realistic starting values
const INITIAL_STATS = {
  totalUsers: 1247,
  viewsDelivered: 48923,
  activeNow: 87,
};

// Testimonials with Indian names and masked usernames
const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    username: "pri***_sha",
    initial: "P",
    text: "GetFame helped me boost my reels visibility! Got 10K+ views in just 2 days. Totally worth it! 🔥",
  },
  {
    name: "Rahul Verma",
    username: "rah***_ver",
    initial: "R",
    text: "Amazing service! My Instagram engagement increased by 300%. Real views from real people. Highly recommend! ⭐",
  },
  {
    name: "Ananya Patel",
    username: "ana***_pat",
    initial: "A",
    text: "I was skeptical at first, but GetFame delivered exactly what they promised. My content is finally reaching more people! 🚀",
  },
  {
    name: "Arjun Singh",
    username: "arj***_sin",
    initial: "A",
    text: "Best decision for my Instagram growth! The views are genuine and my follower count is growing organically now. 💯",
  },
  {
    name: "Sneha Reddy",
    username: "sne***_red",
    initial: "S",
    text: "GetFame is a game changer! My reels went viral after using this. Thank you so much for this amazing service! 🙏",
  },
  {
    name: "Vikram Malhotra",
    username: "vik***_mal",
    initial: "V",
    text: "Incredible results! My business page is getting so much more visibility. Sales have increased too! Highly satisfied! 💼",
  },
];

// Function to extract Instagram reel ID from URL
const extractReelId = (url: string): string | null => {
  try {
    const patterns = [
      /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
      /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  } catch {
    return null;
  }
};

// Animated counter component
const AnimatedCounter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

export function InstagramDemo({ onBack, onDownload }: InstagramDemoProps) {
  const [reelLink, setReelLink] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [cooldownEndTime, setCooldownEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [liveStats, setLiveStats] = useState(INITIAL_STATS);

  // Check for existing cooldown on mount
  useEffect(() => {
    const storedCooldown = localStorage.getItem(COOLDOWN_KEY);
    if (storedCooldown) {
      const endTime = parseInt(storedCooldown);
      if (endTime > Date.now()) {
        setCooldownEndTime(endTime);
      } else {
        localStorage.removeItem(COOLDOWN_KEY);
      }
    }
  }, []);

  // Update remaining time countdown
  useEffect(() => {
    if (!cooldownEndTime) {
      setRemainingTime("");
      return;
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = cooldownEndTime - now;

      if (diff <= 0) {
        setCooldownEndTime(null);
        localStorage.removeItem(COOLDOWN_KEY);
        setRemainingTime("");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setRemainingTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [cooldownEndTime]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Increment live stats realistically
  useEffect(() => {
    // Users increment every 30 minutes
    const usersInterval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3) + 1,
      }));
    }, 30 * 60 * 1000);

    // Views increment every 10 minutes
    const viewsInterval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        viewsDelivered:
          prev.viewsDelivered + Math.floor(Math.random() * 500) + 500,
      }));
    }, 10 * 60 * 1000);

    // Active users fluctuate every 30 seconds
    const activeInterval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        activeNow: Math.min(
          999,
          Math.max(50, prev.activeNow + Math.floor(Math.random() * 20) - 10)
        ),
      }));
    }, 30 * 1000);

    return () => {
      clearInterval(usersInterval);
      clearInterval(viewsInterval);
      clearInterval(activeInterval);
    };
  }, []);

  const handleDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!reelLink.trim() || cooldownEndTime) return;

    // Validate Instagram reel link
    const reelId = extractReelId(reelLink);
    if (!reelId) {
      setValidationError("Please enter a valid Instagram reel link");
      return;
    }

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

            // Set cooldown
            const endTime = Date.now() + COOLDOWN_DURATION;
            setCooldownEndTime(endTime);
            localStorage.setItem(COOLDOWN_KEY, endTime.toString());

            // Show interstitial ad after a short delay
            setTimeout(() => {
              setShowAd(true);
            }, 1000);

            return 500;
          }
          return prev + Math.floor(Math.random() * 50) + 10;
        });
      }, 100);
    }, 2500);
  };

  const resetDemo = () => {
    setReelLink("");
    setIsProcessing(false);
    setProgress(0);
    setViewsCount(0);
    setShowSuccess(false);
    setValidationError("");
  };

  const handleAdComplete = () => {
    // Ad completed, user can continue
    console.log("Ad completed");
  };

  const isOnCooldown = cooldownEndTime !== null;
  const currentTestimonialData = TESTIMONIALS[currentTestimonial];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 md:mb-8 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4 md:mb-6">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-purple-500" />
            <span className="text-xs md:text-sm font-semibold text-purple-600 dark:text-purple-400">
              Try Before You Download
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent px-4">
            Instagram Views Demo
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Experience how GetFame delivers real Instagram views instantly. Try
            our demo to see the magic happen!
          </p>
        </motion.div>

        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
            <Users className="w-6 md:w-8 h-6 md:h-8 text-purple-500 mx-auto mb-2 md:mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              <AnimatedCounter end={liveStats.totalUsers} />
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Total Users
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
            <Eye className="w-6 md:w-8 h-6 md:h-8 text-pink-500 mx-auto mb-2 md:mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
              <AnimatedCounter end={liveStats.viewsDelivered} />
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Views Delivered
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
            <TrendingUp className="w-6 md:w-8 h-6 md:h-8 text-orange-500 mx-auto mb-2 md:mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              <AnimatedCounter end={liveStats.activeNow} />
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Active Now
            </div>
          </div>
        </motion.div>

        {/* Demo Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl lg:sticky lg:top-24"
          >
            {/* Demo Limitation Banner */}
            <div className="mb-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <div className="flex items-start gap-2 md:gap-3">
                <AlertCircle className="w-4 md:w-5 h-4 md:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    Demo Limitation
                  </p>
                  <p className="text-xs text-muted-foreground break-words">
                    Only for demo - if you want unlimited views every 5 min, our
                    app is coming soon!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex-shrink-0">
                <Instagram className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl md:text-2xl font-bold truncate">
                  Try Demo
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  Enter Instagram reel link
                </p>
              </div>
            </div>

            <form onSubmit={handleDemo} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Input
                  type="url"
                  placeholder="https://www.instagram.com/reel/..."
                  value={reelLink}
                  onChange={(e) => {
                    setReelLink(e.target.value);
                    setValidationError("");
                  }}
                  disabled={isProcessing || isOnCooldown}
                  className="bg-muted/50 border-border text-sm md:text-lg py-4 md:py-6"
                  required
                />
                {validationError && (
                  <p className="text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span>{validationError}</span>
                  </p>
                )}
                {isOnCooldown && (
                  <p className="text-xs text-orange-600 dark:text-orange-400 flex items-center gap-2">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">
                      Next demo available in: {remainingTime}
                    </span>
                  </p>
                )}
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
                      disabled={isOnCooldown}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full py-4 md:py-6 text-base md:text-lg font-semibold shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      {isOnCooldown ? "On Cooldown" : "Start Demo"}
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
                      <div className="text-xs md:text-sm font-medium text-muted-foreground">
                        Processing...
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {progress}% Complete
                      </div>
                    </div>

                    {/* Ad Banner during processing */}
                    <AdBanner className="my-4" />

                    <div className="bg-muted/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                        +{viewsCount}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <Eye className="w-3 md:w-4 h-3 md:h-4" />
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
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                      <CheckCircle2 className="w-10 md:w-12 h-10 md:h-12 text-green-500 mx-auto mb-3" />
                      <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        Demo Complete!
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mb-2">
                        Successfully delivered {viewsCount} views
                      </div>
                      {isOnCooldown && (
                        <div className="text-xs text-orange-600 dark:text-orange-400 flex items-center justify-center gap-2 mt-3 flex-wrap">
                          <Clock className="w-3 h-3 flex-shrink-0" />
                          <span>Next demo in: {remainingTime}</span>
                        </div>
                      )}
                      <Button
                        onClick={resetDemo}
                        variant="outline"
                        className="w-full rounded-full mt-4"
                      >
                        Close
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center">
                      <Zap className="w-8 md:w-10 h-8 md:h-10 mx-auto mb-3" />
                      <div className="text-base md:text-lg font-bold mb-2">
                        Want Unlimited Views?
                      </div>
                      <div className="text-xs md:text-sm opacity-90 mb-4">
                        Download GetFame to get unlimited views every 5 minutes!
                      </div>
                      <Button
                        onClick={onDownload}
                        className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-full font-semibold text-sm md:text-base py-2 md:py-3"
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
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <Shield className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  100% Safe & Secure
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <Clock className="w-4 md:w-5 h-4 md:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-muted-foreground">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <Users className="w-4 md:w-5 h-4 md:h-5 text-purple-500 flex-shrink-0" />
                <span className="text-muted-foreground">Real Active Users</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-4 lg:px-0">
                Why Choose GetFame?
              </h2>
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
                    className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div
                        className={`p-2 md:p-3 rounded-lg md:rounded-xl ${feature.bg} flex-shrink-0`}
                      >
                        <feature.icon
                          className={`w-5 md:w-6 h-5 md:h-6 ${feature.color}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Rotating Testimonials */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                      {currentTestimonialData.initial}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base truncate">
                        {currentTestimonialData.name}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground truncate">
                        @{currentTestimonialData.username}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-xs md:text-sm leading-relaxed">
                    "{currentTestimonialData.text}"
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-base md:text-xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {TESTIMONIALS.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentTestimonial
                            ? "w-6 bg-purple-500"
                            : "w-1.5 bg-purple-500/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Ready to Grow Your Instagram?
              </h3>
              <p className="opacity-90 mb-4 md:mb-6 text-sm md:text-base">
                Join 1,200+ users who are already growing their Instagram with
                GetFame
              </p>
              <Button
                onClick={onDownload}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
              >
                <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Download GetFame Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Interstitial Ad */}
      <InterstitialAd
        isOpen={showAd}
        onClose={() => setShowAd(false)}
        onAdComplete={handleAdComplete}
      />
    </div>
  );
}
