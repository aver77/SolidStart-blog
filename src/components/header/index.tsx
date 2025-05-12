import { useNavigate } from "@solidjs/router";

import ThemeSun from "~/shared/assets/svg/components/themeSun";
import GitHub from "~/shared/assets/svg/components/gitHub";
import LinkedIn from "~/shared/assets/svg/components/linkedIn";
import CodeWars from "~/shared/assets/svg/components/codewars";

import { toggleTheme } from "~/shared/providers/withTheme";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header class="h-headerHeight px-offset8x flex justify-between bg-black light:bg-white light:border-b-1 light:border-lightGray sticky top-0 z-10">
            <div class="flex justify-between gap-offset8x">
                <div class="h-full flex justify-center items-center cursor-pointer">
                    <div
                        onClick={() => navigate("/")}
                        class="bg-gray light:bg-lightestGray light:text-gray size-[40px] font-curve text-2xl rounded-md flex justify-center items-center"
                    >
                        NW
                    </div>
                </div>
                <div class="flex justify-center items-center gap-offset2x cursor-pointer">
                    <GitHub />
                    <LinkedIn />
                    <CodeWars />
                </div>
            </div>
            <div class="flex justify-center items-center cursor-pointer">
                <ThemeSun onClick={toggleTheme} />
            </div>
        </header>
    );
};

export default Header;
