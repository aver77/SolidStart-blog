import { createResource, For } from "solid-js";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { withClient } from "~/shared/api";

import AboutSection from "~/modules/mainModule/sections/about";
import type { IContentfulResource, IPost } from "~/shared/types";
import Chip from "~/shared/ui/chip";

export const fetchPosts = withClient(async (client) => {
    const posts = (await client
        .getEntries({ content_type: "post" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IPost>;

    console.log(posts?.items[0].fields);

    return posts?.items;
});

const MainModule = () => {
    const [posts] = createResource(() => fetchPosts);

    return (
        <>
            <AboutSection />
            <h1>Hello world!</h1>
            <p>
                <a href="https://start.solidjs.com" target="_blank">
                    start.solidjs.com
                </a>{" "}
                to learn how to build SolidStart apps.
            </p>
            {posts() && (
                <For each={posts()}>
                    {(item, index) => {
                        const {
                            fields: { title, subTitle, text, minutesRead, tags }
                        } = item;

                        return (
                            <div>
                                <h1 class="text-sky-700 font-thin uppercase">
                                    {title}
                                </h1>
                                <h2>{subTitle}</h2>
                                <div>{minutesRead}</div>
                                <For each={tags}>
                                    {(tag) => <Chip text={tag} />}
                                </For>
                                {/*<div innerHTML={documentToHtmlString(text)} />*/}
                            </div>
                        );
                    }}
                </For>
            )}
        </>
    );
};

export default MainModule;
