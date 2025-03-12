import { Component, For } from "solid-js";
import { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip";

import cx from "classnames";

const Post: Component<IPost & { wrapperClass?: string }> = ({
    title,
    subTitle,
    text,
    image,
    minutesRead,
    tags,
    wrapperClass
}) => {
    return (
        <div class={cx("min-h-[200px] flex-1", wrapperClass)}>
            <div class="aspect-[16/9]">
                <img
                    class="w-full h-full"
                    src={image.fields.file.url}
                    alt={image.fields.title}
                />
            </div>
            <div class="flex flex-wrap gap-offset2x">
                <For each={tags}>{(tag) => <Chip text={tag} />}</For>
            </div>
            <h1 class="font-bold">{title}</h1>
            <h2>{subTitle}</h2>
            <span class="text-xs text-lightGray">Min. read: {minutesRead}</span>
            {/*<div innerHTML={documentToHtmlString(text)} />*/}
        </div>
    );
};

export default Post;
