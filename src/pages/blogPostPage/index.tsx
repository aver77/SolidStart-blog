import Layout from "~/components/layout";
import BlogPostModuleModule from "../../modules/blogPostModule";

const BlogPage = () => {
    return (
        <Layout title={"Блог"}>
            <BlogPostModuleModule />
        </Layout>
    );
};

export default BlogPage;
