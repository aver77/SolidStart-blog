import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type {Component} from "solid-js";

import type { Document } from "@contentful/rich-text-types";

import cx from "classnames";

interface IContentfulText {
    text: Document
}

const ContentfulText:Component<IContentfulText> = (props) => {
    return (
        <div
            class={cx("contentful-text", "gap-offset8x flex flex-col phones:gap-offset6x")}
            innerHTML={documentToHtmlString(props.text)}
        />
    );
};

export default ContentfulText;