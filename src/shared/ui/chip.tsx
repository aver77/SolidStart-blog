interface IChip {
    text: string;
}

const Chip = ({ text }: IChip) => {
    return <span>{text}</span>;
};

export default Chip;
