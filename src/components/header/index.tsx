import ThemeSun from "~/shared/assets/svg/components/themeSun";
import GitHub from "~/shared/assets/svg/components/gitHub";
import LinkedIn from "~/shared/assets/svg/components/linkedIn";
import Codewars from "~/shared/assets/svg/components/codewars";

const Header = () => {
    return (
        <header class="h-headerHeight px-offset8x flex justify-between bg-black sticky top-0 z-10">
            <div class="flex justify-between gap-offset8x">
                <div class="h-full flex justify-center items-center cursor-pointer">
                    <div class="bg-gray size-[40px] font-curve text-2xl rounded-md flex justify-center items-center">
                        NW
                    </div>
                </div>
                <div class="flex justify-center items-center gap-offset2x cursor-pointer">
                    <GitHub />
                    <LinkedIn />
                    <Codewars />
                </div>
            </div>
            <div class="flex justify-center items-center cursor-pointer">
                <ThemeSun />
            </div>
        </header>
    );
};

export default Header;
