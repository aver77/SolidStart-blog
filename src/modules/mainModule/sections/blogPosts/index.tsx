import { createResource, For } from "solid-js";
import { withClient } from "~/shared/api";
import { IContentfulResource, IPost } from "~/shared/types";

import Post from "./post";
import Line from "~/shared/ui/line";
import DottedText from "~/shared/ui/dottedText";
import Filters from "./filters";

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
        <div class="p-highest">
            <Line>
                <h2 class="text-max font-black">
                    <DottedText>Posts</DottedText>
                </h2>
            </Line>
            <div>
                <Filters />
                <div class="flex flex-wrap gap-[20px] mt-offset8x">
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
        </div>
    );
};

export default BlogPosts;
