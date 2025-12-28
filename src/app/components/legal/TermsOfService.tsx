import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          Terms of Service
        </h1>

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using GetFame, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Use of Service
            </h2>
            <p>
              You agree to use GetFame only for purposes that are permitted by
              the Terms and any applicable law, regulation or generally accepted
              practices or guidelines in the relevant jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User Conduct
            </h2>
            <p>
              You are solely responsible for your conduct and any data, text,
              information, screen names, graphics, photos, profiles, audio and
              video clips, links that you submit, post, and display on the
              GetFame service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Termination
            </h2>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the jurisdiction in which GetFame operates, without regard
              to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
