import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface DisclaimerProps {
  onBack: () => void;
}

export function Disclaimer({ onBack }: DisclaimerProps) {
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
          Disclaimer
        </h1>

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <p>
            The information contained on GetFame website (the "Service") is for
            general information purposes only.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              No Warranties
            </h2>
            <p>
              GetFame assumes no responsibility for errors or omissions in the
              contents of the Service. In no event shall GetFame be liable for
              any special, direct, indirect, consequential, or incidental
              damages or any damages whatsoever, whether in an action of
              contract, negligence or other tort, arising out of or in
              connection with the use of the Service or the contents of the
              Service.
            </p>
            <p>
              GetFame reserves the right to make additions, deletions, or
              modifications to the contents on the Service at any time without
              prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third-Party Services
            </h2>
            <p>
              GetFame does not warrant that the Service is free of viruses or
              other harmful components. GetFame is not affiliated with
              Instagram, TikTok, YouTube, or any other social media platform.
              Use of this service is at your own risk.
            </p>
            <p>
              We are not responsible for any account bans, suspensions, or
              violations of third-party terms of service that may result from
              using our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              External Links Disclaimer
            </h2>
            <p>
              The Service may contain links to external websites that are not
              provided or maintained by or in any way affiliated with GetFame.
              Please note that GetFame does not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on these
              external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Professional Disclaimer
            </h2>
            <p>
              The Service cannot and does not contain professional advice. The
              information is provided for general informational and educational
              purposes only and is not a substitute for professional advice.
            </p>
            <p>
              Accordingly, before taking any actions based upon such
              information, we encourage you to consult with the appropriate
              professionals. We do not provide any kind of professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Use at Your Own Risk
            </h2>
            <p>
              All information on the Service is provided "as is", with no
              guarantee of completeness, accuracy, timeliness or of the results
              obtained from the use of this information, and without warranty of
              any kind, express or implied.
            </p>
            <p>
              In no event will GetFame, or its partners, employees or agents, be
              liable to you or anyone else for any decision made or action taken
              in reliance on the information on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Disclaimer, please contact us
              through our Contact Us page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
