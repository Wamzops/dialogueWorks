"use client";
import React, { useState } from "react";
import FadeIn from "@/components/FadeIn";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ── SECTION 1: Yellow hero — headline + contact details ── */}
      <section
        data-nav-theme="light"
        className="relative overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 pt-40 md:pt-52 pb-20 md:pb-32"
        style={{ backgroundColor: "#f5c800" }}
      >
        {/* Decorative blob — top right */}
        <div
          className="absolute top-0 right-0 w-56 h-56 md:w-80 md:h-80 pointer-events-none select-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)`,
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 90% 90% at 90% 10%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 90% 10%, black 40%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Orange/warm blob accent */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{ backgroundColor: "#e8a000", opacity: 0.5, filter: "blur(60px)" }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <FadeIn direction="down" className="mb-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(0,0,0,0.4)" }}>
              <a href="/" className="hover:opacity-70 transition-opacity">Dialogue Works</a>
              {" › "}Contact
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.1} className="mb-10">
            <h1
              className="font-heading font-bold tracking-tight leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", color: "#0a0a0a" }}
            >
              Think we can help? <br />
              We bet you're right.
            </h1>
          </FadeIn>

          {/* Intro */}
          <FadeIn delay={0.2} className="mb-16 max-w-2xl">
            <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.7)" }}>
              We work on all kinds of dialogue, peacebuilding, and conflict resolution
              initiatives. If you have an interesting idea or challenge, let's talk —
              it's as easy as sending us an email to get the conversation started.
              Just want to connect? That sounds great too.
            </p>
          </FadeIn>

          {/* Contact details — 3 columns */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 border-t pt-10" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(0,0,0,0.4)" }}>
                  Email
                </p>
                <a
                  href="mailto:hello@dialogueworks.org"
                  className="text-sm md:text-base font-medium transition-opacity hover:opacity-60"
                  style={{ color: "#0a0a0a" }}
                >
                  hello@dialogueworks.org
                </a>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(0,0,0,0.4)" }}>
                  Text or Call
                </p>
                <a
                  href="tel:+254712121500"
                  className="text-sm md:text-base font-medium transition-opacity hover:opacity-60"
                  style={{ color: "#0a0a0a" }}
                >
                  +254 712 121 500
                </a>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(0,0,0,0.4)" }}>
                  Address
                </p>
                <p className="text-sm md:text-base font-medium" style={{ color: "#0a0a0a" }}>
                  Westlands <br />Nairobi, Kenya
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: White — "Not sure what to say?" + mock email card ── */}
      <section
        data-nav-theme="light"
        className="px-6 sm:px-12 md:px-20 lg:px-32 py-24 md:py-40 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-6">
            <h2
              className="font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0a0a0a" }}
            >
              Not sure what to say?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mb-14 max-w-2xl">
            <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: "#555" }}>
              We know, it's hard to put yourself out there sometimes. Just tell us
              about your project and goals, or share what has you feeling stuck.
              Here's the kind of message that gets us excited:
            </p>
          </FadeIn>

          {/* Mock email card */}
          <FadeIn delay={0.2}>
            <div
              className="rounded-2xl p-8 md:p-14 shadow-xl max-w-2xl"
              style={{ backgroundColor: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 48px rgba(0,0,0,0.10)" }}
            >
              <p className="text-sm md:text-base font-light leading-[1.9]" style={{ color: "#333" }}>
                Hello Dialogue Works,
                <br /><br />
                My name is Sarah Odhiambo, and I'm the Programme Director at
                East African Peace Network. I'd love to explore a collaboration.
                <br /><br />
                We've been running community dialogue forums for a while, and our
                attempts have started and stalled in recent years because of lack of
                alignment around strategy, direction, and shared vision. When I asked
                around, my colleague recommended I get in touch with you.
                <br /><br />
                We'd love to launch a renewed initiative by the end of this year. If
                you think that's reasonable, we're looking to partner with a team
                that can take this all the way from conception to launch. You'd be
                working directly with me and our staff team for the project, and
                we'll also need input from our broader board for design approval.
                <br /><br />
                Full disclosure: I'm talking to two other agencies about this work.
                <br /><br />
                I'm happy to provide any other detail you need. If you're interested,
                let's set up a time to chat. How does next week look for you? I'm
                available Tuesday, Wednesday, and Thursday afternoons.
                <br /><br />
                Thanks,
                <br />
                Sarah
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: Yellow again — contact form ── */}
      <section
        data-nav-theme="light"
        className="relative overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 py-24 md:py-40"
        style={{ backgroundColor: "#f5c800" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <h2
              className="font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0a0a0a" }}
            >
              Say hello.
            </h2>
          </FadeIn>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Name */}
            <FadeIn delay={0.1} className="space-y-2 col-span-1">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] block" style={{ color: "rgba(0,0,0,0.45)" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Who are you?"
                className="w-full bg-transparent border-b-2 py-3 text-lg font-light outline-none transition-all placeholder:opacity-30"
                style={{ borderColor: "rgba(0,0,0,0.2)", color: "#0a0a0a" }}
                onFocus={e => e.target.style.borderColor = "#0a0a0a"}
                onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.2)"}
              />
            </FadeIn>

            {/* Email */}
            <FadeIn delay={0.15} className="space-y-2 col-span-1">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] block" style={{ color: "rgba(0,0,0,0.45)" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="How can we reach you?"
                className="w-full bg-transparent border-b-2 py-3 text-lg font-light outline-none transition-all placeholder:opacity-30"
                style={{ borderColor: "rgba(0,0,0,0.2)", color: "#0a0a0a" }}
                onFocus={e => e.target.style.borderColor = "#0a0a0a"}
                onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.2)"}
              />
            </FadeIn>

            {/* Message — full width */}
            <FadeIn delay={0.2} className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] block" style={{ color: "rgba(0,0,0,0.45)" }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={5}
                className="w-full bg-transparent border-b-2 py-3 text-lg font-light outline-none transition-all placeholder:opacity-30 resize-none"
                style={{ borderColor: "rgba(0,0,0,0.2)", color: "#0a0a0a" }}
                onFocus={e => e.target.style.borderColor = "#0a0a0a"}
                onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.2)"}
              />
            </FadeIn>

            {/* Submit */}
            <FadeIn delay={0.25} className="col-span-1 md:col-span-2 pt-4">
              <button
                type="submit"
                className="px-12 py-5 font-bold rounded-full uppercase tracking-widest text-[12px] transition-all duration-300 bg-[#0a0a0a] text-white hover:bg-white hover:text-[#0a0a0a]"
              >
                Send Message
              </button>
            </FadeIn>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactHero;