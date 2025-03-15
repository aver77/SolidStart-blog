import { createResource, For } from "solid-js";
import { withClient } from "~/shared/api";
import { IContentfulResource, IPost } from "~/shared/types";

import PostCard from "./postCard";
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
                <div class="mt-offset8x grid grid-cols-3 gap-y-offset8x gap-x-offset4x">
                    <For each={posts()}>
                        {(post) => {
                            return (
                                <PostCard {...post.fields} id={post.sys.id} />
                            );
                        }}
                    </For>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
