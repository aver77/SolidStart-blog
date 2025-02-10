import ThemeSun from "~/shared/assets/svg/components/themeSun";
import GitHub from "~/shared/assets/svg/components/gitHub";
import LinkedIn from "~/shared/assets/svg/components/linkedIn";
import Codewars from "~/shared/assets/svg/components/codewars";

const Header = () => {
    return (
        <header class="h-headerHeight px-[32px] flex justify-between bg-black">
            <div class="flex justify-between gap-[32px]">
                <div class="h-full flex justify-center items-center cursor-pointer">
                    <div class="bg-gray size-[40px] font-curve text-2xl rounded-md flex justify-center items-center">
                        NW
                    </div>
                </div>
                <div class="flex justify-center items-center gap-[8px] cursor-pointer">
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
