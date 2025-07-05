import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;
  const {method, httpMethod} = request;

  return new Response(JSON.stringify({method, httpMethod}));
};

export const config = {
  method: ['GET','OPTIONS','PUT'],
  path: "/api/:gang/:item"
};
