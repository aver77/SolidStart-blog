import { Component, splitProps } from "solid-js";

import { IPostCard, PostCardBase } from "./postCardBase";

const HeadingPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCardBase
            {...restProps}
            wrapperClass={`
              ${localProps.wrapperClass} 
              ipadLg:min-w-[300px]
              phones:min-w-auto
              min-w-[400px]
            `}
            subtitleClass={"line-clamp-3"}
        />
    );
};

export default HeadingPostCard;
