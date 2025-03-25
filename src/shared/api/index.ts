import { createClient } from "contentful";

export const getClient = () => {
    return createClient({
        space: process.env.SPACE! || import.meta.env.VITE_SPACE!,
        accessToken:
            process.env.ACCESS_TOKEN! || import.meta.env.VITE_ACCESS_TOKEN!
    });
};
