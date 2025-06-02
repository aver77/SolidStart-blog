import { fetchAbout } from "~/shared/api";
import DotsGrid from "~/modules/mainModule/sections/about/dotsGrid";

import Button from "~/shared/ui/button";
import DottedText from "~/shared/ui/dottedText";
import { createQuery } from "@tanstack/solid-query";
import { Component, Show } from "solid-js";
import { useTheme } from "~/shared/hooks/useTheme";

interface IAbout {
    postsRef: () => HTMLElement;
}

const About: Component<IAbout> = (props) => {
    const { isLightTheme } = useTheme(false);

    const about = createQuery(() => ({
        queryKey: ["about"],
        queryFn: fetchAbout,
        staleTime: 1000 * 60 * 120,
        ssr: true,
    }));

    const getTitle = () => {
        let title = about?.data?.title || "";

        if (title.at(-1) === ".") {
            title = title.slice(0, -1);
        }

        return (
            <h1 class="text-max font-black">
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
            <p class="text-3xl font-black duration-300">
                <span>{splittedSubTitle.join(sep) + sep}</span>
                <span class="text-gold light:text-warmGold">
                    {profession.join(sep)}
                </span>
            </p>
        );
    };

    return (
        <section class="relative p-highest">
            <div class="relative z-2 flex gap-offset8x">
                <div class="flex flex-col gap-offset8x duration-300">
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
                <Show when={!isLightTheme() && about?.data?.avatar}>
                    <img
                        width={"290px"}
                        height={"290px"}
                        src={about.data?.avatar.fields.file.url}
                        alt={about.data?.avatar.fields.file.fileName}
                    />
                </Show>
                <Show when={isLightTheme() && about?.data?.lightAvatar}>
                    <img
                        width={"290px"}
                        height={"290px"}
                        src={about.data?.lightAvatar?.fields.file.url}
                        alt={about.data?.lightAvatar?.fields.file.fileName}
                    />
                </Show>
            </div>
            <DotsGrid />
        </section>
    );
};

export default About;
