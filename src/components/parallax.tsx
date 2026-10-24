"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export default function Parallax({
  children,
  className,
  distance,
}: {
  children: ReactNode;
  className?: string;
  distance: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <div ref={ref} className={className}>
      <motion.div className="parallax-layer" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
