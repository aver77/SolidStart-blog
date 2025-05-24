import { Component, For, Index, type JSX, onCleanup, onMount } from "solid-js";
import cx from "classnames";
import OutlinedChip from "~/shared/ui/chip/outlinedChip";

export interface IDropdownItem {
    name: string;
    selected: boolean;
}

interface IDropdown extends JSX.HTMLAttributes<HTMLDivElement> {
    dropdownContainerRef: () => HTMLDivElement;
    items: IDropdownItem[];
    onChangeItems: (v: IDropdownItem[]) => void;
    opened: boolean;
    setOpened: (v: boolean) => void;
    wrapperClass?: string;
}

const Dropdown: Component<IDropdown> = (props) => {
    onMount(() => {
        const clickAwayListener = (event: MouseEvent | TouchEvent) => {
            if (
                !props.opened ||
                !props ||
                props.dropdownContainerRef().contains(event.target as Node)
            ) {
                return;
            }

            props.setOpened(false);
        };

        document.addEventListener("mousedown", clickAwayListener);

        onCleanup(() => {
            document.removeEventListener("mousedown", clickAwayListener);
        });
    });

    const onChipClick = (index: number) => {
        const newItems = [...props.items];
        newItems[index] = {
            ...newItems[index],
            selected: !newItems[index].selected
        };

        props.onChangeItems(newItems);
    };

    return (
        <>
            {props.opened && (
                <div
                    class={cx(
                        "z-2 rounded-md w-[500px] max-h-[200px] flex flex-wrap overflow-y-auto bg-gray light:bg-warmDWhite p-offset5x gap-offset5x shadow-lg",
                        props.wrapperClass
                    )}
                >
                    <Index each={props.items}>
                        {(item, index) => {
                            return (
                                <OutlinedChip
                                    selected={item().selected}
                                    text={item().name}
                                    onClick={() => onChipClick(index)}
                                />
                            );
                        }}
                    </Index>
                </div>
            )}
        </>
    );
};

export default Dropdown;
