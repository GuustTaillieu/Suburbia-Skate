"use client";

import { useEffect, ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export function SlideInAnimation({
  children,
  delay = 0,
  duration = 600,
}: Props) {
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = elemRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elem.style.animation = `slide-in ${duration}ms ease forwards ${delay}ms`;
          observer.unobserve(elem);
        }
      },
      {
        threshold: 0,
        rootMargin: "-150px",
      },
    );

    observer.observe(elem);

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div ref={elemRef} className="slide-in-hidden">
      {children}
    </div>
  );
}
