import { ContentfulClientApi, createClient } from "contentful";

export const withClient = <T>(
    fn: (client: ContentfulClientApi<undefined>) => T
) => {
    const client = createClient({
        space: process.env.space!,
        accessToken: process.env.accessToken!
    });

    return fn(client);
};
