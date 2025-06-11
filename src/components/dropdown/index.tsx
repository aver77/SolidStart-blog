import { Component, Index, type JSX, onCleanup, onMount, Show } from "solid-js";

import cx from "classnames";

import { useClickAway } from "~/shared/hooks/useClickAway";
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
    useClickAway(
        () => props.dropdownContainerRef(),
        () => props.setOpened,
        () => props.opened
    );

    const onChipClick = (index: number) => {
        const newItems = [...props.items];
        newItems[index] = {
            ...newItems[index],
            selected: !newItems[index].selected,
        };

        props.onChangeItems(newItems);
    };

    return (
        <>
            <Show when={props.opened}>
                <div
                    class={cx(
                        `
                          bg-gray p-offset5x gap-offset5x z-2 flex max-h-[200px]
                          w-[500px] flex-wrap overflow-y-auto rounded-md
                          shadow-lg
                          light:bg-warmDWhite
                        `,
                        props.wrapperClass,
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
            </Show>
        </>
    );
};

export default Dropdown;
