import { JSX } from "solid-js";
import { Title } from "@solidjs/meta";

import Header from "~/components/header";

interface ILayout {
    title: string;
    children: JSX.Element;
}

const Layout = ({ title, children }: ILayout) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    );
};

export default Layout;
