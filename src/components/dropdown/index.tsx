import Checkbox from "~/shared/ui/checkbox";
import { Component, Index, type JSX } from "solid-js";

export interface IDropdownItem {
    name: string;
    selected: boolean;
}

interface IDropdown extends JSX.HTMLAttributes<HTMLDivElement> {
    items: IDropdownItem[];
    handleChange: (v: IDropdownItem[]) => void;
    opened: boolean;
}

const Dropdown: Component<IDropdown> = (props) => {
    return (
        <>
            {props.opened && (
                <div
                    id="dropdownBgHover"
                    class="z-10 hidden w-48 bg-white rounded-lg shadow-sm dark:bg-gray-700"
                >
                    <ul
                        class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownBgHoverButton"
                    >
                        <Index each={props.items}>
                            {(item, index) => {
                                return (
                                    <li>
                                        <Checkbox
                                            label={item.name}
                                            idx={index}
                                        />
                                    </li>
                                );
                            }}
                        </Index>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Dropdown;
