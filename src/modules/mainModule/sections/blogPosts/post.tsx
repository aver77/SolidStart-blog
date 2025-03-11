import { Component, For } from "solid-js";
import { IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip";

const Post: Component<IPost> = ({
    title,
    subTitle,
    text,
    image,
    minutesRead,
    tags
}) => {
    return (
        <div class={"w-[200px] h-[300px]"}>
            <img
                width={"290px"}
                height={"290px"}
                src={image.fields.file.url}
                alt={image.fields.title}
            />
            <h1 class="text-sky-700 font-thin uppercase">{title}</h1>
            <h2>{subTitle}</h2>
            <div>{minutesRead}</div>
            <For each={tags}>{(tag) => <Chip text={tag} />}</For>
            {/*<div innerHTML={documentToHtmlString(text)} />*/}
        </div>
    );
};

export default Post;
