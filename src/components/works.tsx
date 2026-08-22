"use client";
import { LucideArrowUpRight } from "lucide-react";
import { Heading } from "./ui/heading";

export function WorksSection() {
  return (
    <section className="flex flex-col gap-4  px-4 sm:px-12 pb-16 min-h-dvh items-center justify-center mb-16 xl:mb-0" id="works">
      <div className="flex flex-col gap-1 self-end">
        <Heading className=" font-bold text-black text-right">
          things <span className="text-blue">i made</span>
        </Heading>
        <p className="max-w-2xl text-2xl text-black self-end text-right">Read about my best creations.</p>
      </div>
      <div className="grid grid-cols-1 items-center  justify-center  gap-8 mt-8 lg:mt-0 xl:gap-6 lg:grid-cols-2 xl:grid-cols-3 px-4 ">
        <ProjectCard
          name="ZaliczTo.PL"
          description="A learning platform built for Polish high school students.
          Lessons, progress tracking in one place.
          Built across the frontend and backend."
          imageUrl="/img/project1.png"
          previewUrl="https://example.com/project1"
          type="Mobile App"
          className="lg:-rotate-16 lg:translate-y-28"
          year={2023}
        />
        <ProjectCard
          name="Portfolio Site"
          description="This site! Hand-rolled with Next.js, sharp, and scoring green on Lighthouse across the board."
          imageUrl="/img/project2.png"
          previewUrl="https://example.com/project2"
          type="Web App"
          year={2024}
        />
        <ProjectCard
          name="Side Project"
          description="Some other thing I'm tinkering with. New ideas are more fun than homework."
          imageUrl="/img/project3.png"
          previewUrl="https://example.com/project3"
          type="Web App"
          className="lg:rotate-16 lg:translate-y-32"
          year={2025}
        />
      </div>
    </section>
  );
}

type ProjectCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  previewUrl: string;
  type: string;
  year: number;
  className?: string;
};
function ProjectCard({ name, description, imageUrl, previewUrl, type, year, className }: ProjectCardProps) {
  return (
    <a
      href={previewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col gap-2 border border-gray group bg-white ${className}`}
    >
      <img src={imageUrl} alt={name} className="w-full h-60 border-gray border-b" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-3xl font-semibold font-display text-black">{name}</h3>
          <LucideArrowUpRight className="ml-2 h-8 w-8 text-black group-hover:text-blue transition-all " strokeWidth={2} />
        </div>
        <p className="text-base font-medium uppercase text-gray">
          {type} · {year}
        </p>
        <p className="text-xl text-black ">{description}</p>
      </div>
    </a>
  );
}
