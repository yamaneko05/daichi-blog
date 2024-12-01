import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "pq3d7zlyts",
  apiKey: process.env.MICROCMS_API_KEY!,
});
