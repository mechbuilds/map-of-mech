import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 250, damping: 28 });
  const springY = useSpring(0, { stiffness: 250, damping: 28 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("[data-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", checkHover);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [springX, springY, visible]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;
  if (!visible) return null;

  return (
    <>
      {/* Main dot — sharp, instant */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9999,
          left: pos.x - (hovering ? 5 : 3),
          top: pos.y - (hovering ? 5 : 3),
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
          borderRadius: "50%",
          background: "white",
          boxShadow: hovering
            ? "0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.6)"
            : "0 0 6px rgba(255,255,255,0.9)",
          transition: "width 0.12s, height 0.12s, box-shadow 0.12s",
        }}
      />

      {/* Outer ring — smooth spring follow */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9998,
          x: springX,
          y: springY,
          marginLeft: hovering ? -24 : -18,
          marginTop: hovering ? -24 : -18,
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: "50%",
          border: hovering
            ? "1px solid rgba(255,255,255,0.55)"
            : "1px solid rgba(255,255,255,0.22)",
          transition: "width 0.18s, height 0.18s, margin 0.18s, border 0.18s",
        }}
      />

      {/* Second inner ring — appears only on hover */}
      {hovering && (
        <motion.div
          className="fixed pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{
            zIndex: 9997,
            x: springX,
            y: springY,
            marginLeft: -10,
            marginTop: -10,
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;