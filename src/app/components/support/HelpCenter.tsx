import React from "react";
import {
  ArrowLeft,
  Search,
  Book,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";
import { Page } from "../../App";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

interface HelpCenterProps {
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export function HelpCenter({ onBack, onNavigate }: HelpCenterProps) {
  const categories = [
    {
      title: "Getting Started",
      description:
        "Learn the basics of how GetFame works and how to set up your account.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Account & Security",
      description:
        "Manage your account settings and learn about our security measures.",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Features & Usage",
      description:
        "Detailed guides on how to use all the features GetFame offers.",
      icon: <Book className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common issues and technical problems.",
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    },
  ];

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

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent">
            How can we help you?
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help..."
              className="pl-12 py-6 text-lg rounded-2xl border-border bg-muted/50 focus:bg-background transition-all"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer border-border bg-card/50 backdrop-blur-sm hover:-translate-y-1 group"
            >
              <CardHeader className="flex flex-row items-start gap-6 p-8">
                <div className="p-4 rounded-2xl bg-muted group-hover:bg-purple-500/10 transition-colors">
                  {category.icon}
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our support team is available 24/7 to assist you with any questions
            or concerns.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            className="bg-[#aa00ff] hover:bg-[#9000d9] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/20"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
