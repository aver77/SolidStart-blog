import type { Component, JSX } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { getJsonLD } from "~/shared/utils/getJsonLD";

interface ILayout {
    title: string;
    description: string;
    keywords: string;
    children: JSX.Element;
}

const BASE_HOST = process.env.BASE_HOST! || import.meta.env.VITE_BASE_HOST!;

const Layout: Component<ILayout> = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
            <Meta name="description" content={props.description} />
            <Meta name="keywords" content={props.keywords} />
            <Meta property="og:type" content="website" />
            <Meta property="og:title" content="NW Blog | Everything about Frontend, technologies, IT trends and guides" />
            <Meta property="og:url" content={BASE_HOST} />
            <Meta
                property="og:description"
                content={
                    "Personal blog of Senior Frontend Developer Nikita. It's about modern programming, " +
                    "technologies, tools, and thoughts about the future of the industry. An overview of new technologies, " +
                    "libraries, approaches and tools in the IT world. Follow the trends that are not distinguished from the industry."
                }
            />
            <Meta property="og:image" content={`${BASE_HOST}/public/assets/blogImage.png`} />
            {props.children}
            {getJsonLD()}
        </>
    );
};

export default Layout;
