"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";

const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const loadedProjects = await getProjects();
      setProjects(loadedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="gallery"
      className="mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          {/* <a> */}
          <div className="aspect-w-4 aspect-h-5">
            <img
              className="mb-4 object-cover h-full"
              src={project.image}
              alt={project.name}
            />
          </div>

          {/* </a> */}
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
