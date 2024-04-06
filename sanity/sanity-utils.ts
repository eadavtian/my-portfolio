import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from "./schemas/config/client-config";

export async function getProjects(): Promise<Project[]> {
  const timestamp = new Date().toISOString();
  const query = `*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        } // ${timestamp}`;

  return createClient(clientConfig).fetch(query);
}

export async function getProject(slug: string): Promise<Project> {
  const timestamp = new Date().toISOString();
  const query = `*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
            
        } // ${timestamp}`;

  const params = { slug };

  return createClient(clientConfig).fetch(query, params);
}
