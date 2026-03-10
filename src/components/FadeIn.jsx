"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 1,
  className = "",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [delay, direction, distance, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
