const Footer = () => {
    return (
        <footer class={`
          h-footerHeight text-lightGray flex items-center justify-center text-cxs
          duration-300
          light:text-warmBrown
        `}>
            All rights reserved copyright © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
