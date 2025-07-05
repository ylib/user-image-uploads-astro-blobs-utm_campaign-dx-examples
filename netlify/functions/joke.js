import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { gang, item } = context.params;

  return new Response(gang, item, JSON.stringify(context));
};

export const config: Config = {
  path: "/api/:gang/:item"
};
