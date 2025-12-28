import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface CookiePolicyProps {
  onBack: () => void;
}

export function CookiePolicy({ onBack }: CookiePolicyProps) {
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
          Cookie Policy
        </h1>

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Service or a third-party to recognize you and make your
              next visit easier and the Service more useful to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How GetFame Uses Cookies
            </h2>
            <p>
              When you use and access the Service, we may place a number of
              cookies files in your web browser. We use cookies for the
              following purposes: to enable certain functions of the Service, to
              provide analytics, and to store your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Types of Cookies We Use
            </h2>
            <p>
              We use both session and persistent cookies on the Service and we
              use different types of cookies to run the Service: Essential
              cookies, Preference cookies, and Analytics cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Your Choices Regarding Cookies
            </h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser. Please note, however, that if you delete cookies or
              refuse to accept them, you might not be able to use all of the
              features we offer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
