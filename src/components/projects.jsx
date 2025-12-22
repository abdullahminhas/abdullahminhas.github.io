import React, { useState, useEffect, useMemo } from "react";
import { ProjectCard } from "./project-card";
import RadioButton from "./radio-button";
import BlurFade from "./magicui/blur-fade";
import { RadioGroup } from "./ui/radio-group";
import ProjectPagination from "./project-pagination";
import { Badge } from "./ui/badge";

const Projects = ({ DATA, BLUR }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? DATA.projects
      : DATA.projects.filter((project) => project.filter === filter);
  }, [DATA.projects, filter]);

  const [itemsToShow, setItemsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  //   showing 4 projects
  const ITEMS_PER_PAGE = 4;
  const totalItems = filteredProjects.length; // Total number of items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    // Assuming you have a list of items
    setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
    setItemsToShow([...filteredProjects].slice(startIndex, endIndex));
  }, [filteredProjects, startIndex, endIndex, totalItems]);

  return (
    <div className="flex flex-col gap-4">
      <BlurFade delay={BLUR * 11}>
        <div className="flex justify-between">
        <RadioGroup
          defaultValue="all"
          className="flex"
          value={filter}
          onValueChange={(val) => setFilter(val)}
        >
          <RadioButton id="r1" value="all" label="All" />
          <RadioButton id="r2" value="shopify" label="Shopify" />
          <RadioButton id="r3" value="next" label="Next.js" />
          <RadioButton id="r4" value="c++" label="C++" />
        </RadioGroup>
        <Badge variant="secondary">{DATA.projects.length}</Badge>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA &&
          itemsToShow.map((project, id) => (
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
      {/* we can show the pagination once we have more than 4 projects */}
      {totalItems > ITEMS_PER_PAGE ? (
        <div className="mt-3">
        <ProjectPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        </div>
      ) : null}
    </div>
  );
};

export default Projects;
