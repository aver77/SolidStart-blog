import { useNavigate } from "@solidjs/router";

import ThemeSun from "~/shared/assets/svg/components/themeSun";
import GitHub from "~/shared/assets/svg/components/gitHub";
import LinkedIn from "~/shared/assets/svg/components/linkedIn";
import CodeWars from "~/shared/assets/svg/components/codewars";

import { checkIsLightTheme, toggleTheme } from "~/shared/providers/withTheme";
import ThemeMoon from "~/shared/assets/svg/components/themeMoon";
import { createSignal, onCleanup, onMount } from "solid-js";

const Header = () => {
    const navigate = useNavigate();
    const [isLightTheme, setIsLightTheme] = createSignal(false);

    onMount(() => {
        setIsLightTheme(checkIsLightTheme());
    });

    onMount(() => {
        const observer = new MutationObserver(() => {
            setIsLightTheme(checkIsLightTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        onCleanup(() => observer.disconnect());
    });

    return (
        <header class="h-headerHeight px-offset8x flex justify-between bg-black light:bg-warmWhite sticky top-0 z-10">
            <div class="flex justify-between gap-offset8x">
                <div class="h-full flex justify-center items-center cursor-pointer">
                    <div
                        onClick={() => navigate("/")}
                        class="bg-gray light:bg-warmBrown light:text-white size-[40px] font-curve text-2xl rounded-md flex justify-center items-center duration-300"
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
                {isLightTheme() ? (
                    <ThemeMoon onClick={toggleTheme} />
                ) : (
                    <ThemeSun onClick={toggleTheme} />
                )}
            </div>
        </header>
    );
};

export default Header;
