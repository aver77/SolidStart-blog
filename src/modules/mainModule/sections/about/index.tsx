import { fetchAbout } from "~/shared/api";
import DotsGrid from "~/modules/mainModule/sections/about/dotsGrid";

import Button from "~/shared/ui/button";
import DottedText from "~/shared/ui/dottedText";
import { createQuery } from "@tanstack/solid-query";

const About = () => {
    const about = createQuery(() => ({
        queryKey: ["about"],
        queryFn: fetchAbout,
        staleTime: 1000 * 60 * 120,
        ssr: true
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
                    <p>{about?.data?.aboutText}</p>
                    <div class="h-fit w-fit">
                        <Button>Let's go!</Button>
                    </div>
                </div>
                {about?.data?.avatar && (
                    <img
                        width={"290px"}
                        height={"290px"}
                        src={about.data.avatar.fields.file.url}
                        alt={about.data.avatar.fields.file.fileName}
                    />
                )}
            </div>
            <DotsGrid />
        </section>
    );
};

export default About;
