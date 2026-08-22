"use client";
import { LucideArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Heading } from "./ui/heading";

export function WorksSection() {
  const t = useTranslations("Works");
  return (
    <section className="flex flex-col gap-4  px-4 sm:px-12 pb-16 min-h-dvh items-center justify-center mb-16 xl:mb-0" id="works">
      <div className="flex flex-col gap-1 self-end">
        <Heading className=" font-bold text-black text-right">
          {t("heading.prefix")} <span className="text-blue">{t("heading.accent")}</span>
        </Heading>
        <p className="max-w-2xl text-2xl text-black self-end text-right">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 items-center  justify-center  gap-8 mt-8 lg:mt-0 xl:gap-6 lg:grid-cols-2 xl:grid-cols-3 px-4 ">
        <ProjectCard
          name={t("projects.zaliczTo.name")}
          description={t("projects.zaliczTo.description")}
          imageUrl={t("projects.zaliczTo.image")}
          previewUrl={t("projects.zaliczTo.previewUrl")}
          githubUrl={t("projects.zaliczTo.githubUrl")}
          type={t("projects.zaliczTo.type")}
          className="lg:-rotate-16 lg:translate-y-28"
          year={t("projects.zaliczTo.year")}
        />
        <ProjectCard
          name={t("projects.mailJudge.name")}
          description={t("projects.mailJudge.description")}
          imageUrl={t("projects.mailJudge.image")}
          previewUrl={t("projects.mailJudge.previewUrl")}
          githubUrl={t("projects.mailJudge.githubUrl")}
          type={t("projects.mailJudge.type")}
          year={t("projects.mailJudge.year")}
        />
        <ProjectCard
          name={t("projects.mcFight.name")}
          description={t("projects.mcFight.description")}
          imageUrl={t("projects.mcFight.image")}
          previewUrl={t("projects.mcFight.previewUrl")}
          githubUrl={t("projects.mcFight.githubUrl")}
          type={t("projects.mcFight.type")}
          className="lg:rotate-16 lg:translate-y-32"
          year={t("projects.mcFight.year")}
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
  githubUrl?: string;
  type: string;
  year: string;
  className?: string;
};
function ProjectCard({ name, description, imageUrl, previewUrl, githubUrl, type, year, className }: ProjectCardProps) {
  const showGithub = githubUrl && !(previewUrl === "") ? true : false;

  return (
    <div className={`flex flex-col gap-2 border border-gray  bg-white ${className ?? ""}`}>
      <img src={imageUrl} alt={name} className="w-full h-60 border-gray border-b object-cover" />
      <div className="flex flex-col gap-2 p-4">
        <button onClick={() => window.open(previewUrl || githubUrl, "_blank")} className="text-left group">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-3xl font-semibold font-display text-black">{name}</h3>
              <LucideArrowUpRight className="ml-2 h-8 w-8 text-black group-hover:text-blue transition-all " strokeWidth={2} />
            </div>
            <p className="text-base font-medium uppercase text-gray">
              {type} · {year}
            </p>
            <p className="text-xl text-black ">{description}</p>
          </div>
        </button>

        {showGithub && (
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-black underline decoration-gray decoration-dashed underline-offset-4 hover:text-blue"
            >
              GitHub <LucideArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
