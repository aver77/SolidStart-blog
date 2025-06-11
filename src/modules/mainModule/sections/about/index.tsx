import { Component, Show } from "solid-js";

import { createQuery } from "@tanstack/solid-query";

import DotsGrid from "~/modules/mainModule/sections/about/dotsGrid";
import { BASE_HOST, BASE_QUERY_PARAMS, fetchAbout } from "~/shared/api";
import { useTheme } from "~/shared/hooks/useTheme";
import { WithJsonLd } from "~/shared/providers/withJsonLd";
import Button from "~/shared/ui/button";
import DottedText from "~/shared/ui/dottedText";
import { getContentfulAvatar } from "~/shared/utils/getContentfulAvatar";

interface IAbout {
    postsRef: () => HTMLElement;
}

const About: Component<IAbout> = (props) => {
    const { isLightTheme } = useTheme(false);

    const about = createQuery(() => ({
        ...BASE_QUERY_PARAMS,
        queryKey: ["about"],
        queryFn: fetchAbout,
    }));

    const getTitle = () => {
        let title = about?.data?.title || "";

        if (title.at(-1) === ".") {
            title = title.slice(0, -1);
        }

        return (
            <h1 class="text-max font-black ipadLg:text-5cxl">
                <DottedText>{title}</DottedText>
            </h1>
        );
    };

    const getSubTitle = () => {
        const subTitle = about?.data?.subTitle || "";
        const sep = " ";

        const splittedSubTitle = subTitle.split(sep);
        const profession = splittedSubTitle.splice(-2);

        return (
            <p class="text-3cxl font-black duration-300 ipadLg:text-cxl">
                <span>{splittedSubTitle.join(sep) + sep}</span>
                <span class="text-gold light:text-warmGold">
                    {profession.join(sep)}
                </span>
            </p>
        );
    };

    const mainJsonLd = {
        "@type": "Blog",
        name: about?.data?.title,
        description: about?.data?.aboutText,
        url: BASE_HOST
    };

    return (
        <WithJsonLd extraJsonLd={mainJsonLd}>
            <section class={`
              p-highest relative
              ipadLg:px-offset8x
              ipadSm:px-offset3x
            `}>
                <div class="gap-offset8x relative z-2 flex">
                    <div class={"gap-offset8x flex flex-col duration-300"}>
                        <div>
                            {getTitle()}
                            {getSubTitle()}
                        </div>
                        <p>{about?.data?.aboutText}</p>
                        <div class="h-fit w-fit">
                            <Button
                                onClick={() =>
                                    props.postsRef().scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Let's go!
                            </Button>
                        </div>
                    </div>
                    <div class={`
                      ipadLg:h-[240px] ipadLg:min-h-[240px] ipadLg:max-h-[240px]
                      ipadLg:w-[240px] ipadLg:min-w-[240px] ipadLg:max-w-[240px]
                      ipadSm:hidden
                      h-[290px] max-h-[290px] min-h-[290px] w-[290px]
                      max-w-[290px] min-w-[290px]
                    `}>
                        <Show
                            when={!isLightTheme()}
                            fallback={getContentfulAvatar(about?.data, true)}
                        >
                            {getContentfulAvatar(about?.data)}
                        </Show>
                    </div>
                </div>
                <DotsGrid />
            </section>
        </WithJsonLd>
    );
};

export default About;
