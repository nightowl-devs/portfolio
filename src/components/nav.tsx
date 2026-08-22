"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Home", hash: "#" },
  { name: "About", hash: "#about" },
  { name: "My works", hash: "#works" },
  { name: "Contact", hash: "#contact" },
];

const CONTACT_ITEMS = [
  {
    imageSrc: "/img/github.svg",
    targetUrl: "https://github.com/nightowl-devs",
    label: "GitHub",
  },
  {
    imageSrc: "/img/linkedin.svg",
    targetUrl: "https://www.linkedin.com/in/stanisław-botwina-693724388/",
    label: "LinkedIn",
  },
];

export function Navbar() {
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
            alt="MY Picture WOW!"
            width={64}
            height={64}
            className="shrink-0 rounded-full"
          />

          <div className="flex flex-row gap-2">
            <p className="text-4xl text-display font-bold tracking-tight text-black [writing-mode:vertical-lr]">botwinka</p>

            <div className="flex flex-col items-end justify-end gap-1">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.targetUrl} target="_blank" rel="noopener noreferrer">
                  <Image src={item.imageSrc} className="cursor-pointer" alt={item.label} width={48} height={48} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
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
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-row justify-self-end gap-4">
          <Button variant="primary" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            <p className="text-base font-display font-bold text-white">Let's Connect</p>
          </Button>
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-between items-start">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2  ">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D35AQHk4m5joBZ8kw/profile-framedphoto-shrink_800_800/B4DZ..JjhWHQAY-/0/1785601604120?e=1787832000&v=beta&t=kFPaOzuWdL-qiTbpcbtJZ6k7K6lUpL9AuRJM-KLYCcg"
              alt="Profile Picture"
              width={48}
              height={48}
              className="shrink-0 rounded-full"
            />
            <p className="text-black font-display font-bold text-3xl  [writing-mode:vertical-lr]">botwinka</p>
          </div>

          <div className="flex flex-col items-end justify-end gap-1">
            {CONTACT_ITEMS.map((item) => (
              <a key={item.label} href={item.targetUrl} target="_blank" rel="noopener noreferrer">
                <Image src={item.imageSrc} className="cursor-pointer" alt={item.label} width={48} height={48} />
              </a>
            ))}
          </div>
        </div>
        <Button variant="primary" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          <p className="text-base font-display font-bold text-white">Let's Connect</p>
        </Button>
      </div>
    </nav>
  );
}
