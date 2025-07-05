import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;
  const {method} = request;

  if (method === 'PUT') {
    const data = await request.json();
    return new Response(JSON.stringify({method, data}));
  } else {
    return new Response(JSON.stringify({gang, item}));
  }
};

export const config = {
  method: ['GET','PUT'],
  path: "/api/:gang/:item"
};
