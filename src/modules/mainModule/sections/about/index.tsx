import { withClient } from "~/shared/api";
import { createResource } from "solid-js";
import type { IAbout, IContentfulResource } from "~/shared/types";
import DotsGrid from "~/modules/mainModule/sections/about/dotsGrid";

import Button from "~/shared/ui/button";
import DottedText from "~/shared/ui/dottedText";

export const fetchAbout = withClient(async (client) => {
    const about = (await client
        .getEntries({ content_type: "information" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IAbout>;

    return about?.items?.[0]?.fields || {};
});

const About = () => {
    const [information] = createResource(() => fetchAbout);

    const getTitle = () => {
        let title = information()?.title || "";

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
        const subTitle = information()?.subTitle || "";
        const sep = " ";

        const splittedSubTitle = subTitle.split(sep);
        const profession = splittedSubTitle.splice(-2);

        return (
            <p class="text-3xl font-black">
                <span>{splittedSubTitle.join(sep) + sep}</span>
                <span class="text-gold">{profession.join(sep)}</span>
            </p>
        );
    };

    return (
        <section class="relative p-highest">
            <div class="relative z-2 flex gap-offset8x">
                <div class="flex flex-col gap-offset8x">
                    <div>
                        {getTitle()}
                        {getSubTitle()}
                    </div>
                    <p>{information()?.aboutText}</p>
                    <div class="h-fit w-fit">
                        <Button>Let's go!</Button>
                    </div>
                </div>
                <img
                    width={"290px"}
                    height={"290px"}
                    src={information()?.avatar.fields.file.url}
                    alt={information()?.avatar.fields.title}
                />
            </div>
            <DotsGrid />
        </section>
    );
};

export default About;
