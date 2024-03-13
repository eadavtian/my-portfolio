import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "k88psmbe",
    dataset: "production",
    // apiVersion: "2024-03-12",
  });

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

  return client.fetch(query);
}
