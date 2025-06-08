const Footer = () => {
    return (
        <footer class={`
          h-footerHeight text-lightGray text-cxs flex items-center
          justify-center duration-300
          light:text-warmBrown
        `}>
            All rights reserved copyright © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
