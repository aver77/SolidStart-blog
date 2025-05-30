import { PostCard, IPostCard } from "./postCard";
import { Component, splitProps } from "solid-js";
import cx from "classnames";

const UsualPostCard: Component<IPostCard> = (props) => {
    const [localProps, restProps] = splitProps(props, ["wrapperClass"]);

    return (
        <PostCard
            {...restProps}
            wrapperClass={cx(
                localProps.wrapperClass,
                "min-w-[200px] min-h-[300px]"
            )}
            subtitleClass={"whitespace-nowrap"}
        />
    );
};

export default UsualPostCard;
