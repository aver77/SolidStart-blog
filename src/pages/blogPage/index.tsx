import Layout from "~/components/layout";
import BlogModule from "~/modules/blogModule";

const BlogPage = () => {
    return (
        <Layout title={"Блог"}>
            <BlogModule />
        </Layout>
    );
};

export default BlogPage;
