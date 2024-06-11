import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Sobre = () => {
  return (
    <section id="Home" className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center lg:hidden">
        <img
          className="mt-16 rounded-full shadow-primary shadow-md lg:"
          src="/image/image-hero/minha-foto.jpg"
          alt="Minha Imagem"
          width={200}
          height={200}
        />
        <div className="mt-5 flex text-xl">
          <a href="https://github.com/richarddsr21" target="_blank">
            <FaGithub className="mr-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-reis-b904392ab/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="pt-12">
          <h1 className="text-2xl font-bold bg-primary px-3 py-1 rounded-lg">
            Desenvolvedor FrontEnd
          </h1>
        </div>
        <div className="pt-4">
          <span className="flex text-justify px-7 max-w-xl">
            Meu nome é Richard da Silva Reis, tenho 21 aos e sou desenvolvedor
            FrontEnd com 3 meses de experiência em criar websites responsivos e
            amigáveis. Atualmente estou trabalhando com React, Next e
            TailwindCSS
          </span>
        </div>
      </div>

      {/* Mobile */}

      <div className="w-full flex justify-between items-center max-lg:hidden">
        <div className="max-w-[500px]">
          <div className="flex justify-center pt-12">
            <h1 className="text-4xl font-bold bg-primary px-3 py-1 rounded-lg">
              Desenvolvedor FrontEnd
            </h1>
          </div>
          <div className="pt-4">
            <span className="flex text-justify px-7">
              Meu nome é Richard da Silva Reis, tenho 21 aos e sou desenvolvedor
              FrontEnd com 3 meses de experiência em criar websites responsivos
              e amigáveis. Atualmente estou trabalhando com React, Next e
              TailwindCSS
            </span>
          </div>
          <div className="mt-5 ml-7 flex text-xl">
            <a href="https://github.com/richarddsr21" target="_blank">
              <FaGithub className="mr-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-reis-b904392ab/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <img
          className="mt-16 rounded-full shadow-primary shadow-md lg:"
          src="/image/image-hero/minha-foto.jpg"
          alt="Minha Imagem"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};
