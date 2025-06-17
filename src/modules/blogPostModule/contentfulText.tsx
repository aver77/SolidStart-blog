import type { Component } from "solid-js";

import cx from "classnames";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

interface IContentfulText {
    text: Document;
}

const ContentfulText: Component<IContentfulText> = (props) => {
    return (
        <div
            class={cx("contentful-text", `
              gap-offset8x flex flex-col
              phones:gap-offset6x
            `)}
            innerHTML={documentToHtmlString(props.text)}
        />
    );
};

export default ContentfulText;