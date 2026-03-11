"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — Genesis-style granular scroll reveal, every page.
 *
 * Strategy:
 *  1. Collect candidate elements at multiple levels (sections → headings → paragraphs).
 *  2. De-duplicate: skip any element whose ancestor is already a reveal target
 *     (prevents the parent AND child both fading in and looking jittery).
 *  3. Auto-stagger siblings within the same parent (90ms apart, max 600ms).
 *  4. IntersectionObserver fires at 5% visibility — element glides in as it enters.
 *
 * Transition params live in globals.css (.reveal / .reveal.is-visible).
 */

/** Ordered from coarse containers → fine-grained leaf nodes */
const CANDIDATE_SELECTORS = [
  // ── Structural ──────────────────────────────────────────
  "header",
  "footer",
  "section",
  "main > *",
  "article",
  // ── Section children (one level in) ─────────────────────
  "section > *",
  "article > *",
  // ── Semantic content ─────────────────────────────────────
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "ul",
  "ol",
  "blockquote",
  "figure",
  "table",
  "form",
];

const STAGGER_STEP_MS = 90;
const MAX_STAGGER_MS = 600;

const ScrollReveal = () => {
  useEffect(() => {
    // ── 1. Collect all candidates in DOM order ──────────────
    const seen = new Set();
    const candidates = [];

    CANDIDATE_SELECTORS.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          if (!seen.has(el)) {
            seen.add(el);
            candidates.push(el);
          }
        });
      } catch (_) {
        /* ignore bad selectors */
      }
    });

    // ── 2. Filter: skip if an ancestor is already a target ──
    const targetSet = new Set(candidates);
    const targets = candidates.filter((el) => {
      let node = el.parentElement;
      while (node && node !== document.body) {
        if (targetSet.has(node)) return false; // ancestor will animate — skip child
        node = node.parentElement;
      }
      return true;
    });

    // ── 3. Apply reveal class + per-sibling stagger delay ───
    targets.forEach((el) => {
      const parent = el.parentElement;
      const siblingIndex = parent ? [...parent.children].indexOf(el) : 0;
      const delay = Math.min(siblingIndex * STAGGER_STEP_MS, MAX_STAGGER_MS);

      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("reveal");
    });

    // ── 4. Observe — toggle is-visible on entry ─────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small extra pause for non-first siblings so the stagger feels intentional
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
