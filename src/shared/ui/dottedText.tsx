import type { Component, JSX } from "solid-js";

interface IDottedText {
    children: JSX.Element;
}

const DottedText: Component<IDottedText> = ({ children }) => {
    return (
        <>
            {children}
            <span class="text-gold">.</span>
        </>
    );
};

export default DottedText;
