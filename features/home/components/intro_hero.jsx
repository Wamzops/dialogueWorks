"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Simple FadeIn replacement (no external dependency)
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const translateMap = {
    up: "translateY(28px)",
    down: "translateY(-28px)",
    left: "translateX(28px)",
    right: "translateX(-28px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : translateMap[direction] || "translateY(28px)",
        transition: `opacity 0.75s ease, transform 0.75s ease`,
      }}
    >
      {children}
    </div>
  );
};

// Decorative illustrated blob
const IllustrationBlob = () => (
  <svg
    viewBox="0 0 420 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
    aria-hidden="true"
  >
    <ellipse cx="210" cy="200" rx="160" ry="140" fill="#d1cfc8" opacity="0.35" />
    <path
      d="M120 160 Q170 100 230 130 Q290 160 270 220 Q250 280 190 270 Q130 260 120 200 Z"
      stroke="#3d3730" strokeWidth="1.2" fill="none" opacity="0.5"
    />
    <path
      d="M145 175 Q185 125 240 150 Q280 175 265 228 Q248 268 200 258 Q152 248 145 205 Z"
      stroke="#3d3730" strokeWidth="0.8" fill="none" opacity="0.35"
    />
    {Array.from({ length: 30 }).map((_, i) => {
      const cx = 280 + Math.cos(i * 0.7) * (18 + (i % 5) * 6);
      const cy = 120 + Math.sin(i * 0.7) * (18 + (i % 4) * 6);
      return (
        <circle key={i} cx={cx} cy={cy} r={1.5 + (i % 3) * 0.8}
          fill="#e8533a" opacity={0.4 + (i % 3) * 0.15} />
      );
    })}
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M80 ${300 + i * 10} Q160 ${290 + i * 10} 240 ${300 + i * 10} Q320 ${310 + i * 10} 360 ${298 + i * 10}`}
        stroke="#e8533a" strokeWidth="1" fill="none" opacity={0.25 + i * 0.05}
      />
    ))}
    <path d="M155 230 Q175 220 195 230 Q215 240 235 228"
      stroke="#3d3730" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M160 242 Q180 234 200 242 Q220 250 238 240"
      stroke="#3d3730" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />
  </svg>
);

const caseStudies = [
  {
    desc: "Building safe, resilient communities through inclusive facilitation",
    client: "DIALOGUE WORKS",
    slug: "building-safe-resilient-communities",
    date: "2026-03-10",
    excerpt: "An overview of inclusive facilitation approaches for community safety and resilience.",
  },
  {
    desc: "Launching and growing an evidence-based peacebuilding research hub",
    client: "ZONDERVAN ACADEMIC",
    slug: "launching-peacebuilding-research-hub",
    date: "2026-03-10",
    excerpt: "A short placeholder about building a research hub that supports evidence-based peacebuilding.",
  },
  {
    desc: "A multi-site platform to amplify community-driven conservation action",
    client: "CONSERVATION LEGACY",
    slug: "conservation-platform-amplify",
    date: "2026-03-10",
    excerpt: "Placeholder about building a multi-site platform that supports community conservation efforts.",
  },
];


const Intro_Hero = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/posts?limit=3')
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setPosts(data.posts || []);
      })
      .catch(() => {
        if (!mounted) return;
        setPosts([]);
      });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <style>{`
        .dialogue-hero * { box-sizing: border-box; }
        .dialogue-hero {
          font-family: var(--font-family-body);
          background-color: #eae8e1;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* NAV */
        .mh-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 48px;
          position: relative;
          z-index: 10;
        }
        .mh-logo {
          font-family: var(--font-family-body);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.04em;
          color: #1a1814;
          text-transform: lowercase;
        }
        .mh-logo span { color: #e8533a; }
        .mh-nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .mh-nav-links a {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #1a1814;
          text-decoration: none;
        }
        .mh-nav-links a:hover { color: #e8533a; }

        /* HERO BODY */
        .mh-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          flex: 1;
          position: relative;
        }

        /* LEFT */
        .mh-left {
          padding: 40px 48px 40px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .mh-eyebrow {
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #1a1814;
          margin-bottom: 28px;
        }
        .mh-headline {
          font-family: var(--font-family-heading);
          font-size: var(--fs-xxl);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: #1a1814;
          margin: 0 0 32px 0;
        }
        .mh-headline em {
          font-style: italic;
          color: #1a1814;
        }
        .mh-subtext {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.65;
          color: #3d3730;
          max-width: 400px;
          margin-bottom: 0;
        }
        .mh-subtext a {
          color: #1a1814;
          border-bottom: 1px solid #1a1814;
          text-decoration: none;
        }
        .mh-subtext a:hover { color: #e8533a; border-color: #e8533a; }

        /* ILLUSTRATION (center overlap) */
        .mh-illustration {
          position: absolute;
          left: 42%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 360px;
          height: 340px;
          z-index: 1;
          pointer-events: none;
        }

        /* RIGHT — orange panel */
        .mh-right {
          background-color: #e8533a;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .mh-case-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          justify-content: center;
        }
        .mh-case-item {
          display: block;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: opacity 0.2s;
          text-decoration: none;
        }
        .mh-case-item:first-child { border-top: 1px solid rgba(255,255,255,0.2); }
        .mh-case-item:hover { opacity: 0.85; }
        .mh-case-desc {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.45;
          color: #fff;
          margin-bottom: 8px;
          margin-top: 0;
        }
        .mh-case-client {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }
        .mh-see-more {
          margin-top: 36px;
        }
        .mh-see-more button {
          background: #1a1814;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-family: var(--font-family-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mh-see-more button:hover { background: #3d3730; }

        /* FOOTER */
        .mh-footer {
          background: #F0F0F0;
          padding: 40px 48px 24px;
          border-top: 1px solid #ddd;
        }
        .mh-footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        .mh-say-hi {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 13px;
          font-weight: 400;
          color: #1a1814;
          margin-bottom: 8px;
          display: block;
        }
        .mh-footer-contact a {
          font-size: 14px;
          color: #1a1814;
          text-decoration: underline;
          margin-right: 24px;
        }
        .mh-footer-badges {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .mh-badge {
          width: 48px;
          height: 48px;
          background: #eae8e1;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; text-align: center; color: #666; font-weight: 500;
          line-height: 1.2;
        }
        .mh-footer-nav {
          display: flex;
          gap: 14px;
          margin-bottom: 28px;
        }
        .mh-footer-nav a {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.11em;
          color: #1a1814;
          text-decoration: none;
        }
        .mh-footer-nav a:hover { color: #e8533a; }
        .mh-footer-bottom {
          border-top: 1px solid #eee;
          padding-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
        }
        .mh-footer-fine {
          font-size: 11px;
          color: #888;
          line-height: 1.6;
          max-width: 580px;
        }
        .mh-footer-fine a { color: #e8533a; }
        .mh-footer-social {
          display: flex;
          gap: 20px;
        }
        .mh-footer-social a {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          color: #1a1814;
          text-decoration: none;
        }
        .mh-footer-social a:hover { color: #e8533a; }

        @media (max-width: 768px) {
          .mh-nav { padding: 20px 24px; }
          .mh-nav-links { display: none; }
          .mh-body { grid-template-columns: 1fr; }
          .mh-left { padding: 40px 24px; }
          .mh-right { padding: 36px 24px; }
          .mh-illustration { display: none; }
          .mh-footer { padding: 32px 24px 20px; }
          .mh-footer-top { flex-direction: column; gap: 20px; }
          .mh-footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* ✅ Single root wrapper — controls all left-edge alignment */}
      <div className="dialogue-hero">

        {/* NAV */}
        <nav className="mh-nav">
        </nav>

        {/* HERO BODY */}
        <div className="mh-body">
          {/* Decorative illustration (overlapping center) */}
          <div className="mh-illustration">
            <IllustrationBlob />
          </div>

          {/* LEFT */}
          <div className="mh-left">
            <FadeIn direction="down" delay={0.1}>
              <p className="mh-eyebrow">Dialogue Works • Community-led Peacebuilding</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mh-headline">
                Perspective builds <em>lasting peace.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mh-subtext">
                We're a <a href="/team">team of facilitators, researchers, and
                community practitioners</a> dedicated to helping communities
                surface shared priorities, design locally-led solutions, and
                build the trust needed for durable peace. We partner with local
                leaders, civil society, and institutions to turn conversations
                into action.
              </p>
            </FadeIn>
          </div>

          {/* RIGHT – orange case study panel */}
          <FadeIn delay={0.15} direction="left" className="mh-right">
            <div className="mh-case-list">
              {(posts && posts.length > 0 ? posts : caseStudies).map((item, i) => {
                const href = item.slug ? `/blog/${item.slug}` : '#';
                const title = item.title || item.desc;
                const sub = item.date
                  ? new Date(item.date).toLocaleDateString()
                  : (item.excerpt || item.client || '');
                return (
                  <Link key={i} href={href} className="mh-case-item">
                    <p className="mh-case-desc">{title}</p>
                    <span className="mh-case-client">{sub}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mh-see-more">
              <a href="/blog "><button>View all posts</button></a>
            </div>
          </FadeIn>
        </div>

        {/* FOOTER — now a direct child of dialogue-hero, aligned to same left edge */}
        <footer className="mh-footer">
          <div className="mh-footer-top">
            <div>
              <span className="mh-say-hi">Say Hi!</span>
              <div className="mh-footer-contact">
                <a href="mailto:hello@dialogueworks.org">hello@dialogueworks.org</a>
                <a href="tel:+254712121500">+254 712 121 500</a>
              </div>
            </div>
            <div className="mh-footer-badges">
              <div className="mh-badge">B CORP<br/>CERTIFIED</div>
              <div className="mh-badge">FOR THE<br/>PLANET</div>
            </div>
          </div>

          <nav className="mh-footer-nav">
            {["Work", "About", "Services", "Careers", "Contact"].map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>

          <div className="mh-footer-bottom">
            <p className="mh-footer-fine">
              Dialogue Works has been proudly headquartered in the heart of Nairobi,
              Kenya since 2013. We have teammates in Sierra Leone, Tanzania, and Nigeria, and
              plan, design, and develop peace-centered programs and tools for clients
              everywhere in between.{" "}
              <a href="/contact">Looking for our office?</a>
            </p>
            <div className="mh-footer-social">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Intro_Hero;