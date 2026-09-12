import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { WorksSection } from "@/components/works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="isolate flex w-full flex-col gap-16 overflow-clip">
      <header className="reative flex min-h-dvh w-full flex-col px-4 sm:px-12 pt-8">
        {/*<Image
          src="/img/home/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-40 md:opacity-50 xl:object-contain xl:opacity-100 -z-10"
        />*/}
        <Navbar />
        <Hero />
      </header>
      <main className="flex flex-col gap-16">
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  );
}
