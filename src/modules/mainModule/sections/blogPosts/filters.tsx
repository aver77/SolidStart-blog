import Input from "~/shared/ui/input";
import FilterIcon from "~/shared/assets/svg/components/filter";
import { Component, createSignal } from "solid-js";
import Dropdown, { type IDropdownItem } from "~/components/dropdown";

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
        <div class="flex mt-offset6x gap-offset6x items-center">
            <Input
                value={props.searchValue}
                handleChange={props.setSearchValue}
            />
            <div ref={dropdownContainerRef}
                class="relative">
                <button
                    onClick={() => {
                        setFilterDropdownOpened((prev) => !prev);
                    }}
                    class="flex items-center gap-offsetx cursor-pointer"
                >
                    <FilterIcon />
                    Filter
                </button>
                <Dropdown
                    dropdownContainerRef={() => dropdownContainerRef!}
                    items={props.filtersValue}
                    onChangeItems={props.setFiltersValue}
                    opened={filterDropdownOpened()}
                    setOpened={setFilterDropdownOpened}
                    wrapperClass={"absolute right-0 top-[56px]"}
                />
            </div>
        </div>
    );
};

export default Filters;
