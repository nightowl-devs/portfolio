"use client";
import { CornerRightDownIcon, DownloadIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { scrollTo } from "@/lib/utils";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

export function Hero() {
  const t = useTranslations("Hero");
  const subtitleLines = t("subtitle").split("\n");

  return (
    <section className="z-10 flex flex-1 flex-col justify-start gap-4 pt-20">
      <Heading className="text-left font-bold  text-black">
        {t("heading.prefix")}
        <span className="md:mt-8 2xl:ml-48  block 2xl:text-center text-blue 2xl:tracking-[0.40em]">
          {t("heading.accent")}
        </span>
      </Heading>
      <div className="grid w-full xl:grid-cols-[1fr_auto_1fr] items-center lg:gap-16 gap-8 ">
        <h2 className=" max-w-2xl text-left text-3xl text-black font-medium ">
          {subtitleLines.map((line, i) => (
            <span key={line}>
              {line}
              {i < subtitleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            className="font-bold w-full xl:w-auto"
            onClick={() =>
              window.open("/files/StanislawBotwina-Resume-EN.pdf", "_blank")
            }
          >
            {t("buttons.downloadResume")}
            <DownloadIcon
              className="ml-2 h-6 w-6 inline text-white font-bold"
              strokeWidth={2}
            />
          </Button>
          <Button
            variant="seccondary"
            className="font-bold w-full xl:w-auto "
            onClick={() => scrollTo("#about")}
          >
            {t("buttons.learnMore")}
            <CornerRightDownIcon
              className="ml-2 h-6 w-6 inline text-black font-bold"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
