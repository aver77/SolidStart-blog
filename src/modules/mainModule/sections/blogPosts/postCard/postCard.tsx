import { type Component, For, JSX } from "solid-js";
import type { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip/chip";
import cx from "classnames";
import Book from "~/shared/assets/svg/components/book";
import { useNavigate } from "@solidjs/router";

export interface IPostCard extends IPost {
    wrapperClass?: string;
}

interface IPostCardWithSubtitleClass extends IPostCard {
    subtitleClass?: string;
}

export const PostCard: Component<IPostCardWithSubtitleClass> = ({
    wrapperClass,
    subtitleClass,
    ...post
}) => {
    const { id, title, subTitle, text, image, minutesRead, tags } = post;

    const navigate = useNavigate();

    return (
        <div
            class={cx("cursor-pointer", wrapperClass)}
            onClick={() => navigate(`/blog-post/${id}`)}
        >
            {image && (
                <div class="aspect-[16/9]">
                    <img
                        class="w-full h-full rounded-md"
                        src={image.fields.file.url}
                        alt={image.fields.file.fileName}
                    />
                </div>
            )}
            <div class="flex flex-wrap gap-offset2x my-offset4x">
                <For each={tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="font-bold text-xl">{title}</h1>
            <h2
                class={cx(
                    "my-offset3x text-ellipsis overflow-hidden",
                    subtitleClass
                )}
            >
                {subTitle}
            </h2>
            <span class="flex items-center gap-offset2x text-xs text-lightGray">
                <Book />
                <span>{minutesRead} min. read</span>
            </span>
        </div>
    );
};
