"use client";
import { useEffect, useRef, forwardRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import dynamic from "next/dynamic";

const PageTransitionOverlay = forwardRef(({ color = "#000000" }, ref) => {
  const overlayRef = useRef(null);
  const overlaySecondaryRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const overlaySecondary = overlaySecondaryRef.current;
    if (!overlay || !overlaySecondary) return;

    gsap.set([overlay, overlaySecondary], { yPercent: -100, display: "none" });

    const slideIn = () => {
      gsap.set([overlay, overlaySecondary], { display: "block" });
      const tl = gsap.timeline();
      tl.to(overlay, { yPercent: 0, duration: 0.35, ease: "power4.out" })
        .to(
          overlaySecondary,
          { yPercent: 0, duration: 0.45, ease: "power4.out" },
          "<0.1"
        );
      return tl;
    };

    const slideOut = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set([overlay, overlaySecondary], { yPercent: -100, display: "none" });
        },
      });
      tl.to(overlaySecondary, { yPercent: 100, duration: 0.4, ease: "power3.inOut" }, 0)
        .to(overlay, { yPercent: 100, duration: 0.5, ease: "power3.inOut" }, 0.1);
      return tl;
    };

    window.addEventListener("page-transition-start", slideIn);
    window.addEventListener("page-transition-end", slideOut);

    return () => {
      window.removeEventListener("page-transition-start", slideIn);
      window.removeEventListener("page-transition-end", slideOut);
    };
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: color,
          zIndex: 9998,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <div
        ref={overlaySecondaryRef}
        style={{
          position: "fixed",
          inset: 0,
          background: `${color}AA`,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
    </>
  );
});

const Overlay = dynamic(() => Promise.resolve(PageTransitionOverlay), { ssr: false });

const OVERLAY_DURATION = 500; // in ms
const PAGE_DURATION = 700; // new page slide duration in ms

export default function PageTransitionWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (isAnimating.current) return;

    const main = document.querySelector("main");
    if (main) {
      // Start new page above the viewport
      gsap.set(main, { yPercent: -100, pointerEvents: "none" });
    }

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("page-transition-end"));

      if (main) {
        gsap.to(main, {
          yPercent: 0,
          duration: PAGE_DURATION / 1000,
          ease: "power3.out",
          onComplete: () => gsap.set(main, { clearProps: "all", pointerEvents: "auto" }),
        });
      }

      isAnimating.current = false;
    }, OVERLAY_DURATION);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("#") ||
        href === pathname ||
        isAnimating.current
      )
        return;

      e.preventDefault();
      isAnimating.current = true;
      window.dispatchEvent(new Event("page-transition-start"));

      setTimeout(() => router.push(href), OVERLAY_DURATION);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <Overlay color="#000000" />;
}