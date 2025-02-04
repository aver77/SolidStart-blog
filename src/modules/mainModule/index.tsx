import Counter from '~/components/Counter';
import { createClient } from 'contentful';
import { createResource, For } from 'solid-js';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

export const fetchPosts = async () => {
    const client = createClient({
        space: process.env.space!,
        accessToken: process.env.accessToken!
    });

    const posts = await client
        .getEntries({ content_type: 'post' })
        .catch(() => ({
            items: []
        }));

    return posts!.items;
};

const MainModule = () => {
    const [posts] = createResource(fetchPosts);

    return (
        <>
            <h1>Hello world!</h1>
            <Counter />
            <p>
                <a href="https://start.solidjs.com" target="_blank">
                    start.solidjs.com
                </a>{' '}
                to learn how to build SolidStart apps.
            </p>
            {posts() && (
                <For each={posts()}>
                    {(item, index) => {
                        const {
                            fields: { title, text }
                        } = item;

                        return (
                            <div>
                                <h1>{title as string}</h1>
                                <div
                                    innerHTML={documentToHtmlString(
                                        text as Document
                                    )}
                                />
                            </div>
                        );
                    }}
                </For>
            )}
        </>
    );
};

export default MainModule;
