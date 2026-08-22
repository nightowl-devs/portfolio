"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Term } from "./ui/term";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="flex flex-col gap-4 px-4 sm:px-12 min-h-dvh justify-center " id="about">
      <Heading className="text-black">
        {t("heading.prefix")} <span className="text-blue">{t("heading.accent")}</span>
      </Heading>
      <div className="  flex-col xl:flex-row flex  justify-between  mr-4 gap-16 xl:gap-0">
        <div className="">
          <p className="max-w-2xl text-2xl text-black">
            {t.rich("intro.paragraph1", {
              name: (chunks) => <span className="text-blue font-semibold">{t("terms.name.label")}</span>,
              role: (chunks) => (
                <Term definition={t("terms.fullStackDeveloper.definition")}>{t("terms.fullStackDeveloper.label")}</Term>
              ),
              country: (chunks) => <Term definition={t("terms.poland.definition")}>{t("terms.poland.label")}</Term>,
              slop: (chunks) => <Term definition={t("terms.slop.definition")}>{t("terms.slop.label")}</Term>,
            })}
            <br />
            <br />
            {t("intro.paragraph2")}
            <br />
            <br />
            {t.rich("intro.paragraph3", {
              appName: (chunks) => <Term definition={t("terms.zaliczTo.definition")}>{t("terms.zaliczTo.label")}</Term>,
              waitlist: (chunks) => (
                <Term definition={t("terms.waitlist.definition")}>
                  <a href="https://zaliczto.pl?utm_source=nightowl.dev">{t("terms.waitlist.label")}</a>
                </Term>
              ),
            })}
            <br />
            <br />
            {t.rich("intro.paragraph4", {
              leetcode: (chunks) => <Term definition={t("terms.leetcode.definition")}>{t("terms.leetcode.label")}</Term>,
            })}
            <br />
            <br />
            {t("intro.paragraph5")}
          </p>
          <p className="text-sm text-gray">{t("hint")}</p>
          <Button
            className="mt-2  xl:w-full"
            variant="seccondary"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <p className="text-base font-display font-bold text-black">{t("cta")}</p>
          </Button>
        </div>
        <div className="flex flex-row justify-center [@media(min-width:1800px)]:mr-32">
          <div className="  h-125 w-100 -rotate-12 overflow-hidden ">
            <Image src="/img/home/code.webp" alt={t("images.codeAlt")} width={400} height={500} className="object-cover" />
          </div>
          <div className=" h-125 w-100 rotate-12 overflow-hidden -ml-25">
            <Image src="/img/home/botwinka.jpg" alt={t("images.portraitAlt")} width={400} height={500} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
