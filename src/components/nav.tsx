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
          <Image src="/img/profile-pic.png" alt="Profile Picture" width={64} height={64} className="shrink-0" />

          <div className="flex flex-row gap-2">
            <p className="text-4xl text-display font-bold tracking-tight text-black [writing-mode:vertical-lr]">botwinka</p>

            <div className="flex flex-col items-end justify-end gap-1">
              <Image src="/img/github.svg" className="cursor-pointer" alt="GitHub" width={48} height={48} />

              <Image src="/img/linkedin.svg" className="cursor-pointer" alt="LinkedIn" width={48} height={48} />
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
            <Image src="/img/profile-pic.png" alt="Profile Picture" width={48} height={48} className="shrink-0" />
            <h1 className="text-black font-display font-bold text-3xl  [writing-mode:vertical-lr]">botwinka</h1>
          </div>

          <div className="flex flex-col items-end justify-end gap-1">
            <Image src="/img/github.svg" className="cursor-pointer" alt="GitHub" width={48} height={48} />

            <Image src="/img/linkedin.svg" className="cursor-pointer" alt="LinkedIn" width={48} height={48} />
          </div>
        </div>
        <Button variant="primary" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          <p className="text-base font-display font-bold text-white">Let's Connect</p>
        </Button>
      </div>
    </nav>
  );
}
