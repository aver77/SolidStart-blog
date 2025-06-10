import type { Component, JSX } from "solid-js";
import { Meta, Title } from "@solidjs/meta";

import { BASE_HOST } from "~/shared/api";

interface ILayout {
    title: string;
    description: string;
    keywords: string;
    children: JSX.Element;
}

const Layout: Component<ILayout> = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
            <Meta name="description" content={props.description} />
            <Meta name="keywords" content={props.keywords} />
            <Meta property="og:type" content="website" />
            <Meta property="og:title" content={props.title} />
            <Meta property="og:site_name" content="Personal blog of Senior Frontend Developer Nikita" />
            <Meta property="og:url" content={BASE_HOST} />
            <Meta
                property="og:description"
                content={
                    "Personal blog of Senior Frontend Developer Nikita. It's about modern programming, " +
                    "technologies, tools, and thoughts about the future of the industry. An overview of new technologies, " +
                    "libraries, approaches and tools in the IT world. Follow the trends that are not distinguished from the industry."
                }
            />
            <Meta property="og:image" content={`${BASE_HOST}/blogImage.png`} />
            <Meta property="twitter:card" content="summary_large_image" />
            {props.children}
        </>
    );
};

export default Layout;
