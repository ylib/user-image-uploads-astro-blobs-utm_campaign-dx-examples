import { getStore } from "@netlify/blobs";
import { Context } from "@netlify/functions";
import { v4 as uuid } from "uuid";

export default async (req, context) => {
  // Expecting the request body to contain JSON.
  const data = await req.json();

  // Generating a unique key for the entry.
  const key = uuid();
  
  const uploads = getStore("json-uploads");
  await uploads.setJSON(key, data, {
    metadata: { country: context.geo.country.name }
  });

  return new Response("Submission saved");
};
