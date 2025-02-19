import { Component } from "solid-js";

interface IChip {
    text: string;
}

const Chip: Component<IChip> = ({ text }) => {
    return <span>{text}</span>;
};

export default Chip;
