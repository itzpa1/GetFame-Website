import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          Privacy Policy
        </h1>

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when you use
              GetFame. This may include your social media handles, email
              address, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to develop new ones, and to protect GetFame
              and our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not share your personal information with companies,
              organizations, or individuals outside of GetFame except in the
              following cases: with your consent, for external processing, or
              for legal reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p>
              We work hard to protect GetFame and our users from unauthorized
              access to or unauthorized alteration, disclosure, or destruction
              of information we hold.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Changes to This Policy
            </h2>
            <p>
              Our Privacy Policy may change from time to time. We will post any
              privacy policy changes on this page and, if the changes are
              significant, we will provide a more prominent notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
