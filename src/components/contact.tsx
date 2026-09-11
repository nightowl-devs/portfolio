"use client";
import { useTranslations } from "next-intl";
import { Heading } from "./ui/heading";

export function ContactSection() {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="px-12 sm:mx-12 m-4 sm:mb-12 py-16 bg-black flex flex-col gap-4 justify-center"
    >
      <Heading as="h2" className="max-w-4xl text-white">
        {t("heading")}
      </Heading>
      <div className="flex flex-col lg:flex-row justify-between items-left  gap-4 lg:items-center">
        <p className="text-xl text-gray max-w-xl">{t("description")}</p>
        <a
          href={`mailto:${t("email")}`}
          className="text-2xl md:text-3xl font-display font-medium text-white underline decoration-gray decoration-[0.5px] underline-offset-6 hover:decoration-blue transition-all"
        >
          {t("email")}
        </a>
      </div>
    </section>
  );
}
