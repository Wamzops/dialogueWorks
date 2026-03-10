"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import gsap from "gsap";

const PageTransitionOverlay = dynamic(
  () => import("@/components/PageTransitionOverlay"),
  { ssr: false }
);

const OVERLAY_DURATION_MS = 1100;  // how long the overlay takes to cover screen
const PAGE_SLIDE_DURATION = 1.2;   // new page slide-in (seconds, for GSAP)

export default function PageTransitionWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const isAnimating = useRef(false);
  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    const main = document.querySelector("main");
    if (main) {
      gsap.set(main, { xPercent: -100, pointerEvents: "none" });
    }

    // Wait for overlay to fully cover the screen before revealing new page
    // Must be >= OVERLAY_DURATION_MS to avoid the overlay sliding out early
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("page-transition-end"));
      if (main) {
        gsap.to(main, {
          xPercent: 0,
          duration: PAGE_SLIDE_DURATION,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(main, { clearProps: "transform", pointerEvents: "auto" });
          },
        });
      }
      isAnimating.current = false;
    }, OVERLAY_DURATION_MS + 100);

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

      // Navigate after overlay fully covers the screen
      setTimeout(() => {
        router.push(href);
      }, OVERLAY_DURATION_MS);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <PageTransitionOverlay color="#000000" />;
}