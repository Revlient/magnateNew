"use client";
import { useTransitionRouter } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import "./BtnLink.css";

interface BtnLinkProps {
    label: string;
    route: string;
    dark?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const BtnLink = ({ label, route, dark = false, onClick }: BtnLinkProps) => {
    const router = useTransitionRouter();

    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-30%) scale(0.90)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
            return;
        }
        router.push(route, {
            onTransitionReady: slideInOut,
        });
    };

    return (
        <a
            className={`sm caps mono ${dark ? "link-dark" : "link-light"}`}
            href={route}
            onClick={handleClick}
        >
            <div
                className={`anime-link ${dark ? "anime-link-dark" : "anime-link-light"
                    }`}
            >
                <div className="anime-link-label">
                    <p className="sm caps mono">
                        <span>{label}</span>
                    </p>
                </div>
                <div className="anime-link-icon">
                    <ArrowRight color={dark ? "#fff" : "#000"} />
                </div>
            </div>
        </a>
    );
};

export default BtnLink;
