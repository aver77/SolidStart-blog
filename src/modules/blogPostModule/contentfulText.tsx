import type { Component } from "solid-js";
import { onMount } from "solid-js";

import cx from "classnames";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

interface IContentfulText {
    text: Document;
}

const ContentfulText: Component<IContentfulText> = (props) => {
    let ref: HTMLDivElement | undefined;

    onMount(() => {
        if (ref) {
            const links = ref.querySelectorAll("a");

            links.forEach((link) => {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noreferrer noopener");
            });
        }
    });

    return (
        <div
            ref={ref}
            class={cx("contentful-text", `
              gap-offset8x flex flex-col
              phones:gap-offset6x
            `)}
            innerHTML={documentToHtmlString(props.text)}
        />
    );
};

export default ContentfulText;