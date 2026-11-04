"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [trailing, setTrailing] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        const follow = () => {
            setTrailing((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));
            animationFrameId = requestAnimationFrame(follow);
        };
        animationFrameId = requestAnimationFrame(follow);
        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
            <div
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 border border-amber-400/40 transition-all duration-300 ease-out ${isHovered
                    ? "w-14 h-14 bg-amber-400/10 border-amber-400 scale-110"
                    : "w-8 h-8 scale-100"
                    }`}
                style={{
                    transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%)`,
                }}
            />
        </>
    );
}