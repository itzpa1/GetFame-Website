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

        <div className="prose prose-purple dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <p>
            This is the Cookie Policy for GetFame, accessible from
            https://getfame-free.vercel.app/.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Are Cookies
            </h2>
            <p>
              As is common practice with almost all professional websites this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This page describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored however this may downgrade
              or 'break' certain elements of the sites functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Cookies
            </h2>
            <p>
              We use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Disabling Cookies
            </h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do
              not disable cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              The Cookies We Set
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Site preferences cookies:</strong> In order to provide
                you with a great experience on this site we provide the
                functionality to set your preferences for how this site runs
                when you use it. In order to remember your preferences we need
                to set cookies so that this information can be called whenever
                you interact with a page is affected by your preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third Party Cookies
            </h2>
            <p>
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </li>
              <li>
                The Google AdSense service we use to serve advertising uses a
                DoubleClick cookie to serve more relevant ads across the web and
                limit the number of times that a given ad is shown to you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              More Information
            </h2>
            <p>
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren't sure whether you
              need or not it's usually safer to leave cookies enabled in case it
              does interact with one of the features you use on our site.
            </p>
            <p className="mt-4">
              However if you are still looking for more information then you can
              contact us through one of our preferred contact methods.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
