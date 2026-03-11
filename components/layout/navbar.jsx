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

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  // Always start as dark/black
  const [isDark, setIsDark] = useState(true);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu on outside click
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

  // Color scheme
  const textPrimary   = "#ffffff";
  const textMuted     = "rgba(255,255,255,0.72)";
  const accent        = "#ffffff";
  const border        = "rgba(255,255,255,0.15)";
  const dropdownBg    = "rgba(10,10,30,0.96)";
  const dropdownHover = "rgba(255,255,255,0.07)";

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.1rem clamp(1.5rem, 5vw, 4rem)",
    background: "rgba(0,0,0,0.85)", // always dark/black
    backdropFilter: "blur(12px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "background 0.2s ease",
  };

  if (isMobile === null) return null;

  return (
    <nav ref={navRef} style={navStyle}>
      <Link href="/" style={{ fontWeight: 600, color: textPrimary, textDecoration: "none", fontSize: "clamp(1rem,3vw,1.3rem)" }}>
        DialogueWorks.
      </Link>

      {!isMobile && (
        <div style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              style={{
                textDecoration: "none",
                color: isActive(link.path) ? accent : textMuted,
                fontWeight: isActive(link.path) ? 600 : 500,
                borderBottom: isActive(link.path) ? `2px solid ${accent}` : "2px solid transparent",
                paddingBottom: "4px",
                textTransform: "uppercase",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {isMobile && (
        <button onClick={() => setIsMenuOpen(prev => !prev)} style={{ background: "transparent", border: "none", color: textPrimary, fontSize: "1.5rem" }}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      )}

      {isMobile && isMenuOpen && (
        <div style={{
          position: "absolute", top: "100%", right: "1rem",
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
          {navLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              style={{
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                color: isActive(link.path) ? accent : textMuted,
                fontWeight: isActive(link.path) ? 600 : 500,
                borderLeft: isActive(link.path) ? `3px solid ${accent}` : "3px solid transparent",
                transition: "background 0.15s ease",
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