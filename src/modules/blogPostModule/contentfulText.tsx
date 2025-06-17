import type { Component } from "solid-js";

import cx from "classnames";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

interface IContentfulText {
    text: Document;
}

const ContentfulText: Component<IContentfulText> = (props) => {
    const getContentfulText = () => {
        if (!props.text) {
            return null;
        }

        const wrapper = document.createElement("div");
        wrapper.className = cx("contentful-text", `
          gap-offset8x flex flex-col
          phones:gap-offset6x
        `);
        wrapper.innerHTML = documentToHtmlString(props.text);

        const links = wrapper.querySelectorAll("a");

        links.forEach((link) => {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noreferrer noopener");
        });

        return wrapper;
    };

    return <>{getContentfulText()}</>;
};

export default ContentfulText;