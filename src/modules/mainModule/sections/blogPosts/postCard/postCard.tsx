import { type Component, For, splitProps, Show } from "solid-js";
import type { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip/chip";
import cx from "classnames";
import Book from "~/shared/assets/svg/components/book";
import { useNavigate } from "@solidjs/router";
import { getReadingTime } from "~/shared/utils/getReadingTime";

export interface IPostCard extends IPost {
    wrapperClass?: string;
}

interface IPostCardWithSubtitleClass extends IPostCard {
    subtitleClass?: string;
}

export const PostCard: Component<IPostCardWithSubtitleClass> = (_props) => {
    const [props, post] = splitProps(_props, ["wrapperClass", "subtitleClass"]);
    const { id, title, subTitle, text, image, tags } = post;

    const navigate = useNavigate();

    return (
        <div
            class={cx("cursor-pointer duration-300", props.wrapperClass)}
            onClick={() => navigate(`/blog-post/${id}`)}
        >
            <Show when={image}>
                <div class="aspect-[16/9]">
                    <img
                        class="w-full h-full rounded-md"
                        src={image.fields.file.url}
                        alt={image.fields.file.fileName}
                    />
                </div>
            </Show>
            <div class="flex flex-wrap gap-offset2x my-offset4x">
                <For each={tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="font-bold text-xl">{title}</h1>
            <h2
                class={cx(
                    "my-offset3x text-ellipsis overflow-hidden",
                    props.subtitleClass
                )}
            >
                {subTitle}
            </h2>
            <span class="flex items-center gap-offset2x text-xs text-lightGray light:text-warmBrown">
                <Book />
                <span>{getReadingTime(text)} min. read</span>
            </span>
        </div>
    );
};
