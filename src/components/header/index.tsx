import { For, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { SocialLinks } from "~/components/header/defaultValues";
import ThemeMoon from "~/shared/assets/svg/components/themeMoon";
import ThemeSun from "~/shared/assets/svg/components/themeSun";
import { useTheme } from "~/shared/hooks/useTheme";
import { toggleTheme } from "~/shared/providers/withTheme";

const Header = () => {
    const navigate = useNavigate();
    const { isLightTheme } = useTheme(false);

    return (
        <header class={`
          h-headerHeight px-offset8x bg-dark sticky top-[0px] z-10 flex
          justify-between
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
                    <For each={SocialLinks}>
                        {(socialItem) =>
                            <a href={socialItem.link} target="_blank" rel="noreferrer noopener">
                                {socialItem.icon}
                            </a>
                        }
                    </For>
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
