import { getProjects } from "@/sanity/sanity-utils";
// import Header from "./components/Header";
import Interaction from "./components/Interaction";
import Gallery from "./components/Gallery";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <Interaction />
      <Gallery />
      {projects.map((project) => (
        <div key={project._id}></div>
      ))}
    </div>
  );
}
