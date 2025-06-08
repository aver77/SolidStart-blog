import { Component, createSignal } from "solid-js";

import Dropdown, { type IDropdownItem } from "~/components/dropdown";
import FilterIcon from "~/shared/assets/svg/components/filter";
import Input from "~/shared/ui/input";

interface IFilters {
    searchValue: string;
    setSearchValue: (v: string) => void;
    filtersValue: IDropdownItem[];
    setFiltersValue: (v: IDropdownItem[]) => void;
}

const Filters: Component<IFilters> = (props) => {
    let dropdownContainerRef: HTMLDivElement | undefined;

    const [filterDropdownOpened, setFilterDropdownOpened] = createSignal(false);

    return (
        <div class={`
          mt-offset6x gap-offset6x flex items-center
          phones:gap-offset3x
        `}>
            <Input value={props.searchValue} handleChange={props.setSearchValue} />
            <div ref={dropdownContainerRef} class="relative">
                <button
                    onClick={() => {
                        setFilterDropdownOpened((prev) => !prev);
                    }}
                    class="gap-offsetx flex cursor-pointer items-center"
                >
                    <FilterIcon />
                    <span class="phones:hidden">Filter</span>
                </button>
                <Dropdown
                    dropdownContainerRef={() => dropdownContainerRef!}
                    items={props.filtersValue}
                    onChangeItems={props.setFiltersValue}
                    opened={filterDropdownOpened()}
                    setOpened={setFilterDropdownOpened}
                    wrapperClass={"absolute right-[0px] top-[56px] ipadSm:w-fit ipadSm:p-offset4x ipadSm:gap-offset3x"}
                />
            </div>
        </div>
    );
};

export default Filters;
