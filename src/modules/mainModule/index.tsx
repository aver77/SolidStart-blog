import AboutSection from "~/modules/mainModule/sections/about";
import BlogPosts from "~/modules/mainModule/sections/blogPosts";

const MainModule = () => {
    let postsRef!: HTMLHeadingElement;

    return (
        <>
            <AboutSection postsRef={() => postsRef} />
            <BlogPosts postsRef={(el) => (postsRef = el)} />
        </>
    );
};

export default MainModule;
