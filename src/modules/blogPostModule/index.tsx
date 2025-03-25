import { getClient } from "~/shared/api";
import type { IContentfulResourceFields, IPost } from "~/shared/types";
import { createResource } from "solid-js";
import { useLocation } from "@solidjs/router";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

export const fetchBlogPost = async (blogId: string) => {
    console.log(blogId);

    const blogPost = (await getClient()
        .getEntry(blogId)
        .catch(() => ({
            fields: {}
        }))) as IContentfulResourceFields<IPost>;

    return blogPost?.fields || {};
};

const BlogPostModule = () => {
    const location = useLocation();
    const blogPostId = location.pathname.split("/").at(-1);
    const [post] = createResource(blogPostId, fetchBlogPost);

    return (
        <div>
            Hello world!
            {post()?.title}
            {post()?.subTitle}
            <div innerHTML={documentToHtmlString(post()?.text as Document)} />
        </div>
    );
};

export default BlogPostModule;
