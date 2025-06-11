import { Component, createMemo, createSignal, For, Show } from "solid-js";

import cx from "classnames";
import { createInfiniteQuery } from "@tanstack/solid-query";

import type { IDropdownItem } from "~/components/dropdown";
import InfiniteScroll from "~/components/infiniteScroll";
import { BASE_QUERY_PARAMS, fetchPosts } from "~/shared/api";
import LoopSad from "~/shared/assets/svg/components/loopSad";
import DottedText from "~/shared/ui/dottedText";
import Line from "~/shared/ui/line";
import { checkStringsMatch } from "~/shared/utils/checkStringsMatch";
import Filters from "./filters";
import { HeadingPostCard, PostCard } from "./postCard";

const DEFAULT_POSTS_LIMIT = 10;
const DEFAULT_HEADING_POSTS_AMOUNT = 3;

interface IBlogPosts {
    postsRef: (el: HTMLHeadingElement) => void;
}

const BlogPosts: Component<IBlogPosts> = (props) => {
    const infinitePostsQuery = createInfiniteQuery(() => ({
        ...BASE_QUERY_PARAMS,
        queryKey: ["posts"],
        queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam, DEFAULT_POSTS_LIMIT),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length < DEFAULT_POSTS_LIMIT
                ? undefined
                : allPages.length,
    }));

    /** 1. Sorting fetched posts by created date */
    const sortedPosts = createMemo(() => infinitePostsQuery.data?.pages.flat().sort(
        (postA, postB) =>
            new Date(postB?.sys?.createdAt).getTime() - new Date(postA?.sys?.createdAt).getTime()
    ) ?? []);

    const [searchValue, setSearchValue] = createSignal("");
    /** 2. Posts searched by filter input value */
    const searchedPosts = createMemo(() => {
        return sortedPosts()?.filter((post) => {
            const { title, subTitle, minutesRead } = post.fields;

            return checkStringsMatch(title + subTitle + minutesRead, searchValue());
        });
    });

    /** 3. Get list of all posts tags. Create list of them. By default - non of them selected. */
    const getInitialTagFilters = (): IDropdownItem[] => {
        const allPostsTags = [
            ...new Set(sortedPosts()?.flatMap((post) => post.fields.tags))
        ];

        return allPostsTags.map((tag) => ({ name: tag, selected: false }));
    };
    const [tagFilters, setTagFilters] =
        createSignal(getInitialTagFilters());

    const checkTagFiltersSelected = () => tagFilters().some((f) => f.selected);

    /** 4. Filter posts depend on tagFilters */
    const calculatedPosts = createMemo(() => {
        if (!checkTagFiltersSelected()) {
            return searchedPosts();
        }

        /** List of selected tag names */
        const selectedTags: string[] = tagFilters()
            .filter((tag) => tag.selected)
            .map((tag) => tag.name);

        return searchedPosts()?.filter((post) => {
            const postTags = post.fields.tags;

            return selectedTags.every((selectedTag) => postTags.includes(selectedTag));
        });
    });

    const headingPosts = createMemo(() => {
        return calculatedPosts()?.slice(0, DEFAULT_HEADING_POSTS_AMOUNT);
    });
    const usualPosts = createMemo(() =>
        calculatedPosts()?.slice(DEFAULT_HEADING_POSTS_AMOUNT),
    );

    const getNoPostsJsx = () => {
        const selectedFiltersStr = tagFilters()
            .filter((tag) => tag.selected)
            .map((tag) => tag.name)
            .join(", ");

        return (
            <div class={"flex flex-col items-center justify-center"}>
                <div>
                    <LoopSad />
                </div>
                <h3 class="mt-offset8x text-2cxl font-bold">
                    No Results in <span class="text-gold light:text-warmGold">Posts</span>
                </h3>
                <p class="mt-offset2x text-center">
                    No Results for the{" "}
                    <Show when={searchValue()}>
                        <span class="text-gold light:text-warmGold">
                            term "{searchValue()}"
                        </span>
                    </Show>
                    <Show when={searchValue() && checkTagFiltersSelected()}>
                        {" "}and{" "}
                    </Show>
                    <Show when={checkTagFiltersSelected()}>
                        <span class="text-gold light:text-warmGold">
                            filters: {selectedFiltersStr}
                        </span>
                    </Show>
                    . You can try another search term similar to this one.
                </p>
            </div>
        );
    };

    return (
        <div class="p-highest ipadLg:p-offset8x ipadSm:px-offset3x">
            <Line>
                <h2 class="text-max font-black ipadLg:text-5cxl" ref={props.postsRef}>
                    <DottedText>Posts</DottedText>
                </h2>
            </Line>
            <div>
                <Filters
                    searchValue={searchValue()}
                    setSearchValue={setSearchValue}
                    filtersValue={tagFilters()}
                    setFiltersValue={setTagFilters}
                />
                <div
                    class={cx(
                        "min-h-[400px]",
                        !calculatedPosts().length &&
                        "flex flex-col items-center justify-center",
                    )}
                >
                    <InfiniteScroll
                        onLoadMore={infinitePostsQuery.fetchNextPage}
                        hasMore={!!infinitePostsQuery.hasNextPage}
                    >
                        <Show when={calculatedPosts().length} fallback={getNoPostsJsx()}>
                            <div class={`
                              gap-y-offset8x gap-x-offset4x mb-offset8x grid
                              grid-cols-[2fr_1fr] grid-rows-[repeat(2,1fr)]
                              ipadSm:grid-cols-2 ipadSm:grid-rows-2
                              phones:grid-cols-1
                            `}>
                                <For each={headingPosts()}>
                                    {(post, index) => {
                                        return (
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
                                                  ipadSm:col-span-2
                                                  ipadSm:row-start-1
                                                  phones:col-span-1
                                                  row-span-2 flex items-center
                                                `}>
                                                    <HeadingPostCard
                                                        {...post.fields}
                                                        id={post.sys.id}
                                                    />
                                                </div>
                                            </Show>
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
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
