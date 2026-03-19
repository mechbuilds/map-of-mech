import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChapterNode, NODES } from "@/data/chapters";

interface StoryPanelProps {
  node: ChapterNode | null;
  onClose: () => void;
  onNext: (id: number) => void;
}

const TypewriterHeadline = ({ text, color }: { text: string; color: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 13);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2
      className="font-display leading-[1.04] tracking-[0.03em] whitespace-pre-line"
      style={{ fontSize: "clamp(28px,3.6vw,52px)" }}
    >
      {displayed}
      {!done && (
        <span
          className="inline-block w-[2px] h-[1em] ml-1 animate-pulse"
          style={{ background: color, verticalAlign: "text-bottom" }}
        />
      )}
    </h2>
  );
};

const StoryPanel = ({ node, onClose, onNext }: StoryPanelProps) => {
  const navigate = useNavigate();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!node) return null;

  const colorRgb = node.color;
  const nextNode = node.nextId ? NODES.find((n) => n.id === node.nextId) : null;

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          className="fixed top-0 right-0 h-screen overflow-y-auto"
          style={{
            zIndex: 50,
            width: "clamp(290px, 42vw, 600px)",
            background: "linear-gradient(160deg, #0e0e12 0%, #090910 100%)",
            borderLeft: `1.5px solid ${colorRgb}99`,
            boxShadow: `-40px 0 100px ${colorRgb}0d`,
          }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "110%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 34 }}
        >
          {/* Top color bar */}
          <div
            className="w-full"
            style={{
              height: "2.5px",
              background: `linear-gradient(90deg, ${colorRgb}, transparent)`,
            }}
          />

          {/* Header */}
          <div className="px-[30px] pt-7">
            <div className="flex items-center justify-between">
              <span
                className="font-mono-label tracking-[0.35em]"
                style={{ fontSize: "8.5px", color: colorRgb }}
              >
                {node.tag}
              </span>
              <button
                data-hover="true"
                onClick={onClose}
                className="font-mono-label px-[13px] py-[5px] rounded-sm"
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ESC
              </button>
            </div>

            <div
              className="my-3"
              style={{
                width: 28,
                height: 1,
                background: `${colorRgb}80`,
              }}
            />

            <TypewriterHeadline text={node.headline} color={colorRgb} />
          </div>

          {/* Body */}
          <div className="px-[30px] mt-6">
            {node.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="font-body mb-[18px]"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.63)",
                  lineHeight: 1.88,
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.14, duration: 0.4 }}
              >
                {p}
              </motion.p>
            ))}

            {/* Pullquote */}
            <motion.div
              className="my-7"
              style={{
                borderLeft: `3px solid ${colorRgb}`,
                background: `${colorRgb}0d`,
                padding: "18px 20px 18px 22px",
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
            >
              <p
                className="font-display tracking-[0.04em] leading-[1.3]"
                style={{
                  fontSize: "clamp(17px,2.2vw,25px)",
                  color: colorRgb,
                }}
              >
                "{node.pullquote}"
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="px-[30px] pt-[18px] pb-7">
            <div
              className="mb-[18px]"
              style={{
                height: 1,
                background: `linear-gradient(90deg, ${colorRgb}59, transparent)`,
              }}
            />

            {node.ctaRoute ? (
              <button
                data-hover="true"
                onClick={() => navigate(node.ctaRoute!)}
                className="w-full py-4 font-display tracking-[0.2em]"
                style={{
                  fontSize: "17px",
                  background: colorRgb,
                  color: "#050507",
                  border: "none",
                }}
              >
                {node.ctaLabel}
              </button>
            ) : nextNode ? (
              <button
                data-hover="true"
                onClick={() => onNext(node.nextId!)}
                className="w-full py-4 font-display tracking-[0.2em]"
                style={{
                  fontSize: "17px",
                  background: "transparent",
                  color: colorRgb,
                  border: `1px solid ${colorRgb}73`,
                }}
              >
                NEXT CHAPTER →
              </button>
            ) : null}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryPanel;
