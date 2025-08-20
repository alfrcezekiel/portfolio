import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

interface ScrollLinkProps {
    to: string;
    targetId: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ScrollLink = ({to, children, targetId, className, onClick} : ScrollLinkProps) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === `#${targetId}`) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [location, targetId])

    return (
        <>
            <Link to={`${to}#${targetId}`} className={className} onClick={onClick}>
                {children}
            </Link>
        </>
    )
}

export default ScrollLink;