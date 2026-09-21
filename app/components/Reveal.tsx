"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const node = ref.current;
      if (!node) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(node, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(node, { opacity: 0, y: 18 });
      gsap.to(node, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
