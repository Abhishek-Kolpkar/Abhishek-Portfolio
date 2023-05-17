import { workIcons } from "@/data";
import Image from "next/image";

const Project = ({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) => {
  const { link, github } = workIcons;

  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 border-2">
      <Image src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card px-4 py-2">
        <h1 className="dark:text-light-heading font-semibold text-lg text-cyan-700">
          {title}
        </h1>
        <h2 className="h-16 text-content pt-2 text-dark-heading dark:text-light-heading font-medium">
          About : <span className="font-light">{description}</span>
        </h2>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-6">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <Image src={link} />
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              Live Preview
            </a>
          </div>
          <div className="flex items-center">
            <Image src={github} />
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
