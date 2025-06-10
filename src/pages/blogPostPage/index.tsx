import Layout from "~/components/layout";
import BlogPostModule from "../../modules/blogPostModule";

const BlogPage = () => {
    return (
        <Layout
            title={"NW Blog | Everything about Frontend, technologies, IT trends and guides"}
            description={
                "Personal blog of Senior Frontend Developer Nikita. It's about modern programming, technologies, tools, " +
                "and thoughts about the future of the industry. An overview of new technologies, " +
                "libraries, approaches and tools in the IT world. Follow the trends that are not " +
                "distinguished from the industry."
            }
            keywords={
                "Nikita,Frontend Developer,Frontend Engineer,Engineering,Development,IT Specialist," +
                "IT Generalist,IT blog,IT articles,Frontend,Backend,WEB,technology,Programming Guides," +
                "WEB development,Software Engineering,blog search,tech trends,Psychology in IT,Salaries," +
                "Programming tools,developer blog,JavaScript,TypeScript,React,Next,Vue,VueX,Pinia,modern WEB,networks," +
                "Solid.js,SolidStart,CSS,Tailwind,HTML,Redux,sass,CSS in JS,AntDesign,MaterialUI,Webpack,Vite,Jest,Playwright" +
                "GraphQL,Postman,Swagger,Node,Express,MongoDB,Docker,Docker-Compose,Microservices,Micro-frontends"
            }
        >
            <BlogPostModule />
        </Layout>
    );
};

export default BlogPage;
