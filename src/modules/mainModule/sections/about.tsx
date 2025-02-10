import { withClient } from "~/shared/api";
import { createResource } from "solid-js";
import type { IAbout, IContentfulResource } from "~/shared/types";

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
        <div>
            <h1>Hey, I,m Nikita!</h1>
            <h2>I'm {information()?.years}+ years Frontend Developer</h2>
            <p>{information()?.aboutText}</p>
            <img
                width={"290px"}
                height={"290px"}
                src={information()?.avatar.fields.file.url}
                alt={information()?.avatar.fields.title}
            />
        </div>
    );
};

export default About;
