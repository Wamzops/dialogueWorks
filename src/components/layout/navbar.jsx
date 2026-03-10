"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

function getLuminance(r, g, b) {
  const toLinear = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function parseRgb(bg) {
  const match = bg?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return null;
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
  if (a === 0) return null;
  return { r: +match[1], g: +match[2], b: +match[3] };
}

function getBackgroundColor(element) {
  // Walk up DOM to find first non-transparent background
  let el = element;
  while (el && el !== document.documentElement) {
    const bg = window.getComputedStyle(el).backgroundColor;
    const rgb = parseRgb(bg);
    if (rgb) return rgb;
    el = el.parentElement;
  }
  // Try html element
  const htmlBg = window.getComputedStyle(document.documentElement).backgroundColor;
  const htmlRgb = parseRgb(htmlBg);
  if (htmlRgb) return htmlRgb;
  // Default to white
  return { r: 255, g: 255, b: 255 };
}

function sampleIsDark(navEl) {
  const rect = navEl.getBoundingClientRect();
  const sampleY = rect.bottom - 4; // just below the nav bar
  // Sample 5 horizontal points across the nav width
  const xs = [0.1, 0.3, 0.5, 0.7, 0.9].map((p) => rect.left + rect.width * p);

  // Hide nav so we hit elements beneath it
  navEl.style.visibility = "hidden";
  navEl.style.pointerEvents = "none";

  const luminances = xs.map((x) => {
    const el = document.elementFromPoint(x, sampleY);
    if (!el) return 1; // assume light
    const { r, g, b } = getBackgroundColor(el);
    return getLuminance(r, g, b);
  });

  navEl.style.visibility = "";
  navEl.style.pointerEvents = "";

  const avg = luminances.reduce((a, b) => a + b, 0) / luminances.length;
  return avg < 0.5;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const detectBackground = () => {
      if (!navRef.current) return;
      setIsDark(sampleIsDark(navRef.current));
    };

    detectBackground();
    window.addEventListener("scroll", detectBackground, { passive: true });
    window.addEventListener("resize", detectBackground);
    return () => {
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => pathname === path;

  const textPrimary   = isDark ? "#ffffff"                : "#000000";
  const textMuted     = isDark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.6)";
  const accent        = isDark ? "#ffffff"                : "#000000";
  const border        = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
  const dropdownBg    = isDark ? "rgba(10,10,30,0.96)"    : "rgba(255,255,255,0.96)";
  const dropdownHover = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)";

  if (isMobile === null) return (
    <nav ref={navRef} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "1.1rem clamp(1.5rem, 5vw, 4rem)",
      background: "transparent",
    }}>
      <Link href="/" style={{ color: textPrimary, textDecoration: "none", fontWeight: 600 }}>
        Dialogue Works
      </Link>
    </nav>
  );

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem clamp(1.5rem, 5vw, 4rem)",
        background: "transparent",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: "var(--font-family-heading)",
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        fontWeight: 600,
        color: textPrimary,
        textDecoration: "none",
        letterSpacing: "-0.01em",
        transition: "color 0.3s ease",
      }}>
        DialogueWorks.
      </Link>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "clamp(1.5rem, 3vw, 2.5rem)", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isActive(link.path) ? accent : textMuted,
                textDecoration: "none",
                fontWeight: isActive(link.path) ? 600 : 500,
                borderBottom: isActive(link.path) ? `2px solid ${accent}` : "2px solid transparent",
                paddingBottom: "4px",
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          style={{
            background: "transparent", border: "none",
            color: textPrimary,
            cursor: "pointer", padding: "0.5rem", fontSize: "1.5rem", lineHeight: 1,
            transition: "color 0.3s ease",
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Mobile Dropdown */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: "absolute", top: "100%", right: "1rem",
          width: "min(220px, 60vw)",
          background: dropdownBg,
          backdropFilter: "blur(12px)",
          borderRadius: "0 0 12px 12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          display: "flex", flexDirection: "column",
          padding: "0.5rem 0",
          zIndex: 40,
          border: `1px solid ${border}`,
          borderTop: "none",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: "0.88rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive(link.path) ? accent : textMuted,
                textDecoration: "none",
                fontWeight: isActive(link.path) ? 600 : 500,
                padding: "0.75rem 1.5rem",
                borderLeft: isActive(link.path) ? `3px solid ${accent}` : "3px solid transparent",
                transition: "background 0.15s ease, color 0.15s ease",
                background: "transparent",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = dropdownHover}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;