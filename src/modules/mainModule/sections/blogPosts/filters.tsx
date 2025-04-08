import Input from "~/shared/ui/input";
import FilterIcon from "~/shared/assets/svg/components/filter";
import { Component, createSignal } from "solid-js";
import Dropdown from "~/components/dropdown";

interface IFilters {
    searchValue: string;
    setSearchValue: (v: string) => void;
    filtersValue: string[];
    setFiltersValue: (v: string[]) => void;
}

const Filters: Component<IFilters> = (props) => {
    const [filterDropdownOpened, setFilterDropdownOpened] = createSignal(false);

    return (
        <div class="flex mt-offset6x gap-offset6x items-center">
            <Input
                value={props.searchValue}
                handleChange={props.setSearchValue}
            />
            <div>
                <button
                    onClick={() => {
                        console.log("click", filterDropdownOpened());
                        setFilterDropdownOpened(prev => !prev)
                    }}
                    class="flex items-center gap-offsetx cursor-pointer"
                >
                    <FilterIcon />
                    Filter
                </button>
                <Dropdown items={[]} handleChange={() => {}} opened={filterDropdownOpened()} />
            </div>
        </div>
    );
};

export default Filters;
