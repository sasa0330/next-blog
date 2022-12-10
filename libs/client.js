import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "67nfziijxv",
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});