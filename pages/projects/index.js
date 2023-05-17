import React from "react";
import Project from "@/components/Project";
import { projectDetails } from "@/data";

const Projects = () => {
  return (
    <main className="container mx-auto mb-20 px-4">
      <section>
        <h1 className="text-2xl dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-slate-700 underline">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
