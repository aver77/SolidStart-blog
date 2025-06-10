import Layout from "~/components/layout";
import MainModule from "~/modules/mainModule";

const MainPage = () => {
    return (
        <Layout
            title={"NW Main Page | Welcome to my blog! I'm Nikita - experienced Frontend Developer. And I wrote list of blogs about frontend, technologies, IT trends and guides"}
            description={
                "Here you will find information about me, my experience and links to my social networks, " +
                "a full list of all IT articles, convenient search and filters for quickly finding interesting " +
                "topics in the world of technology. Follow the trends that are not distinguished from the industry."
            }
            keywords={
                "Nikita,Frontend Developer,Frontend Engineer,Engineering,Development,IT Specialist," +
                "IT Generalist,IT blog,IT articles,Frontend,Backend,WEB,technology,Programming Guides," +
                "WEB development,Software Engineering,blog search,tech trends,Psychology in IT,Salaries," +
                "Big Tech Companies,Relocation,Senior,Senior Developer"
            }
        >
            <MainModule />
        </Layout>
    );
};

export default MainPage;
