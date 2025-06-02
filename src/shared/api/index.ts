import { createClient } from "contentful";
import type { IContentfulResourceFields, IPost } from "~/shared/types";
import type { IAbout, IContentfulResource } from "~/shared/types";

export const getClient = () => {
    return createClient({
        space: process.env.SPACE! || import.meta.env.VITE_SPACE!,
        accessToken:
      process.env.ACCESS_TOKEN! || import.meta.env.VITE_ACCESS_TOKEN!,
    });
};

export const fetchBlogPost = async (blogId: string) => {
    const blogPost = (await getClient()
        .getEntry(blogId)
        .catch(() => ({
            fields: {},
        }))) as IContentfulResourceFields<IPost>;

    return blogPost;
};

export const fetchAbout = async () => {
    const about = (await getClient()
        .getEntries({ content_type: "information" })
        .catch(() => ({
            items: [],
        }))) as IContentfulResource<IAbout>;

    return about?.items?.[0]?.fields || {};
};
