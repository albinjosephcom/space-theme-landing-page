import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/jobit.png"
          title="Job It"
          description="Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location."
        />
        <ProjectCard
          src="/tripguide.png"
          title="Trip Guide"
          description="A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations."
        />
        <ProjectCard
          src="/carrent.png"
          title="Car Rent"
          description="Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
        />
      </div>
    </div>
  );
};

export default Projects;
