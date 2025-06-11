import { For, Show } from "solid-js";
import { useLocation } from "@solidjs/router";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createQuery } from "@tanstack/solid-query";

import { BASE_QUERY_PARAMS, fetchAbout, fetchBlogPost } from "~/shared/api";
import BookSvg from "~/shared/assets/svg/components/book";
import { useTheme } from "~/shared/hooks/useTheme";
import { WithJsonLd } from "~/shared/providers/withJsonLd";
import Chip from "~/shared/ui/chip/chip";
import { getContentfulAvatar } from "~/shared/utils/getContentfulAvatar";
import { getReadingTime } from "~/shared/utils/getReadingTime";

const BlogPostModule = () => {
    const { isLightTheme } = useTheme(false);
    const location = useLocation();
    const blogPostId = location.pathname.split("/").at(-1);

    const post = createQuery(() => ({
        ...BASE_QUERY_PARAMS,
        queryKey: ["post", blogPostId],
        queryFn: () => fetchBlogPost(blogPostId!),
    }));

    const about = createQuery(() => ({
        ...BASE_QUERY_PARAMS,
        queryKey: ["about"],
        queryFn: fetchAbout,
    }));

    const getDot = (extraClass?: string) => {
        return (
            <div class={`mx-offset3x h-full ${extraClass}`}>&bull;</div>
        );
    };

    const blogPostJsonLd = {
        "@type": "BlogPosting",
        headline: post?.data?.fields?.title,
        datePublished: post?.data?.sys?.createdAt?.slice(0, 10),
        dateModified: post?.data?.sys?.updatedAt?.slice(0, 10),
        publisher: {
            "@id": "NW"
        },
        image: post.data?.fields?.image?.fields?.file?.url
    };

    return (
        <WithJsonLd extraJsonLd={blogPostJsonLd}>
            <div class={`
              px-highest duration-300
              ipadLg:px-offset8x
              ipadSm:px-offset3x
            `}>
                <div class="aspect-[16/9]">
                    <Show when={post?.data?.fields?.image}>
                        <img
                            class="h-full w-full rounded-b-md"
                            src={post.data?.fields.image.fields.file.url}
                            alt={post.data?.fields.image.fields.file.fileName}
                        />
                    </Show>
                </div>
                <div class={`
                  my-offset9x text-5cxl flex justify-center font-bold
                  ipadSm:text-5cxl ipadSm:my-offset6x
                  phones:text-2cxl phones:my-offset4x
                `}>
                    <h1>{post?.data?.fields?.title}</h1>
                </div>
                <div class={`
                  mb-offset9x flex items-center justify-center
                  phones:mb-offset8x
                  ipadSm:flex-col ipadSm:gap-offset4x
                `}>
                    <div class="gap-offset3x flex items-center">
                        <div class={`
                          h-[48px] max-h-[48px] min-h-[48px] w-[48px]
                          max-w-[48px] min-w-[48px]
                        `}>
                            <Show
                                when={!isLightTheme()}
                                fallback={getContentfulAvatar(about?.data, true)}
                            >
                                {getContentfulAvatar(about?.data)}
                            </Show>
                        </div>
                        <span class="font-semibold">{about?.data?.name}</span>
                    </div>
                    <div class={`
                      text-lightGray flex items-center
                      ipadSm:text-csm
                      light:text-warmBrown
                    `}>
                        {getDot("ipadSm:hidden")}
                        <span>
                            {new Date(post?.data?.sys?.createdAt!).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            })}
                        </span>
                        {getDot()}
                        <span class={`
                          gap-offset2x flex items-center
                          light:text-warmBrown
                        `}>
                            <BookSvg />
                            <span>{getReadingTime(post?.data?.fields?.text!)} min. read</span>
                        </span>
                    </div>
                </div>
                <div
                    class="gap-offset8x flex flex-col phones:gap-offset6x"
                    innerHTML={documentToHtmlString(post?.data?.fields?.text!)}
                />
                <div class={`
                  gap-offset2x my-offset9x flex flex-wrap justify-center
                  phones:my-offset8x phones:mb-offset3x
                `}>
                    <For each={post?.data?.fields?.tags}>
                        {(tag) => <Chip text={tag} />}
                    </For>
                </div>
            </div>
        </WithJsonLd>
    );
};

export default BlogPostModule;
