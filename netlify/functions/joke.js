import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;

  return new Response(JSON.stringify(request));
};

export const config = {
  method: "GET,PUT",
  path: "/api/:gang/:item"
};
