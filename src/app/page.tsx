import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { WorksSection } from "@/components/works";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" isolate flex w-full flex-col gap-4">
      <div className=" flex h-dvh w-full flex-col px-12 pt-8">
        <Image
          src="/img/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-60 md:opacity-50 xl:object-contain xl:opacity-100 -z-10"
        />
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col gap-16">
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </div>
    </div>
  );
}
