"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = ({ companyName = "Dialogue Works" }) => {
  const footerLinks = [
    {
      title: "Perspective",
      links: [
        { label: "Portfolio", href: "/blog" },
        { label: "Our Story", href: "/about" },
        { label: "Impact", href: "/#stats" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Insights", href: "/blog" },
        { label: "Dialogue Framework", href: "#" },
        { label: "Community", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "LinkedIn", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-black px-6 sm:px-12 md:px-20 lg:px-32 py-14 border-t border-gray-100 overflow-hidden ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand Column */}
          <div className="md:max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tighter text-white">
                Dialogue Works.
              </span>
            </Link>
            <p className="text-xl font-light text-white leading-relaxed italic">
              Building safe, peaceful, and resilient societies through inclusive
              dialogue.
            </p>
          </div>
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-white uppercase tracking-[0.4em] text-secondary mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[17px] font-light text-white hover:text-yellow-100 hover:italic transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
          <div className="flex gap-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">
              © 2026 {companyName}
            </span>
            <Link
              href="#"
              className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 italic">
              Perspective changes everything.
            </span>
            <div className="w-8 h-[2px] bg-secondary/30"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;