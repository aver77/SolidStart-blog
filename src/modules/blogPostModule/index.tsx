import { fetchAbout, fetchBlogPost } from "~/shared/api";
import { useLocation } from "@solidjs/router";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createQuery } from "@tanstack/solid-query";
import Book from "~/shared/assets/svg/components/book";
import { For, Show } from "solid-js";
import Chip from "~/shared/ui/chip/chip";
import { useTheme } from "~/shared/hooks/useTheme";
import { getReadingTime } from "~/shared/utils/getReadingTime";

const BlogPostModule = () => {
    const { isLightTheme } = useTheme(false);
    const location = useLocation();
    const blogPostId = location.pathname.split("/").at(-1);

    const post = createQuery(() => ({
        queryKey: ["post", blogPostId],
        queryFn: () => fetchBlogPost(blogPostId!),
        staleTime: 1000 * 60 * 120,
        ssr: true
    }));

    const about = createQuery(() => ({
        queryKey: ["about"],
        queryFn: fetchAbout,
        staleTime: 1000 * 60 * 120,
        ssr: true
    }));

    const getDot = () => <div class="h-full mx-offset3x">&bull;</div>;

    return (
        <div class="px-highest">
            <Show when={post?.data?.fields?.image}><div class="aspect-[16/9]">
                <img
                    class="w-full h-full rounded-b-md"
                    src={post.data.fields.image.fields.file.url}
                    alt={post.data.fields.image.fields.file.fileName}
                />
            </div></Show>
            <div class="flex justify-center my-offset9x text-5xl font-bold">
                <h1>{post?.data?.fields?.title}</h1>
            </div>
            <div class="flex justify-center items-center mb-offset9x">
                <Show when={!isLightTheme() && about?.data?.avatar}><img
                    width={"48px"}
                    height={"48px"}
                    class="mr-offset3x"
                    src={about.data.avatar.fields.file.url}
                    alt={about.data.avatar.fields.file.fileName}
                /></Show>
                <Show when={isLightTheme() && about?.data?.lightAvatar}><img
                    width={"48px"}
                    height={"48px"}
                    class="mr-offset3x"
                    src={about.data.lightAvatar.fields.file.url}
                    alt={about.data.lightAvatar.fields.file.fileName}
                /></Show>
                <span class="font-semibold">{about?.data?.name}</span>
                <div class="flex items-center text-lightGray light:text-warmBrown">
                    {getDot()}
                    <span>
                        {new Date(
                            post?.data?.sys?.createdAt!
                        ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })}
                    </span>
                    {getDot()}
                    <span class="flex items-center gap-offset2x light:text-warmBrown">
                        <Book />
                        <span>
                            {getReadingTime(post?.data?.fields?.text!)} min.
                            read
                        </span>
                    </span>
                </div>
            </div>
            {post?.data?.fields?.subTitle}
            <div innerHTML={documentToHtmlString(post?.data?.fields?.text!)} />
            <div class="flex flex-wrap justify-center gap-offset2x my-offset9x">
                <For each={post?.data?.fields?.tags}>
                    {(tag) => <Chip text={tag} />}
                </For>
            </div>
        </div>
    );
};

export default BlogPostModule;
