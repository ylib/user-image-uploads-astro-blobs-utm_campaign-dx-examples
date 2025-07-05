import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;
  const {method, body, data} = request;

  return new Response(JSON.stringify({method, body, data}));
};

export const config = {
  method: ['GET','PUT'],
  path: "/api/:gang/:item"
};
