import { createResource, For } from "solid-js";
import { withClient } from "~/shared/api";
import { IContentfulResource, IPost } from "~/shared/types";

import Post from "./post";
import Line from "~/shared/ui/line";
import DottedText from "~/shared/ui/dottedText";
import Filters from "./filters";
import HeadingPostGroup from "./post/HeadingPostGroup";
import PostGroup from "~/modules/mainModule/sections/blogPosts/post/PostGroup";

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

    const renderPostGroup = () => {
        if (!posts()) return <></>;

        if (posts()!.length <= 2) {
            return <PostGroup posts={posts()!} />;
        }

        const headingPosts = posts()!.slice(0, 2);
        const restPosts = posts()!.slice(2);

        return (
            <>
                {headingPosts && <HeadingPostGroup posts={headingPosts} />}
                {restPosts && <PostGroup posts={restPosts} />}
            </>
        );
    };

    return (
        <div class="p-highest">
            <Line>
                <h2 class="text-max font-black">
                    <DottedText>Posts</DottedText>
                </h2>
            </Line>
            <div>
                <Filters />
                <div class="mt-offset8x">{renderPostGroup()}</div>
            </div>
        </div>
    );
};

export default BlogPosts;
