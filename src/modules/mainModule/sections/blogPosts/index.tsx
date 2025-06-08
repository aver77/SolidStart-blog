import { Component, createMemo, createSignal, For, Show } from "solid-js";

import cx from "classnames";
import { createInfiniteQuery } from "@tanstack/solid-query";

import InfiniteScroll from "~/components/infiniteScroll";
import { getClient } from "~/shared/api";
import LoopSad from "~/shared/assets/svg/components/loopSad";
import type { IContentfulResource, IPost } from "~/shared/types";
import DottedText from "~/shared/ui/dottedText";
import Line from "~/shared/ui/line";
import Filters from "./filters";
import { HeadingPostCard, PostCard } from "./postCard";

const POSTS_LIMIT = 3;

interface IBlogPosts {
    postsRef: (el: HTMLHeadingElement) => void;
}

export const fetchPosts = async (page: number) => {
    const posts = (await getClient()
        .getEntries({
            content_type: "post",
            skip: page * POSTS_LIMIT, // how much posts we skip from the start
            limit: POSTS_LIMIT, // how many posts max fetch
        })
        .catch(() => ({
            items: [],
        }))) as IContentfulResource<IPost>;

    return posts?.items;
};

const BlogPosts: Component<IBlogPosts> = (props) => {
    const infinitePostsQuery = createInfiniteQuery(() => ({
        queryKey: ["posts"],
        queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length < POSTS_LIMIT
                ? undefined
                : allPages.length,
        staleTime: 1000 * 60 * 60,
        ssr: true,
    }));
    const posts = createMemo(() => infinitePostsQuery.data?.pages.flat() ?? []);

    const [searchValue, setSearchValue] = createSignal("");
    const searchedPosts = createMemo(() => {
        return posts()?.filter((post) => {
            const { title, subTitle, minutesRead } = post.fields;

            const targetStr = (title + subTitle + minutesRead).trim().toLowerCase();
            const searchStr = searchValue().trim().toLowerCase();

            return targetStr.includes(searchStr);
        });
    });

    const allPostsTags = [
    // eslint-disable-next-line solid/reactivity
        ...new Set(posts()?.flatMap((post) => post.fields.tags)),
    ];
    const [filterByTagsValues, setFilterByTagsValues] = createSignal(
        allPostsTags.map((tag) => ({ name: tag, selected: false })),
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

    const headingPostsAmount = 3;
    const headingPosts = createMemo(() => {
        return searchedAndFilteredPosts()?.slice(0, headingPostsAmount);
    });
    const usualPosts = createMemo(() =>
        searchedAndFilteredPosts()?.slice(headingPostsAmount),
    );

    return (
        <div class="p-highest ipadLg:px-offset8x ipadSm:px-offset3x">
            <Line>
                <h2 class="text-max font-black ipadLg:text-5cxl" ref={props.postsRef}>
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
                <div
                    class={cx(
                        "mt-offset8x min-h-[400px]",
                        !searchedAndFilteredPosts().length &&
                        "flex flex-col items-center justify-center",
                    )}
                >
                    <InfiniteScroll
                        onLoadMore={infinitePostsQuery.fetchNextPage}
                        hasMore={!!infinitePostsQuery.hasNextPage}
                    >
                        <Show when={!searchedAndFilteredPosts().length}>
                            <div class={`
                              flex flex-col items-center justify-center
                            `}>
                                <div>
                                    <LoopSad />
                                </div>
                                <h3 class="mt-offset8x text-2cxl font-bold">
                                    No Results in{" "}
                                    <span class="text-gold light:text-warmGold">Posts</span>
                                </h3>
                                <p class="mt-offset2x text-center">
                                    No Results for the term{" "}
                                    <span class="text-gold light:text-warmGold">
                                        "{searchValue()}"
                                    </span>
                                    . You can try another search term similar to this one.
                                </p>
                            </div>
                        </Show>
                        <Show when={searchedAndFilteredPosts().length}>
                            <div class={`
                              gap-y-offset8x gap-x-offset4x mb-offset8x grid
                              grid-cols-[2fr_1fr] grid-rows-[repeat(2,1fr)]
                              ipadSm:grid-cols-2 ipadSm:grid-rows-2
                              phones:grid-cols-1
                            `}>
                                <For each={headingPosts()}>
                                    {(post, index) => {
                                        return (
                                            <>
                                                <Show
                                                    when={!index()}
                                                    fallback={
                                                        <PostCard
                                                            {...post.fields}
                                                            id={post.sys.id}
                                                        />
                                                    }
                                                >
                                                    <div class={`
                                                      row-span-2 flex
                                                      items-center
                                                      ipadSm:col-span-2 ipadSm:row-start-1
                                                      phones:col-span-1
                                                    `}>
                                                        <HeadingPostCard
                                                            {...post.fields}
                                                            id={post.sys.id}
                                                        />
                                                    </div>
                                                </Show>
                                            </>
                                        );
                                    }}
                                </For>
                            </div>
                            <div class={`
                              gap-y-offset8x gap-x-offset4x grid grid-cols-3
                              ipadLg:grid-cols-2
                              phones:grid-cols-1
                            `}>
                                <For each={usualPosts()}>
                                    {(post) => {
                                        return <PostCard {...post.fields} id={post.sys.id} />;
                                    }}
                                </For>
                            </div>
                        </Show>
                        {/* <Show when={infinitePostsQuery.isFetching}>*/}
                        {/*    <div class="grid grid-cols-3 gap-y-offset8x gap-x-offset4x">*/}
                        {/*        <For each={Array(3).fill(undefined)}>*/}
                        {/*            {(_, index) => {*/}
                        {/*                return (*/}
                        {/*                    <PostCard*/}
                        {/*                        title={"Beautoful"}*/}
                        {/*                        subTitle={"Beautoful"}*/}
                        {/*                        text={"Beautoful"}*/}
                        {/*                        minutesRead={"5"}*/}
                        {/*                    />*/}
                        {/*                );*/}
                        {/*            }}*/}
                        {/*        </For>*/}
                        {/*    </div>*/}
                        {/* </Show>*/}
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
