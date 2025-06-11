import { Component, splitProps } from "solid-js";

import cx from "classnames";

import { IPostCard, PostCardBase } from "./postCardBase";

const UsualPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCardBase
            {...restProps}
            wrapperClass={cx(localProps.wrapperClass, `
              ipadLg:min-w-[250px]
              phones:min-w-auto
              min-h-[300px] min-w-[200px]
            `)}
            subtitleClass={"whitespace-nowrap"}
        />
    );
};

export default UsualPostCard;
