"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer (mouse)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if target or parent is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.classList.contains("interactive") ||
          target.closest(".interactive");

        setHovered(!!isClickable);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    let animationFrameId: number;

    const render = () => {
      // Smooth interpolation for trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <>
      <div
        id="cursor-dot"
        className={`${styles.cursorDot} ${visible ? styles.visible : ""} ${
          clicked ? styles.clicked : ""
        } ${hovered ? styles.hoveredDot : ""}`}
      />
      <div
        id="cursor-ring"
        className={`${styles.cursorRing} ${visible ? styles.visible : ""} ${
          clicked ? styles.clickedRing : ""
        } ${hovered ? styles.hoveredRing : ""}`}
      />
    </>
  );
}

