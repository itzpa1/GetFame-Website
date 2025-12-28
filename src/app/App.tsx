import React, { useState, useEffect } from "react";
import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { HowItWorks } from "./components/landing/HowItWorks";
import { FAQ } from "./components/landing/FAQ";
import { Footer } from "./components/landing/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";
import { TermsOfService } from "./components/legal/TermsOfService";
import { CookiePolicy } from "./components/legal/CookiePolicy";
import { HelpCenter } from "./components/support/HelpCenter";
import { ContactUs } from "./components/support/ContactUs";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Skeleton } from "./components/ui/skeleton";
import { AdBanner } from "./components/ads/AdBanner";
import { InterstitialAd } from "./components/ads/InterstitialAd";
import { Screenshots } from "./components/landing/Screenshots";

export type Page = "home" | "privacy" | "tos" | "cookie" | "help" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulate initial load for skeleton demonstration
    const timer = setTimeout(() => setIsLoading(false), 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadClick = () => {
    setShowAd(true);
  };

  const handleAdComplete = () => {
    // Here you would normally trigger the actual download
    console.log("Download started after ad");
    alert("Download started! Check your notifications.");
  };

  const renderSkeleton = () => (
    <div className="container mx-auto px-4 py-20 space-y-12">
      <Skeleton className="h-20 w-full rounded-2xl" />
      <div className="grid md:grid-cols-2 gap-8">
        <Skeleton className="h-[400px] rounded-3xl" />
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-12 w-1/2 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );

  const renderPage = () => {
    if (isLoading && currentPage === "home") return renderSkeleton();

    switch (currentPage) {
      case "privacy":
        return <PrivacyPolicy onBack={() => setCurrentPage("home")} />;
      case "tos":
        return <TermsOfService onBack={() => setCurrentPage("home")} />;
      case "cookie":
        return <CookiePolicy onBack={() => setCurrentPage("home")} />;
      case "help":
        return (
          <HelpCenter
            onBack={() => setCurrentPage("home")}
            onNavigate={setCurrentPage}
          />
        );
      case "contact":
        return <ContactUs onBack={() => setCurrentPage("home")} />;
      default:
        return (
          <>
            <Navbar
              onNavigate={setCurrentPage}
              onDownload={handleDownloadClick}
            />
            <Hero onDownload={handleDownloadClick} />
            <Screenshots />
            <AdBanner />
            <Features />
            <HowItWorks />
            <AdBanner />
            <FAQ onNavigate={setCurrentPage} />
            <Footer onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-purple-500 selection:text-white transition-colors duration-300">
        {renderPage()}

        <InterstitialAd
          isOpen={showAd}
          onClose={() => setShowAd(false)}
          onAdComplete={handleAdComplete}
        />

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#aa00ff] text-white shadow-2xl shadow-purple-500/40 hover:bg-[#9000d9] transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
