"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.left = `${e.clientX}px`;
            ringRef.current.style.top = `${e.clientY}px`;
          }
        }, 80);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".service-card")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-[10px] h-[10px] bg-primary rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] shadow-[0_0_12px_var(--color-primary)] transition-opacity duration-200 ${
          isHovering ? "opacity-50" : "opacity-100"
        }`}
      />
      <div
        ref={ringRef}
        className={`fixed border-[1.5px] border-primary-glow rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9998] transition-all duration-200 ease-out ${
          isHovering ? "w-[60px] h-[60px]" : "w-[36px] h-[36px]"
        }`}
      />
    </>
  );
}
