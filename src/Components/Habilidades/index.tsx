import { SvgCss } from "../SvgComponents/css";
import { SvgHtml } from "../SvgComponents/html";
import { SvgJs } from "../SvgComponents/js";
import { SvgNext } from "../SvgComponents/next";
import { SvgReact } from "../SvgComponents/react";
import { SvgTailwind } from "../SvgComponents/tailwind";
import { SvgTypescritp } from "../SvgComponents/typescript";

const skills = [
  { name: "HTML", icon: SvgHtml, level: "Intermediário", percentage: 65 },
  { name: "CSS", icon: SvgCss, level: "Intermediário", percentage: 60 },
  { name: "JavaScript", icon: SvgJs, level: "Básico", percentage: 20 },
  { name: "React", icon: SvgReact, level: "Básico", percentage: 15 },
  { name: "Next.js", icon: SvgNext, level: "Básico", percentage: 13 },
  {
    name: "TypeScript",
    icon: SvgTypescritp,
    level: "Básico",
    percentage: 12,
  },
  {
    name: "Tailwind CSS",
    icon: SvgTailwind,
    level: "Intermediário",
    percentage: 55,
  },
];

export const Habilidades = () => {
  return (
    <section id="skills" className="w-full h-full p-8">
      <div className="w-full flex justify-center mt-16">
        <span className="text-2xl font-bold">Habilidades</span>
      </div>
      <div className="flex items-center justify-between pt-16">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return <Icon key={index} className="w-10 h-10" />;
        })}
      </div>
      <div className="mt-16 space-y-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex items-center space-x-4">
              <Icon className="w-6 h-6" />
              <div className="flex-1">
                <div className="flex justify-between pb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-secondary bg-opacity-10 rounded-full h-2.5 relative ">
                  <div
                    className="bg-primary h-2.5 rounded-full absolute"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
