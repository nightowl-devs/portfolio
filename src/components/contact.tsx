import { ArrowUpRight } from "lucide-react";
import { Heading } from "./ui/heading";

export function ContactSection() {
  return (
    <section id="contact" className="px-12 mx-12 mb-12 py-16 bg-black flex flex-col gap-4 justify-center">
      <Heading className="max-w-4xl text-white">Let’s make a way through.</Heading>
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl text-gray max-w-xl">
          Available for any project, from a quick landing page to a full product. Contact me for a quote and let's get started.
        </p>
        <div className="flex flex-row gap-4 group items-center justify-center">
          <a
            href="mailto:hello@nightowl.dev"
            className="text-3xl font-display font-medium text-white underline decoration-gray decoration-[0.5px] underline-offset-6 hover:decoration-blue transition-all"
          >
            hello@nightowl.dev
          </a>
        </div>
      </div>
    </section>
  );
}
