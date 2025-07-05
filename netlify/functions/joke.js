import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;

  return new Response(JSON.stringify(context));
};

export const config = {
  path: "/api/:gang/:item"
};
