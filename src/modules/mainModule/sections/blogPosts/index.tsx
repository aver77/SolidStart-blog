import { Component, createMemo, createSignal, For, Index } from "solid-js";
import { getClient } from "~/shared/api";
import type { IContentfulResource, IPost } from "~/shared/types";

import { PostCard, HeadingPostCard } from "./postCard";
import Line from "~/shared/ui/line";
import DottedText from "~/shared/ui/dottedText";
import Filters from "./filters";
import { createQuery } from "@tanstack/solid-query";

interface IBlogPosts {
    postsRef: (el: HTMLHeadingElement) => void;
}

export const fetchPosts = async () => {
    const posts = (await getClient()
        .getEntries({ content_type: "post" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IPost>;

    return posts?.items;
};

const BlogPosts: Component<IBlogPosts> = (props) => {
    const posts = createQuery(() => ({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 60,
        ssr: true,
    }));

    const [searchValue, setSearchValue] = createSignal("");
    const [filtersValues, setFiltersValues] = createSignal([]);

    const searchedPosts = createMemo(() => {
        return posts?.data?.filter((post) => {
            const { text, title, subTitle, minutesRead } = post.fields;

            return (text + title + subTitle + minutesRead).includes(
                searchValue()
            );
        });
    });

    const allPostsTags = [
        ...new Set(posts?.data?.flatMap(post => post.fields.tags))
    ];

    const [selectedPostTags, setSelectedPostTags] = createSignal(
        allPostsTags.map(tag => ({ tag, selected: false }))
    );

    const headingPosts = createMemo(() => searchedPosts()?.slice(0, 3));
    const usualPosts = createMemo(() => searchedPosts()?.slice(3));

    return (
        <div class="p-highest">
            <Line>
                <h2 class="text-max font-black" ref={props.postsRef}>
                    <DottedText>Posts</DottedText>
                </h2>
            </Line>
            <div>
                <Filters
                    searchValue={searchValue()}
                    setSearchValue={setSearchValue}
                    filtersValue={filtersValues()}
                    setFiltersValue={setFiltersValues}
                />
                <div class="mt-offset8x">
                    <div class="grid grid-cols-[2fr_1fr] grid-rows-[repeat(2,1fr)] gap-y-offset8x gap-x-offset4x mb-offset8x">
                        <Index each={headingPosts()}>
                            {(post, index) => {
                                if (!index) {
                                    return (
                                        <div class="row-span-2 flex items-center">
                                            <HeadingPostCard {...post().fields} id={post().sys.id} />
                                        </div>
                                    )
                                }

                                return <PostCard {...post().fields} id={post().sys.id} />
                            }}
                        </Index>
                    </div>
                    <div class="grid grid-cols-3 gap-y-offset8x gap-x-offset4x min-h-[400px]">
                        <For each={usualPosts()}>
                            {(post) => {
                                return (
                                    <PostCard {...post.fields} id={post.sys.id} />
                                );
                            }}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
