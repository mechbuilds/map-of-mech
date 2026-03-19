import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NODES } from "@/data/chapters";
import WorldMapSVG from "@/components/WorldMapSVG";
import PhilippineSVG from "@/components/PhilippineSVG";
import StoryPanel from "@/components/StoryPanel";
import IntroSequence from "@/components/IntroSequence";

const NODE_POSITIONS = NODES.map((n) => ({
  left: parseFloat(n.left),
  top: parseFloat(n.top),
}));

const MapNode = ({
  node,
  active,
  panelOpen,
  isActiveNode,
  onClick,
  introComplete,
  index,
}: {
  node: (typeof NODES)[0];
  active: boolean;
  panelOpen: boolean;
  isActiveNode: boolean;
  onClick: () => void;
  introComplete: boolean;
  index: number;
}) => {
  const ringSizes = [48, 68, 88];
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{
        left: node.left,
        top: node.top,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        opacity: panelOpen && !isActiveNode ? 0.08 : 1,
        transition: "opacity 0.5s",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={
        introComplete
          ? { scale: 1, opacity: panelOpen && !isActiveNode ? 0.08 : 1 }
          : {}
      }
      transition={{
        type: "spring",
        delay: index * 0.1,
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="relative flex items-center justify-center">
        {ringSizes.map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: `1px solid ${node.color}40`,
              animation: `node-pulse ${2.8 + i * 0.4}s ease-out ${i * 0.35}s infinite`,
            }}
          />
        ))}
        <button
          data-hover="true"
          onClick={onClick}
          className="rounded-full relative z-10 transition-all duration-300"
          style={{
            width: active ? 28 : 22,
            height: active ? 28 : 22,
            background: `radial-gradient(circle, ${node.color}, ${node.color}cc)`,
            boxShadow: active
              ? `0 0 32px ${node.color}, 0 0 70px ${node.color}55, inset 0 0 12px ${node.color}88`
              : `0 0 18px ${node.color}, 0 0 40px ${node.color}33`,
          }}
        />
      </div>
      <span
        className="font-display mt-4 text-center whitespace-nowrap tracking-[0.22em]"
        style={{
          fontSize: "14px",
          color: node.color,
          textShadow: `0 0 18px ${node.color}a6`,
        }}
      >
        {node.label}
      </span>
      <span
        className="font-mono-label mt-1 text-center"
        style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}
      >
        {node.sublabel}
      </span>
    </motion.div>
  );
};

const ConnectionLines = ({
  visited,
  activeNode,
  introComplete,
}: {
  visited: Set<number>;
  activeNode: number | null;
  introComplete: boolean;
}) => {
  const lines = [];
  for (let i = 0; i < NODES.length - 1; i++) {
    const a = NODE_POSITIONS[i];
    const b = NODE_POSITIONS[i + 1];
    const mx = (a.left + b.left) / 2;
    const my =
      (a.top + b.top) / 2 - Math.abs(b.left - a.left) * 0.16;

    const isActive =
      activeNode === NODES[i].id || activeNode === NODES[i + 1].id;
    const isVisited =
      visited.has(NODES[i].id) || visited.has(NODES[i + 1].id);
    const lit = isActive || isVisited;

    const colorNode = isActive
      ? NODES.find((n) => n.id === activeNode)
      : isVisited
      ? NODES[i]
      : null;
    const color =
      lit && colorNode ? colorNode.color : "rgba(255,255,255,0.08)";

    lines.push(
      <motion.path
        key={`${i}-${lit}`}
        d={`M ${a.left} ${a.top} Q ${mx} ${my} ${b.left} ${b.top}`}
        stroke={color}
        strokeWidth={lit ? 0.6 : 0.3}
        strokeOpacity={lit ? 0.5 : 0.4}
        fill="none"
        filter={lit ? "url(#glow)" : undefined}
        initial={{ pathLength: 0 }}
        animate={
          introComplete
            ? { pathLength: 1, opacity: lit ? 0.5 : 0.15 }
            : {}
        }
        transition={{
          duration: 2.8,
          delay: i * 0.35,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 4 }}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {lines}
    </svg>
  );
};

const AnimatedPlane = ({
  introComplete,
  activeNode,
}: {
  introComplete: boolean;
  activeNode: number | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const tRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!introComplete) return;

    const currentIndex = activeNode
      ? NODES.findIndex((n) => n.id === activeNode)
      : 0;

    const fromIndex = currentIndex;
    const toIndex =
      currentIndex < NODES.length - 1 ? currentIndex + 1 : 0;

    const from = NODE_POSITIONS[fromIndex];
    const to = NODE_POSITIONS[toIndex];

    const cx = (from.left + to.left) / 2;
    const cy =
      (from.top + to.top) / 2 -
      Math.abs(to.left - from.left) * 0.16;

    tRef.current = 0;

    const animate = () => {
      tRef.current += 0.003;
      if (tRef.current > 1) tRef.current = 0;
      const t = tRef.current;

      const x =
        (1 - t) * (1 - t) * from.left +
        2 * (1 - t) * t * cx +
        t * t * to.left;
      const y =
        (1 - t) * (1 - t) * from.top +
        2 * (1 - t) * t * cy +
        t * t * to.top;

      const dx =
        2 * (1 - t) * (cx - from.left) + 2 * t * (to.left - cx);
      const dy =
        2 * (1 - t) * (cy - from.top) + 2 * t * (to.top - cy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (ref.current) {
        ref.current.style.left = `${x}%`;
        ref.current.style.top = `${y}%`;
        ref.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [introComplete, activeNode]);

  if (!introComplete) return null;

  const activeColor = activeNode
    ? NODES.find((n) => n.id === activeNode)?.color || "#c084fc"
    : "#c084fc";

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        zIndex: 5,
        fontSize: "16px",
        color: activeColor,
        textShadow: `0 0 8px ${activeColor}, 0 0 16px ${activeColor}66`,
        transition: "color 0.5s, text-shadow 0.5s",
      }}
    >
      ✈
    </div>
  );
};

