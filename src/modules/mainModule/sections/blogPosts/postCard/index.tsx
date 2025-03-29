import { type Component, For } from "solid-js";
import type { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip";
import cx from "classnames";
import Book from "~/shared/assets/svg/components/book";
import { useNavigate } from "@solidjs/router";

interface IPostCard extends IPost {
    wrapperClass?: string;
}

const PostCard: Component<IPostCard> = ({ wrapperClass, ...post }) => {
    const { id, title, subTitle, text, image, minutesRead, tags } = post;

    const navigate = useNavigate();

    return (
        <div
            class={cx(
                "cursor-pointer min-w-[200px] min-h-[300px]",
                wrapperClass
            )}
            onClick={() => navigate(`/blog-post/${id}`)}
        >
            <div class="aspect-[16/9]">
                <img
                    class="w-full h-full rounded-md"
                    src={image.fields.file.url}
                    alt={image.fields.file.fileName}
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
        </div>
    );
};

export default PostCard;
