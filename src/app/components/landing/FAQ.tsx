import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "motion/react";
import { Page } from "../../App";

const faqs = [
  {
    question: "How to use GetFame?",
    answer:
      "Using GetFame is simple and completely free. No signup or login is required. Just visit the platform, choose the service you need, enter the required link or username, and submit. The results will start appearing shortly.",
  },
  {
    question: "Are there risks for my account using GetFame?",
    answer:
      "GetFame prioritizes user safety. Our methods are designed to minimize risk while delivering results. To avoid any issues, it is recommended not to use multiple similar services at the same time.",
  },
  {
    question: "How do I know GetFame is reliable?",
    answer:
      "GetFame is trusted by thousands of users worldwide. Since all services are free, users can try and verify the results themselves without any commitment.",
  },
  {
    question: "When will I see results after using a service?",
    answer:
      "Results usually start appearing within minutes, but the exact timing depends on the service and current demand. In some cases, it may take a few hours.",
  },
  {
    question: "What if my followers, likes, or views drop?",
    answer:
      "Drops can occasionally happen due to platform updates or cleanups. If a drop occurs, you can simply use the service again, as GetFame is completely free.",
  },
  {
    question: "How does GetFame ensure service quality?",
    answer:
      "All services on GetFame are regularly tested and monitored to maintain consistent quality and performance.",
  },
  {
    question: "How to get my TikTok profile link?",
    answer:
      "Open the TikTok app and go to your profile by tapping the profile icon. Tap your profile picture or the three-dot menu and select 'Copy link'. Your profile link will be copied to your clipboard.",
  },
  {
    question: 'Why is my order status "Partial"?',
    answer:
      'A "Partial" status means the full amount could not be delivered. For example, if 10,000 views were requested and 9,000 were delivered, the remaining portion was not completed.',
  },
  {
    question: "Do you need my passwords?",
    answer:
      "No. GetFame never asks for passwords or personal information. Your account security and privacy are always protected.",
  },
  {
    question: "Why should I use GetFame?",
    answer:
      "Higher numbers on social media help build credibility and attract more engagement. GetFame helps boost visibility and social proof at no cost.",
  },
];

interface FAQProps {
  onNavigate: (page: Page) => void;
}

export function FAQ({ onNavigate }: FAQProps) {
  return (
    <section
      id="faq"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have questions? We're here to help. If you don't see your question
              here, feel free to contact our support.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 bg-card rounded-2xl border border-border shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="text-[#aa00ff] font-medium hover:text-[#9000d9] transition-colors"
            >
              Contact Support &rarr;
            </button>
          </motion.div>
        </div>

        {/* FAQ */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/50 shadow-sm grid sm:grid-cols-2 gap-4 relative mt-4 sm:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[250px] h-[250px] sm:w-[200px] sm:h-[400px] bg-[#aa00ff] rounded-full mix-blend-multiply dark:mix-blend-normal opacity-30 dark:opacity-20 blur-2xl z-0"></div>

          <Accordion
            type="single"
            collapsible
            className="w-full z-10 backdrop-blur-2xl space-y-4"
          >
            {faqs.slice(0, Math.ceil(faqs.length) / 2).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-foreground text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full z-10 backdrop-blur-2xl space-y-4"
          >
            {faqs.slice(Math.ceil(faqs.length) / 2).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-foreground text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
