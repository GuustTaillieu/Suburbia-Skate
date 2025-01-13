"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { useEffect, useRef } from "react";

type Props = {
  foreground: ImageField;
  background: ImageField;
  className?: string;
  distance?: number;
};

export function ParallaxImage({
  foreground,
  background,
  className,
  distance = 3.5,
}: Props) {
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      targetPos.current = { x: xPercent * 5, y: yPercent * 5 };
    };

    function animationFrame() {
      const xDiff = targetPos.current.x - currentPos.current.x;
      const yDiff = targetPos.current.y - currentPos.current.y;
      const nextX = currentPos.current.x + xDiff * 0.1;
      const nextY = currentPos.current.y + yDiff * 0.1;

      currentPos.current = { x: nextX, y: nextY };

      if (bgRef.current && fgRef.current) {
        bgRef.current.style.transform = `translate(${nextX}%, ${nextY}%)`;
        fgRef.current.style.transform = `translate(${nextX * distance}%, ${nextY}%)`;
      }
      requestAnimationFrame(animationFrame);
    }

    window.addEventListener("mousemove", handleMouseMove);
    const frame = requestAnimationFrame(animationFrame);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={bgRef}
        className="grid col-start-1 row-start-1 transition-transform"
      >
        <PrismicNextImage field={background} className="w-11/12" alt="" />
      </div>
      <div
        ref={fgRef}
        className="grid col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
        <PrismicNextImage
          field={foreground}
          className="max-h-[500px] w-auto h-full"
          imgixParams={{
            height: 600,
          }}
        />
      </div>
    </div>
  );
}
