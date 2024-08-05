import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BaseNav.css';

const links = [
    { path: "/app1", label: "GPT3 and Open AI", img: "./app1.png" },
    { path: "/app2", label: "Gericht Restaurant", img: "./app2.png" },
    { path: "/app3", label: "HooBank New Generation Payment", img: "./app3.png" },
    { path: "/app4", label: "Portfolio Application", img: "./app4.png" }
];

const BaseNav = () => {
    const navRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const location = useLocation();

    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -window.outerWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: window.outerWidth, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (navRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        if (navRef.current) {
            navRef.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Check scroll position on initial render
        }
        return () => {
            if (navRef.current) {
                navRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            // Scroll to the active link on location change
            const activeLink = navRef.current.querySelector(`a[href='${location.pathname}']`);
            if (activeLink) {
                activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        }
    }, [location.pathname]);

    return (
        <header className="main-header">
            {showLeftButton && (
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#9664;
                </button>
            )}
            <nav ref={navRef}>
                <ul className="link-list">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                <span className="appName">{link.label}</span>
                                <img className="linkImg" src={link.img} alt="OPEN NEW APP"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {showRightButton && (
                <button className="scroll-button right" onClick={scrollRight}>
                    &#9654;
                </button>
            )}
        </header>
    );
};

export default BaseNav;
