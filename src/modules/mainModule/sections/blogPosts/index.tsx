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
        ssr: true
    }));

    const [searchValue, setSearchValue] = createSignal("");

    const searchedPosts = createMemo(() => {
        return posts?.data?.filter((post) => {
            const { title, subTitle, minutesRead } = post.fields;

            const targetStr = (title + subTitle + minutesRead)
                .trim()
                .toLowerCase();
            const searchStr = searchValue().trim().toLowerCase();

            return targetStr.includes(searchStr);
        });
    });

    const allPostsTags = [
        ...new Set(posts?.data?.flatMap((post) => post.fields.tags))
    ];

    const [filterByTagsValues, setFilterByTagsValues] = createSignal(
        allPostsTags.map((tag) => ({ name: tag, selected: false }))
    );

    const searchedAndFilteredPosts = createMemo(() => {
        if (!filterByTagsValues().some((tag) => tag.selected)) {
            return searchedPosts();
        }

        const selectedTags = filterByTagsValues()
            .filter((tag) => tag.selected)
            .map((tag) => tag.name);

        return searchedPosts()?.filter((post) => {
            const tags = post.fields.tags;

            return tags.some((tag) => selectedTags.includes(tag));
        });
    });

    const headingPosts = createMemo(() => {
        return searchedAndFilteredPosts()?.slice(0, 3);
    });
    const usualPosts = createMemo(() => searchedAndFilteredPosts()?.slice(3));

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
                    filtersValue={filterByTagsValues()}
                    setFiltersValue={setFilterByTagsValues}
                />
                <div class="mt-offset8x min-h-[400px]">
                    <div class="grid grid-cols-[2fr_1fr] grid-rows-[repeat(2,1fr)] gap-y-offset8x gap-x-offset4x mb-offset8x">
                        <For each={headingPosts()}>
                            {(post, index) => {
                                return (
                                    <>
                                        {!index() ? (
                                            <div class="row-span-2 flex items-center">
                                                <HeadingPostCard
                                                    {...post.fields}
                                                    id={post.sys.id}
                                                />
                                            </div>
                                        ) : (
                                            <PostCard
                                                {...post.fields}
                                                id={post.sys.id}
                                            />
                                        )}
                                    </>
                                );
                            }}
                        </For>
                    </div>
                    <div class="grid grid-cols-3 gap-y-offset8x gap-x-offset4x">
                        <For each={usualPosts()}>
                            {(post) => {
                                return (
                                    <PostCard
                                        {...post.fields}
                                        id={post.sys.id}
                                    />
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
