import type { Component, JSX } from "solid-js";
import { Title } from "@solidjs/meta";

interface ILayout {
    title: string;
    children: JSX.Element;
}

const Layout: Component<ILayout> = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
            {props.children}
        </>
    );
};

export default Layout;
