import type { IContentfulResourceFields, IPost } from "~/shared/types";
import type { Component } from "solid-js";
import { For, Index } from "solid-js";
import Post from "~/modules/mainModule/sections/blogPosts/post/index";
import { createGroupedArray } from "~/shared/utils/arrays";

interface IPostGroup {
    posts: IContentfulResourceFields<IPost>[];
}

const PostGroup: Component<IPostGroup> = ({ posts }) => {
    // проставить 1, 2, 3 в зависимости от размера экрана
    const groupedPosts = createGroupedArray(posts, 3);

    const renderPostGroup = () => {
        let isStartedWithHugePost = false;
        const withHugePost = posts.length > 3;

        return (
            <For each={groupedPosts}>
                {(posts) => {
                    isStartedWithHugePost = !isStartedWithHugePost;
                    return (
                        <PostsLine
                            posts={posts}
                            isStartedWithHugePost={
                                withHugePost ? isStartedWithHugePost : null
                            }
                        />
                    );
                }}
            </For>
        );
    };

    return renderPostGroup();
};

type IPostsLine = {
    posts: IContentfulResourceFields<IPost>[];
    isStartedWithHugePost: boolean | null;
};

const PostsLine: Component<IPostsLine> = ({ posts, isStartedWithHugePost }) => {
    const renderPost = (post: IPost, index: number) => {
        switch (isStartedWithHugePost) {
            case true: {
                //первый пост
                if (index === 0) {
                    return <Post {...post} wrapperClass={"grow-3"} />; // большой пост
                }

                return <Post {...post} />;
            }
            case false: {
                //последний пост
                if (index === posts.length - 1) {
                    return <Post {...post} wrapperClass={"grow-3"} />; // большой пост
                }

                return <Post {...post} />;
            }
            case null:
            default: {
                return <Post {...post} />;
            }
        }
    };

    return (
        <div class="w-full flex items-start">
            <Index each={posts}>
                {(post, index) => renderPost(post().fields, index)}
            </Index>
        </div>
    );
};

export default PostGroup;
