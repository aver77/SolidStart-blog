import { Component, type JSX } from "solid-js";

interface ICheckboxWithLabel {
    label: string;
    idx: string | number;
}

interface ICheckboxWithoutLabel {
    label?: never;
    idx?: never;
}

interface ICheckboxBase extends JSX.HTMLAttributes<HTMLDivElement> {
    wrapperClass?: string
}

type ICheckbox = ICheckboxBase & (
    | ICheckboxWithLabel
    | ICheckboxWithoutLabel
);

const Checkbox: Component<ICheckbox> = (props) => {
    const id = props.idx ? `checkbox-item-${props.idx}` : undefined;

    return (
        <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
                id={id}
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            {props.label && (
                    <label
                        for={id}
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                    >
                        {props.label}
                    </label>
                )
            }
        </div>
    );
};

export default Checkbox;