const ProgressBars = ({ visited }: { visited: Set<number> }) => (
  <div className="flex gap-[6px] mt-3">
    {NODES.map((n) => (
      <motion.div
        key={n.id}
        className="rounded-sm"
        style={{
          height: 2,
          background: visited.has(n.id)
            ? n.color
            : "rgba(255,255,255,0.12)",
          boxShadow: visited.has(n.id)
            ? `0 0 6px ${n.color}66`
            : "none",
        }}
        animate={{ width: visited.has(n.id) ? 22 : 6 }}
        transition={{ duration: 0.4 }}
        layout
      />
    ))}
  </div>
);

const MapPage = () => {
  const [introComplete, setIntroComplete] = useState(
    () => sessionStorage.getItem("intro_played") === "true"
  );
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const [hintVisible, setHintVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIntroComplete = useCallback(
    () => setIntroComplete(true),
    []
  );

  useEffect(() => {
    if (introComplete && activeNode === null) {
      const t = setTimeout(() => setHintVisible(true), 1000);
      return () => clearTimeout(t);
    }
  }, [introComplete, activeNode]);

  const openNode = (id: number) => {
    setActiveNode(id);
    setVisited((prev) => new Set(prev).add(id));
    setHintVisible(false);
  };

  const activeChapter =
    activeNode
      ? NODES.find((n) => n.id === activeNode) || null
      : null;

  // ── MOBILE LAYOUT ──────────────────────────────────────────
  if (isMobile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(ellipse at 50% 40%, #0a0a12 0%, #050507 60%, #020204 100%)",
          padding: "80px 24px 140px",
          overflowY: "auto",
        }}
      >
        {!introComplete && (
          <IntroSequence onComplete={handleIntroComplete} />
        )}

        {/* Top left block */}
        <div style={{ marginBottom: 40 }}>
          <h1
            className="font-display tracking-[0.16em]"
            style={{ fontSize: "clamp(20px, 6vw, 28px)", color: "white" }}
          >
            THE MAP OF MECH
          </h1>
          <p
            className="font-mono-label tracking-[0.24em] mt-[6px]"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}
          >
            Every life is a journey. This one is mine.
          </p>
          <ProgressBars visited={visited} />
        </div>

        {/* Vertical node list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {NODES.map((node) => (
            <div
              key={node.id}
              data-hover="true"
              onClick={() => openNode(node.id)}
              style={{
                background: "#0c0c10",
                borderLeft: `3px solid ${node.color}`,
                borderTop: `1px solid rgba(255,255,255,0.06)`,
                padding: "20px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                cursor: "pointer",
                opacity: introComplete ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              {/* Node dot */}
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: node.color,
                  boxShadow: `0 0 12px ${node.color}, 0 0 24px ${node.color}44`,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  className="font-display tracking-[0.18em]"
                  style={{ fontSize: 13, color: node.color }}
                >
                  {node.label}
                </div>
                <div
                  className="font-mono-label tracking-[0.12em]"
                  style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 3 }}
                >
                  {node.sublabel}
                </div>
              </div>
              <div
                className="font-mono-label tracking-[0.15em]"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                  marginLeft: "auto",
                }}
              >
                READ →
              </div>
            </div>
          ))}
        </div>

        {/* Story Panel */}
        <StoryPanel
          node={activeChapter}
          onClose={() => setActiveNode(null)}
          onNext={(id) => openNode(id)}
        />
      </div>
    );
  }

  // ── DESKTOP LAYOUT ─────────────────────────────────────────
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #0a0a12 0%, #050507 60%, #020204 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          top: "30%",
          left: "40%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          top: "20%",
          left: "15%",
          width: "30%",
          height: "30%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.025) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {!introComplete && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      <WorldMapSVG />
      <PhilippineSVG active={activeNode === 1} />
      <ConnectionLines
        visited={visited}
        activeNode={activeNode}
        introComplete={introComplete}
      />
      <AnimatedPlane
        introComplete={introComplete}
        activeNode={activeNode}
      />

      {NODES.map((node, i) => (
        <MapNode
          key={node.id}
          node={node}
          index={i}
          active={activeNode === node.id}
          panelOpen={activeNode !== null}
          isActiveNode={activeNode === node.id}
          onClick={() => openNode(node.id)}
          introComplete={introComplete}
        />
      ))}

      <div className="absolute" style={{ top: 30, left: 38, zIndex: 20 }}>
        <h1
          className="font-display tracking-[0.16em]"
          style={{ fontSize: "clamp(22px, 2.5vw, 36px)", color: "white" }}
        >
          THE MAP OF MECH
        </h1>
        <p
          className="font-mono-label tracking-[0.24em] mt-[6px]"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}
        >
          Every life is a journey. This one is mine.
        </p>
        <ProgressBars visited={visited} />
      </div>

      <AnimatePresence>
        {hintVisible && activeNode === null && (
          <motion.p
            className="absolute font-mono-label tracking-[0.32em]"
            style={{
              bottom: 72,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
              zIndex: 20,
              whiteSpace: "nowrap",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            · · · this is a life — start anywhere · · ·
          </motion.p>
        )}
      </AnimatePresence>

      <StoryPanel
        node={activeChapter}
        onClose={() => setActiveNode(null)}
        onNext={(id) => openNode(id)}
      />

      <style>{`
        @keyframes node-pulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default MapPage;