"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 0,
  duration = 0.5,
  stagger = 0.08,
  ease = "power2.out",
  splitType = "chars", // <--- This was missing in the previous version
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current); // Unobserve after triggering
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useGSAP(() => {
    if (inView && ref.current) {
      const elements = ref.current.querySelectorAll(".split-element");
      
      gsap.fromTo(
        elements,
        { ...from },
        {
          ...to,
          duration,
          delay,
          ease,
          stagger,
          onComplete: onLetterAnimationComplete,
        }
      );
    }
  }, [inView, delay, duration, ease, from, to, stagger, onLetterAnimationComplete]);

  const renderContent = () => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="split-element inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </span>
      ));
    }

    if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="split-element inline-block mr-[0.25em]"
          style={{ whiteSpace: "nowrap" }}
        >
          {word}
        </span>
      ));
    }

    return <span className="split-element inline-block">{text}</span>;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ textAlign, overflow: "hidden" }}
    >
      {renderContent()}
    </div>
  );
};

export default SplitText;