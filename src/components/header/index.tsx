import { Show } from "solid-js";
import { useNavigate } from "@solidjs/router";

import CodeWars from "~/shared/assets/svg/components/codewars";
import GitHub from "~/shared/assets/svg/components/gitHub";
import LinkedIn from "~/shared/assets/svg/components/linkedIn";
import ThemeMoon from "~/shared/assets/svg/components/themeMoon";
import ThemeSun from "~/shared/assets/svg/components/themeSun";
import { useTheme } from "~/shared/hooks/useTheme";
import { toggleTheme } from "~/shared/providers/withTheme";

const Header = () => {
    const navigate = useNavigate();
    const { isLightTheme } = useTheme(false);

    return (
        <header class={`
          h-headerHeight px-offset8x sticky top-[0px] z-10 flex justify-between
          bg-dark
          light:bg-warmWhite
          ipadSm:px-offset3x
        `}>
            <div class="gap-offset8x flex justify-between ipadSm:gap-offset6x">
                <div class={`
                  flex h-full cursor-pointer items-center justify-center
                `}>
                    <div
                        onClick={() => navigate("/")}
                        class={`
                          bg-gray font-curve text-2cxl flex size-[40px]
                          items-center justify-center rounded-md duration-300
                          light:bg-warmBrown light:text-white
                        `}
                    >
                        NW
                    </div>
                </div>
                <div class={`
                  gap-offset2x flex cursor-pointer items-center justify-center
                `}>
                    <a href="https://github.com/aver77" target="_blank" rel="noreferrer noopener">
                        <GitHub />
                    </a>
                    <a href="https://www.linkedin.com/in/nikita-averochkin/" target="_blank" rel="noreferrer noopener">
                        <LinkedIn />
                    </a>
                    <a href="https://www.codewars.com/users/aver77" target="_blank" rel="noreferrer noopener">
                        <CodeWars />
                    </a>
                </div>
            </div>
            <div class="flex cursor-pointer items-center justify-center">
                <Show
                    when={isLightTheme()}
                    fallback={<ThemeSun onClick={toggleTheme} />}
                >
                    <ThemeMoon onClick={toggleTheme} />
                </Show>
            </div>
        </header>
    );
};

export default Header;
