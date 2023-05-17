import { techStackDetails } from "@/data";
import Image from "next/image";

const Technologies = () => {
  const {
    html,
    css,
    js,
    react,
    redux,
    next,
    tailwind,
    bootstrap,
    sass,
    vscode,
    github,
    npm,
    figma,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pb-20 ">
      <section>
        <h1 className="text-2xl dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold underline text-slate-700">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <Image src={html} title="html" alt="html" />
        <Image src={css} title="CSS" alt="CSS" />
        <Image src={js} title="JavaScript" alt="JavaScript" />
        <Image src={react} title="React" alt="React.js" />
        <Image src={redux} title="Redux" alt="Redux" />
        <Image src={next} title="Next" alt="Next.js" />
        <Image src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <Image src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <Image src={sass} title="SASS" alt="SASS" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold underline text-slate-700">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <Image
          src={vscode}
          title="Visual Studio Code"
          alt="Visual Studio Code"
        />
        <Image src={github} title="Github" alt="Github" />
        <Image src={figma} title="Figma" alt="Figma" />
        <Image src={npm} title="NPM" alt="NPM" />
      </section>
    </main>
  );
};

export default Technologies;
