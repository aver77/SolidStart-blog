import { Component, splitProps } from "solid-js";

import cx from "classnames";

import { IPostCard, PostCard } from "./postCard";

const UsualPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCard
            {...restProps}
            wrapperClass={cx(localProps.wrapperClass, `
              min-h-[300px] min-w-[200px]
            `)}
            subtitleClass={"whitespace-nowrap"}
        />
    );
};

export default UsualPostCard;
