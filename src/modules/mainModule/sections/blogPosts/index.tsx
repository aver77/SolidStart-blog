import { createResource, For } from "solid-js";
import { withClient } from "~/shared/api";
import { IContentfulResource, IPost } from "~/shared/types";

import Post from "./post";

export const fetchPosts = withClient(async (client) => {
    const posts = (await client
        .getEntries({ content_type: "post" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IPost>;

    return posts?.items;
});

const BlogPosts = () => {
    const [posts] = createResource(() => fetchPosts);

    return (
        <div>
            <h2 class="text-max font-black">Posts</h2>
            <div class="flex flex-wrap gap-[20px]">
                {posts() && (
                    <For each={posts()}>
                        {(item, index) => {
                            const { fields: post } = item;

                            return <Post {...post} />;
                        }}
                    </For>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;
