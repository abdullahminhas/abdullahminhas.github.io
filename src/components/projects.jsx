import React, { useState } from "react";
import { ProjectCard } from "./project-card";
import RadioButton from "./radio-button";
import BlurFade from "./magicui/blur-fade";
import { RadioGroup } from "./ui/radio-group";

const Projects = ({ DATA, BLUR }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? DATA.projects
      : DATA.projects.filter((project) => project.filter === filter);

  return (
    <div className="flex flex-col gap-4">
      <BlurFade delay={BLUR * 11}>
        <RadioGroup
          defaultValue="all"
          className="flex"
          value={filter}
          onValueChange={(val) => setFilter(val)}
        >
          <RadioButton id="r1" value="all" label="All" />
          <RadioButton id="r2" value="shopify" label="Shopify" />
          <RadioButton id="r3" value="next" label="Next.js" />
          {/* <RadioButton id="r4" value="c++" label="C++" /> */}
        </RadioGroup>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA &&
          filteredProjects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
      </div>
    </div>
  );
};

export default Projects;
