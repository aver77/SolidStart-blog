import { createClient } from "contentful";

export const getClient = () => {
    return createClient({
        space: process.env.VITE_SPACE! || import.meta.env.VITE_SPACE!,
        accessToken:
            process.env.VITE_ACCESS_TOKEN! || import.meta.env.VITE_ACCESS_TOKEN!
    });
};
