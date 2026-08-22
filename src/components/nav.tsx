"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const NAV_KEYS = [
  { key: "home" as const, hash: "#" },
  { key: "about" as const, hash: "#about" },
  { key: "works" as const, hash: "#works" },
  { key: "contact" as const, hash: "#contact" },
];

const CONTACT_ITEMS = [
  {
    imageSrc: "/img/brands/github.svg",
    targetUrl: "https://github.com/nightowl-devs",
    labelKey: "github" as const,
  },
  {
    imageSrc: "/img/brands/linkedin.svg",
    targetUrl: "https://www.linkedin.com/in/stanisław-botwina-693724388/",
    labelKey: "linkedin" as const,
  },
];

export function Navbar() {
  const t = useTranslations("Nav");
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || "#");
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const handleNavItemClick = (hash: string) => {
    setCurrentHash(hash);

    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-start gap-4 ">
        <div className="flex flex-col items-start justify-center gap-2">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D35AQHk4m5joBZ8kw/profile-framedphoto-shrink_800_800/B4DZ..JjhWHQAY-/0/1785601604120?e=1787832000&v=beta&t=kFPaOzuWdL-qiTbpcbtJZ6k7K6lUpL9AuRJM-KLYCcg"
            alt={t("alt.profileDesktop")}
            width={64}
            height={64}
            className="shrink-0 rounded-full"
          />

          <div className="flex flex-row gap-2">
            <p className="text-4xl text-display font-bold tracking-tight text-black [writing-mode:vertical-lr]">
              {t("brand")}
            </p>

            <div className="flex flex-col items-end justify-end gap-1">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.labelKey}
                  href={item.targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.imageSrc}
                    className="cursor-pointer"
                    alt={t(`ariaLabels.${item.labelKey}`)}
                    width={48}
                    height={48}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 font-medium">
          {NAV_KEYS.map((item) => (
            <a
              key={item.key}
              href={item.hash}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item.hash);
              }}
              className={`text-base font-medium text-black transition-all hover:text-blue ${
                currentHash === item.hash
                  ? "underline hover:decoration-black decoration-blue decoration-dashed decoration-1  underline-offset-4"
                  : ""
              }`}
            >
              {t(`links.${item.key}`)}
            </a>
          ))}
        </div>

        <div className="flex flex-row justify-self-end gap-4">
          <Button
            variant="primary"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <p className="text-base font-display font-bold text-white">
              {t("cta")}
            </p>
          </Button>
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-between items-start">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2  ">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D35AQHk4m5joBZ8kw/profile-framedphoto-shrink_800_800/B4DZ..JjhWHQAY-/0/1785601604120?e=1787832000&v=beta&t=kFPaOzuWdL-qiTbpcbtJZ6k7K6lUpL9AuRJM-KLYCcg"
              alt={t("alt.profileMobile")}
              width={48}
              height={48}
              className="shrink-0 rounded-full"
            />
            <p className="text-black font-display font-bold text-3xl  [writing-mode:vertical-lr]">
              {t("brand")}
            </p>
          </div>

          <div className="flex flex-col items-end justify-end gap-1">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.labelKey}
                href={item.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.imageSrc}
                  className="cursor-pointer"
                  alt={t(`ariaLabels.${item.labelKey}`)}
                  width={48}
                  height={48}
                />
              </a>
            ))}
          </div>
        </div>
        <Button
          variant="primary"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <p className="text-base font-display font-bold text-white">
            {t("cta")}
          </p>
        </Button>
      </div>
    </nav>
  );
}
