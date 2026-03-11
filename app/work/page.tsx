"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const workCategories = [
  { label: "Community Dialogue", slug: "community-dialogue", underlined: false },
  { label: "Conflict Prevention", slug: "conflict-prevention", underlined: true },
  { label: "Mediation & Facilitation", slug: "mediation-facilitation", underlined: false },
  { label: "Transitional Justice", slug: "transitional-justice", underlined: true },
  { label: "Peacebuilding Research", slug: "peacebuilding-research", underlined: false },
  { label: "Capacity Strengthening", slug: "capacity-strengthening", underlined: true },
];

// Decorative SVG doodle — abstract wavy/dotted organic shapes inspired by the original
function DecoRight() {
  return (
    <svg
      viewBox="0 0 320 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", opacity: 0.85 }}
    >
      {/* Large outline face/figure suggestion */}
      <ellipse cx="230" cy="160" rx="80" ry="110" stroke="#e8360a" strokeWidth="2.5" fill="none" />
      <ellipse cx="215" cy="120" rx="28" ry="38" stroke="#e8360a" strokeWidth="2" fill="none" />
      <path d="M170 200 Q200 240 180 290 Q160 340 190 380" stroke="#e8360a" strokeWidth="2" fill="none" />
      {/* Dotted pattern cluster bottom right */}
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={180 + col * 11}
            cy={400 + row * 11}
            r="2"
            fill="#e8360a"
            opacity={0.7}
          />
        ))
      )}
      {/* Wavy lines top right */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M260 ${30 + i * 14} Q290 ${38 + i * 14} 310 ${30 + i * 14} Q330 ${22 + i * 14} 360 ${30 + i * 14}`}
          stroke="#1a0cdb"
          strokeWidth="1.8"
          fill="none"
          opacity="0.5"
        />
      ))}
      {/* Cross-hatch blob */}

      <path
        d="M240 300 Q280 270 300 310 Q320 350 280 370 Q240 390 220 355 Q200 320 240 300Z"
        stroke="#e8360a"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function DecoRightCTA() {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", opacity: 0.75 }}
    >
      {/* Abstract figure outline */}
      <ellipse cx="160" cy="90" rx="55" ry="75" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
      <ellipse cx="148" cy="60" rx="20" ry="28" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M120 155 Q140 185 125 220 Q110 255 135 285" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      {/* Dotted cluster */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={155 + col * 10}
            cy={210 + row * 10}
            r="1.8"
            fill="#e8360a"
            opacity={0.65}
          />
        ))
      )}
    </svg>
  );
}

export default function WorkPage() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-body" style={{ margin: 0, padding: 0 }}>
      <style>{`
        /* fonts are provided globally via globals.css */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .fade-in {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .work-cat {
          font-family: var(--font-family-heading);
          font-size: clamp(1.15rem, 2.2vw, 1.55rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.55;
          cursor: pointer;
          transition: color 0.2s;
          display: block;
        }
        .work-cat:hover { color: #f5d24b; }
        .work-cat.underlined { text-decoration: underline; text-underline-offset: 3px; }

        .see-all-btn {
          display: inline-block;
          margin-top: 1.8rem;
          background: #1a1714;
          color: #fff;
          font-family: var(--font-family-body);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.75rem 1.5rem;
          border: none;
          cursor: pointer;
          transition: background 0.25s;
        }
        .see-all-btn:hover { background: #333; }

        .lets-talk-btn {
          display: inline-block;
          margin-top: 1.6rem;
          background: #1a1714;
          color: #fff;
          font-family: var(--font-family-body);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.78rem 1.6rem;
          border: none;
          cursor: pointer;
          transition: background 0.25s;
        }
        .lets-talk-btn:hover { background: #333; }

        .nav-link {
          font-family: var(--font-family-body);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active { color: #fff; text-decoration: underline; text-underline-offset: 3px; }

        .rotated-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: var(--font-family-body);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
          white-space: nowrap;
        }
      `}</style>


      {/* ── HERO BLUE SECTION ── */}
      <section
        style={{
          background: "#1a0cdb",
          minHeight: "100vh",
          paddingTop: "clamp(90px, 12vw, 120px)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          paddingLeft: "clamp(3rem, 7vw, 7rem)",
          paddingRight: "clamp(1.5rem, 4vw, 3rem)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
  {/* Rotated side label */}
  <span className="rotated-label">Dialogue Works · Work</span>

        {/* Decorative right-side SVG */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "clamp(200px, 32vw, 380px)",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <DecoRight />
        </div>

        {/* Two-column content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr clamp(200px, 28vw, 320px)",
            gap: "clamp(3rem, 6vw, 8rem)",
            maxWidth: "1100px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LEFT: headline + body */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
              }}
            >
              We specialize in the strategies, relationships, and tools that make peace possible
            </h1>

            <div
              style={{
                fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.88)",
                maxWidth: "480px",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                Dialogue Works brings community-centred facilitation, program
                design, and applied research to help communities reduce violence
                and build resilient, locally-owned peace. We work side-by-side
                with local organisations to surface shared priorities and co-
                design interventions that fit the context.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Our partners ask us to convene dialogue processes, design
                monitoring and learning systems, and develop training that
                strengthens local capacity. We combine evidence, practice, and
                relationships to ensure interventions are sustained beyond the
                project lifecycle.
              </p>
              <p>
                Across contexts — urban, pastoral, institutional, and regional —
                we prioritise local ownership and long-term resilience. Our work
                is practical, participatory, and grounded in a commitment to
                listening well.
              </p>
            </div>
          </div>

          {/* RIGHT: explore our work */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
              paddingTop: "0.5rem",
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "1.4rem",
              }}
            >
              Explore Our Work
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
              {workCategories.map((cat, i) => (
                <Link
                  key={cat.slug}
                  href={`/work/${cat.slug}`}
                  className={`work-cat${cat.underlined ? " underlined" : ""}`}
                  onMouseEnter={() => setHoveredCat(i)}
                  onMouseLeave={() => setHoveredCat(null)}
                  style={{
                    color: hoveredCat === i ? "#f5d24b" : "#fff",
                    transition: "color 0.2s ease",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <a href="/services">
              <button className="see-all-btn">
                See more →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHT BLUE CTA SECTION ── */}
      <section
        style={{
          background: "#b8d4e8",
          padding: "clamp(4rem, 8vw, 7rem) clamp(3rem, 7vw, 7rem)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          minHeight: "340px",
        }}
      >
        {/* Decorative SVG right side */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "clamp(160px, 26vw, 300px)",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <DecoRightCTA />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(3rem, 7vw, 9rem)",
            maxWidth: "900px",
            position: "relative",
            zIndex: 2,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#1a1714",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: "320px",
              }}
            >
              We can't wait to hear what you have in mind.
            </h2>
          </div>

          {/* Right */}
          <div>
            <p
              className="font-body"
              style={{
                fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                lineHeight: 1.75,
                color: "#2a2420",
                maxWidth: "380px",
              }}
            >
              You have ideas, goals, and maybe even a little anxiety. After all, you want to get this right. That's okay—you don't have to have everything figured out. (We're really good at that part.)
            </p>
            <button className="lets-talk-btn">Let's Talk</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
        <footer
          style={{
            background: "#1a1714",
            padding: "3.5rem clamp(3rem, 7vw, 7rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
        <div className="font-heading" style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fff" }}>
          Dialogue Works
        </div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          { ["hello@dialogueworks.org", "+254 712 121 500" ].map((t) => (
            <span key={t} className="font-body" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1.8rem" }}>
          {["Instagram", "Dribbble", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-body"
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}