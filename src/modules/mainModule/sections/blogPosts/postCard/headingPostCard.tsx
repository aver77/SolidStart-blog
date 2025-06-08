import { Component, splitProps } from "solid-js";

import cx from "classnames";

import { IPostCard, PostCard } from "./postCard";

import classes from "./postCard.module.css";

const HeadingPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCard
            {...restProps}
            wrapperClass={cx(localProps.wrapperClass, `
              ipadLg:min-w-[300px]
              phones:min-w-auto
              min-w-[400px]
            `)}
            subtitleClass={classes.headingSubtitleClass}
        />
    );
};

export default HeadingPostCard;
