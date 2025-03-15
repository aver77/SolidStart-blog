import Input from "~/shared/ui/input";
import FilterIcon from "~/shared/assets/svg/components/filter";
import { createSignal } from "solid-js";

const Filters = () => {
    const [inputValue, setInputValue] = createSignal("");

    return (
        <div class="flex mt-offset6x gap-offset6x items-center">
            <Input value={inputValue} handleChange={setInputValue} />
            <button class="flex items-center gap-offsetx cursor-pointer">
                <FilterIcon />
                Filter
            </button>
        </div>
    );
};

export default Filters;
