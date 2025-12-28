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

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <p>
            Welcome to GetFame! These terms and conditions outline the rules and
            regulations for the use of GetFame's Website, located at
            https://getfame-free.vercel.app/.
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use GetFame if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Cookies
            </h2>
            <p>
              We employ the use of cookies. By accessing GetFame, you agreed to
              use cookies in agreement with the GetFame's Privacy Policy. Most
              interactive websites use cookies to let us retrieve the user's
              details for each visit. Cookies are used by our website to enable
              the functionality of certain areas to make it easier for people
              visiting our website. Some of our affiliate/advertising partners
              may also use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. License
            </h2>
            <p>
              Unless otherwise stated, GetFame and/or its licensors own the
              intellectual property rights for all material on GetFame. All
              intellectual property rights are reserved. You may access this
              from GetFame for your own personal use subjected to restrictions
              set in these terms and conditions.
            </p>
            <p className="mt-4">You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from GetFame</li>
              <li>Sell, rent or sub-license material from GetFame</li>
              <li>Reproduce, duplicate or copy material from GetFame</li>
              <li>Redistribute content from GetFame</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User Comments
            </h2>
            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              GetFame does not filter, edit, publish or review Comments prior to
              their presence on the website. Comments do not reflect the views
              and opinions of GetFame, its agents and/or affiliates. Comments
              reflect the views and opinions of the person who post their views
              and opinions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Hyperlinking to our Content
            </h2>
            <p>
              The following organizations may link to our Website without prior
              written approval: Government agencies, Search engines, News
              organizations, Online directory distributors may link to our
              Website in the same manner as they hyperlink to the Websites of
              other listed businesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Content Liability
            </h2>
            <p>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libellous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Disclaimer
            </h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
