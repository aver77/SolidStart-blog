import type { IContentfulResourceFields, IPost } from "~/shared/types";
import type { Component } from "solid-js";
import Post from "~/modules/mainModule/sections/blogPosts/post/index";
import Line from "~/shared/ui/line";

interface IHeadingPostGroup {
    posts: IContentfulResourceFields<IPost>[];
}

const HeadingPostGroup: Component<IHeadingPostGroup> = ({ posts }) => {
    return (
        <>
            <div class="w-full flex items-start">
                <Post {...posts[0].fields} wrapperClass={"grow-3"} />
                <Post {...posts[1].fields} />
            </div>
            <Line className="my-offset6x" />
        </>
    );
};

export default HeadingPostGroup;
