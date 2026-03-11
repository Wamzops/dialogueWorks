"use client";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageTransitionOverlay = dynamic(
  () => import("./PageTransitionOverlay"),
  { ssr: false }
);

const OVERLAY_DURATION_MS = 500; // overlay duration
const PAGE_ANIMATION_MS = 700;   // page fade/lift duration

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
      gsap.set(main, { opacity: 0, y: 30, pointerEvents: "none" });
    }

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("page-transition-end"));
      if (main) {
        gsap.to(main, {
          opacity: 1,
          y: 0,
          duration: PAGE_ANIMATION_MS / 1000,
          ease: "power3.out",
          onComplete: () => gsap.set(main, { clearProps: "all", pointerEvents: "auto" }),
        });
      }
      isAnimating.current = false;
    }, OVERLAY_DURATION_MS);

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

      setTimeout(() => {
        router.push(href);
      }, OVERLAY_DURATION_MS);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <PageTransitionOverlay color="#000000" />;
}