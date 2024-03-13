import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "k88psmbe",

  dataset: "production",

  title: "eadavtian portfolio",

  apiVersion: "12-03-2024",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
