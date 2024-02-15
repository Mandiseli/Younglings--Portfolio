import React from 'react';
import './footer.css'; // Assuming you have a CSS file named Footer.css for styling

const Footer = () => {
    // const [showButton, setShowButton] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 200) {
    //             setShowButton(true);
    //         } else {
    //             setShowButton(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const scrollToTop = () => {
    //     const scrollToTop = () => {
    //         const c = document.documentElement.scrollTop || document.body.scrollTop;
    //         if (c > 0) {
    //             window.requestAnimationFrame(scrollToTop);
    //             window.scrollTo(0, c - c / 8);
    //         }
    //     };
    //     scrollToTop();
    // };

    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2023 by Mandiseli | All Rights Reserved.</p>
            </div>

            {/* {showButton && (
                <div className="footer-iconTop">
                    <a href="#home" onClick={scrollToTop}>
                        <i className="bx bx-up-arrow-alt"></i>
                    </a>
                </div>
            )} */}
        </footer>
    );
};

export default Footer;
