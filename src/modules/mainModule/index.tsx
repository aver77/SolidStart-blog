import { createResource, For } from "solid-js";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { withClient } from "~/shared/api";

import AboutSection from "~/modules/mainModule/sections/about";
import type { IContentfulResource, IPost } from "~/shared/types";
import BlogPosts from "~/modules/mainModule/sections/blogPosts";

export const fetchPosts = withClient(async (client) => {
    const posts = (await client
        .getEntries({ content_type: "post" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IPost>;

    console.log(posts?.items[0].fields);

    return posts?.items;
});

const MainModule = () => {
    const [posts] = createResource(() => fetchPosts);

    return (
        <>
            <AboutSection />
            <BlogPosts />
        </>
    );
};

export default MainModule;
