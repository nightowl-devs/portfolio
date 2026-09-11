"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations("NotFound");
  return (
    <div className=" isolate flex w-full flex-col gap-16 overflow-clip">
      <div className="reative flex min-h-dvh w-full flex-col px-4 sm:px-12 pt-8">
        <Image
          src="/img/home/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-40 md:opacity-50 xl:object-contain xl:opacity-100 -z-10"
        />
        <div className="flex flex-col gap-4 items-start">
          <Heading className="text-blue">
            {t("title")}
            <span className="text-black">{t("suffix")}</span>
          </Heading>
          <p className="text-2xl text-black">{t("description")}</p>
          <Button
            variant="seccondary"
            className="w-xl"
            onClick={() => router.push("/")}
          >
            {t("cta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
