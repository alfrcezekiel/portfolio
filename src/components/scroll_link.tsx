import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

interface ScrollLinkProps {
    to: string;
    targetId: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ScrollLink = ({ to, children, targetId, className, onClick }: ScrollLinkProps) => {
    const location = useLocation();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick();
        }

        if (targetId === "home" && (location.pathname === "/" || location.pathname === "")) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            window.history.pushState(null, "", "/");
        }
    }
    useEffect(() => {
        if (location.hash === `#${targetId}` || (targetId === "home" && !location.hash)) {
            const element = targetId === "home" ? document.documentElement : document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [location, targetId])

    return (
        <>
            <Link
                to={targetId === "home" && (location.pathname === "/" || location.pathname === "") ? "#" : `${to}#${targetId}`}
                className={className}
                onClick={handleClick}
            >
                {children}
            </Link>
        </>
    )
}

export default ScrollLink;