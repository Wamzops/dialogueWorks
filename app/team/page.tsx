"use client";

import { useState } from "react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Geralding Muiruri",
    role: "CEO and Founder",
    img: "/images/abt (9).jpeg",
  },
  {
    id: 2,
    name: "Thanji",
    role: "Lead Researcher",
    img: "/images/abt (3).jpeg",
  },

];

const TeamMemberCard = ({ member }: { member: (typeof TEAM_MEMBERS)[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Name & role */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          opacity: hovered ? 1 : 0,
        }}
      >
        <p className="text-white font-semibold text-xs leading-tight truncate">
          {member.name}
        </p>
        <p className="text-indigo-300 text-xs truncate">{member.role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => (
  <section className="bg-black text-white py-32 px-6 md:px-16 lg:px-24 xl:px-32">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left — copy */}
      <div className="flex flex-col items-center lg:items-start gap-6">
        <h2 className="font-heading fs-xl font-medium tracking-tighter leading-[0.95] h-auto italic-none max-w-xl">
          Meet the team shaping the future.
        </h2>
        <p className="text-lg md:text-xl font-light text-primary leading-relaxed max-w-4xl mx-auto h-auto">
          Our diverse team of engineers, designers, and innovators is dedicated
          to building AI agents that simplify work and empower businesses
          worldwide.
        </p>
        <button className="text-sm text-black rounded-full bg-white hover:bg-red-500 active:bg-white px-5 py-2.5 mt-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
          Join our team
        </button>
      </div>

      {/* Right — 3-per-row grid */}
      <div className="grid grid-cols-2 gap-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

    </div>
  </section>
);

export default TeamSection;