"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransitionOverlay({ color = "#000000" }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.set(overlay, { yPercent: 100, display: "none" });

    const slideIn = () => {
      gsap.set(overlay, { display: "block" });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 1.1,        // slow cover
        ease: "power3.inOut",
      });
    };

    const slideOut = () => {
      gsap.to(overlay, {
        yPercent: -100,
        duration: 1.1,        // slow reveal
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlay, { yPercent: 100, display: "none" });
        },
      });
    };

    window.addEventListener("page-transition-start", slideIn);
    window.addEventListener("page-transition-end", slideOut);

    return () => {
      window.removeEventListener("page-transition-start", slideIn);
      window.removeEventListener("page-transition-end", slideOut);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: color,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}