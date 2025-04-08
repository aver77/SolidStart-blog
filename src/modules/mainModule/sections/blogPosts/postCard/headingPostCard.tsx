import { PostCard, IPostCard } from "./postCard";
import { Component, splitProps } from "solid-js";
import cx from "classnames";

import classes from "./postCard.module.css";

const HeadingPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCard
            {...restProps}
            wrapperClass={cx(localProps.wrapperClass, "min-w-[400px]")}
            subtitleClass={classes.headingSubtitleClass}
        />
    );
};

export default HeadingPostCard;