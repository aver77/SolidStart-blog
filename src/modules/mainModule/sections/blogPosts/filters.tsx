import Input from "~/shared/ui/input";
import FilterIcon from "~/shared/assets/svg/components/filter";
import type { Component } from "solid-js";

interface IFilters {
    searchValue: string;
    setSearchValue: (v: string) => void;
    filtersValue: string[];
    setFiltersValue: (v: string[]) => void;
}

const Filters: Component<IFilters> = (props) => {
    return (
        <div class="flex mt-offset6x gap-offset6x items-center">
            <Input
                value={props.searchValue}
                handleChange={props.setSearchValue}
            />
            <button class="flex items-center gap-offsetx cursor-pointer">
                <FilterIcon />
                Filter
            </button>
        </div>
    );
};

export default Filters;
