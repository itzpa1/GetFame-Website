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
    question: "Is GetFame safe to use?",
    answer:
      "Yes, GetFame is designed with user security in mind. We do not store your passwords or sensitive personal data. Millions of users trust our app for their social media growth.",
  },
  {
    question: "How do I download the APK?",
    answer:
      "Simply click on the 'Download APK' button at the top of this page. The download will start automatically. Once downloaded, open the file to install it on your Android device.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, the basic features of GetFame are completely free. You can earn coins by performing tasks and use them to get followers. There are also optional paid features for faster growth.",
  },
  {
    question: "Can I use it on iOS/iPhone?",
    answer:
      "Currently, GetFame is primarily an Android application (.apk). However, we are working on a web version and iOS solution. Stay tuned for updates!",
  },
  {
    question: "Will my social accounts get banned?",
    answer:
      "If used responsibly, your account is safe. We recommend using a secondary account to earn coins and sending the followers to your main account to minimize any risk.",
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 p-6 rounded-2xl border border-border shadow-sm"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-foreground hover:text-[#aa00ff] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
