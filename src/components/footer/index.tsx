const Footer = () => {
    return (
        <footer class="h-footerHeight flex justify-center items-center text-lightGray light:text-warmBrown text-xs duration-300">
            All rights reserved copyright © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
