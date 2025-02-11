import { withClient } from "~/shared/api";
import { createResource } from "solid-js";
import type { IAbout, IContentfulResource } from "~/shared/types";
import DotsGrid from "~/modules/mainModule/sections/about/dotsGrid";

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

    return (
        <section class="relative">
            <div class="relative z-2">
                <h1>{information()?.title}</h1>
                <h2>{information()?.subTitle}</h2>
                <p>{information()?.aboutText}</p>
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
