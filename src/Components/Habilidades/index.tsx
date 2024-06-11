import { SvgCss } from "../SvgComponents/css";
import { SvgHtml } from "../SvgComponents/html";
import { SvgJs } from "../SvgComponents/js";
import { SvgNext } from "../SvgComponents/next";
import { SvgReact } from "../SvgComponents/react";
import { SvgTailwind } from "../SvgComponents/tailwind";
import { SvgTypescritp } from "../SvgComponents/typescript";

export const Habilidades = () => {
  return (
    <section id="skills" className="w-full h-full">
      <div className="w-full flex justify-center mt-16">
        <span className="text-2xl font-bold">Habilidades</span>
      </div>
      <div className="flex w-full items-center justify-between px-7 mt-16">
        <SvgHtml />
        <SvgCss />
        <SvgJs />
        <SvgReact />
        <SvgNext />
        <SvgTypescritp />
        <SvgTailwind />
      </div>
      <div></div>
    </section>
  );
};
