"use client";
import { LucideArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Heading } from "./ui/heading";

export function WorksSection() {
  const t = useTranslations("Works");
  return (
    <section
      className="flex flex-col gap-4  px-4 sm:px-12 pb-16 min-h-dvh items-center justify-center mb-16 xl:mb-0"
      id="works"
    >
      <div className="flex flex-col gap-1 self-end">
        <Heading className=" font-bold text-black text-right">
          {t("heading.prefix")}{" "}
          <span className="text-blue">{t("heading.accent")}</span>
        </Heading>
        <p className="max-w-2xl text-2xl text-black self-end text-right">
          {t("subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 items-center  justify-center  gap-8 mt-8 lg:mt-0 xl:gap-6 lg:grid-cols-2 xl:grid-cols-3 px-4 ">
        <ProjectCard
          name={t("projects.zaliczTo.name")}
          description={t("projects.zaliczTo.description")}
          imageUrl="/img/projects/project1.png"
          previewUrl="https://example.com/project1"
          type={t("projects.zaliczTo.type")}
          className="lg:-rotate-16 lg:translate-y-28"
          year={t("projects.zaliczTo.year")}
        />
        <ProjectCard
          name={t("projects.portfolio.name")}
          description={t("projects.portfolio.description")}
          imageUrl="/img/projects/project2.png"
          previewUrl="https://example.com/project2"
          type={t("projects.portfolio.type")}
          year={t("projects.portfolio.year")}
        />
        <ProjectCard
          name={t("projects.sideProject.name")}
          description={t("projects.sideProject.description")}
          imageUrl="/img/projects/project3.png"
          previewUrl="https://example.com/project3"
          type={t("projects.sideProject.type")}
          className="lg:rotate-16 lg:translate-y-32"
          year={t("projects.sideProject.year")}
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
  year: string;
  className?: string;
};
function ProjectCard({
  name,
  description,
  imageUrl,
  previewUrl,
  type,
  year,
  className,
}: ProjectCardProps) {
  return (
    <a
      href={previewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col gap-2 border border-gray group bg-white ${className}`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-60 border-gray border-b"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-3xl font-semibold font-display text-black">
            {name}
          </h3>
          <LucideArrowUpRight
            className="ml-2 h-8 w-8 text-black group-hover:text-blue transition-all "
            strokeWidth={2}
          />
        </div>
        <p className="text-base font-medium uppercase text-gray">
          {type} · {year}
        </p>
        <p className="text-xl text-black ">{description}</p>
      </div>
    </a>
  );
}
