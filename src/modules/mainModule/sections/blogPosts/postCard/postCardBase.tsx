import { type Component, For, Show, splitProps } from "solid-js";
import { useNavigate } from "@solidjs/router";

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

export const PostCardBase: Component<IPostCardWithSubtitleClass> = (_props) => {
    const [props, post] = splitProps(_props, ["wrapperClass", "subtitleClass"]);
    const navigate = useNavigate();

    return (
        <div
            class={`cursor-pointer duration-300 ${props.wrapperClass}`}
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
            <div class={`
              gap-offset2x my-offset4x flex flex-wrap
              ipadSm:my-offset3x
            `}>
                <For each={post.tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="text-cxl font-bold">{post.title}</h1>
            <h2
                class={
                    `
                      my-offset3x overflow-hidden text-ellipsis
                      ipadSm:my-offset2x
                      ${props.subtitleClass}
                    `
                }
            >
                {post.subTitle}
            </h2>
            <span class={`
              gap-offset2x text-lightGray text-cxs flex items-center
              light:text-warmBrown
            `}>
                <Book />
                <span>{getReadingTime(post.text)} min. read</span>
            </span>
        </div>
    );
};
