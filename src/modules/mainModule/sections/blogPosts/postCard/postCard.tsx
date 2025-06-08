import { type Component, For, Show, splitProps } from "solid-js";
import { useNavigate } from "@solidjs/router";

import cx from "classnames";

import Book from "~/shared/assets/svg/components/book";
import type { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip/chip";
import { getReadingTime } from "~/shared/utils/getReadingTime";

export interface IPostCard extends IPost {
    wrapperClass?: string;
}

interface IPostCardWithSubtitleClass extends IPostCard {
    subtitleClass?: string;
}

export const PostCard: Component<IPostCardWithSubtitleClass> = (_props) => {
    const [props, post] = splitProps(_props, ["wrapperClass", "subtitleClass"]);
    const navigate = useNavigate();

    return (
        <div
            class={cx("cursor-pointer duration-300", props.wrapperClass)}
            onClick={() => navigate(`/blog-post/${post.id}`)}
        >
            <Show when={post.image}>
                <div class="aspect-[16/9]">
                    <img
                        class="h-full w-full rounded-md"
                        src={post.image.fields.file.url}
                        alt={post.image.fields.file.fileName}
                    />
                </div>
            </Show>
            <div class="gap-offset2x my-offset4x ipadSm:my-offset3x flex flex-wrap">
                <For each={post.tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="text-cxl font-bold">{post.title}</h1>
            <h2
                class={cx(
                    "my-offset3x ipadSm:my-offset2x overflow-hidden text-ellipsis",
                    props.subtitleClass,
                )}
            >
                {post.subTitle}
            </h2>
            <span class={`
              gap-offset2x text-lightGray flex items-center text-cxs
              light:text-warmBrown
            `}>
                <Book />
                <span>{getReadingTime(post.text)} min. read</span>
            </span>
        </div>
    );
};
