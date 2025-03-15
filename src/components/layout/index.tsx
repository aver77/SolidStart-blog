import type { Component, JSX } from "solid-js";
import { Title } from "@solidjs/meta";

interface ILayout {
    title: string;
    children: JSX.Element;
}

const Layout: Component<ILayout> = (props) => {
    const { title, children } = props;

    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    );
};

export default Layout;
