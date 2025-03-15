import { createClient } from "contentful";

export const getClient = () => {
    return createClient({
        space: process.env.space!,
        accessToken: process.env.accessToken!
    });
};
