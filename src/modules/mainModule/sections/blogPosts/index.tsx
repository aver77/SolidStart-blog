import { createMemo, createSignal, For } from "solid-js";
import { getClient } from "~/shared/api";
import type { IContentfulResource, IPost } from "~/shared/types";

import PostCard from "./postCard";
import Line from "~/shared/ui/line";
import DottedText from "~/shared/ui/dottedText";
import Filters from "./filters";
import { createQuery } from "@tanstack/solid-query";

export const fetchPosts = async () => {
    const posts = (await getClient()
        .getEntries({ content_type: "post" })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IPost>;

    return posts?.items;
};

const BlogPosts = () => {
    const posts = createQuery(() => ({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 60,
        ssr: true
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

    return (
        <div class="p-highest">
            <Line>
                <h2 class="text-max font-black">
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
                <div class="mt-offset8x grid grid-cols-3 gap-y-offset8x gap-x-offset4x min-h-[400px]">
                    <For each={searchedPosts()}>
                        {(post) => {
                            return (
                                <PostCard {...post.fields} id={post.sys.id} />
                            );
                        }}
                    </For>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
