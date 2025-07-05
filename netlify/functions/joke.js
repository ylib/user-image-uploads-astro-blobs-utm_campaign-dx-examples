import { getStore } from "@netlify/blobs";
import { Config, Context } from "@netlify/functions";

export default async (request, context) => {
  const { gang, item } = context.params;
  const {method} = request;
  const store = getStore(gang);

  if (method === 'PUT') {
    const data = await request.json();
    await store.set(item, JSON.stringify(data));
    return new Response(JSON.stringify({gang, item, data}));
  } else {
    const data = await store.get(item);
    return new Response(JSON.stringify({gang, item, data}));
  }
};

export const config = {
  method: ['GET','PUT'],
  path: "/api/:gang/:item"
};
