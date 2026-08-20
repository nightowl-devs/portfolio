import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-12 mx-12 mb-12 py-16 bg-black flex flex-col gap-4 justify-center"
    >
      <h2 className="text-9xl font-bold text-white  max-w-4xl font-display">
        Let’s make a way through.
      </h2>
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl text-gray max-w-xl">
          Available for any project, from a quick landing page to a full
          product. Contact me for a quote and let's get your project moving.
        </p>
        <div className="flex flex-row gap-4 group items-center justify-center">
          <a
            href="mailto:hello@botwinka.dev"
            className="text-3xl font-display font-medium text-white underline decoration-gray decoration-[0.5px] underline-offset-6 hover:decoration-blue transition-all"
          >
            hello@botwinka.dev
          </a>
        </div>
      </div>
    </section>
  );
}
