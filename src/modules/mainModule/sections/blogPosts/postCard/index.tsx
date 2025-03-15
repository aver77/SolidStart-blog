import { type Component, createSignal, For } from "solid-js";
import type { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip";
import cx from "classnames";
import Book from "~/shared/assets/svg/components/book";
import { useNavigate } from "@solidjs/router";

export interface IPostCard extends IPost {
    wrapperClass?: string;
}

const PostCard: Component<IPostCard> = (postCard) => {
    const { wrapperClass, ...post } = postCard;
    const { id, title, subTitle, text, image, minutesRead, tags } = post;

    const navigate = useNavigate();

    return (
        <div
            class={cx("cursor-pointer", wrapperClass)}
            onClick={() => {
                navigate(`/blog/${id}`, { state: post });
                console.log("NAGIVATE!!!");
            }}
        >
            <div class="aspect-[16/9]">
                <img
                    class="w-full h-full rounded-md"
                    src={image.fields.file.url}
                    alt={image.fields.title}
                />
            </div>
            <div class="flex flex-wrap gap-offset2x my-offset4x">
                <For each={tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="font-bold text-xl">{title}</h1>
            <h2 class="my-offset3x">{subTitle}</h2>
            <span class="flex items-center gap-offset2x text-xs text-lightGray">
                <Book />
                <span>{minutesRead} min. read</span>
            </span>
            {/*<div innerHTML={documentToHtmlString(text)} />*/}
        </div>
    );
};

export default PostCard;
