import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["EVERY", "DECISION", "LEAVES", "A", "MARK."];

const IntroSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("intro_played");
    if (alreadyPlayed) {
      onComplete();
      return;
    }

    // Build words one by one
    const wordTimers = words.map((_, i) =>
      setTimeout(() => setWordIndex(i + 1), 400 + i * 450)
    );

    const timers = [
      // Phase 1 — word by word reveal
      setTimeout(() => setPhase(1), 200),
      // Phase 2 — fade out words
      setTimeout(() => setPhase(2), 400 + words.length * 450 + 600),
      // Phase 3 — amber dot pulses in
      setTimeout(() => setPhase(3), 400 + words.length * 450 + 1200),
      // Phase 4 — "It started here." appears under dot
      setTimeout(() => setPhase(4), 400 + words.length * 450 + 2000),
      // Phase 5 — fade out dot scene
      setTimeout(() => setPhase(5), 400 + words.length * 450 + 3400),
      // Phase 6 — dots
      setTimeout(() => setPhase(6), 400 + words.length * 450 + 3900),
      // Phase 7 — fade out dots
      setTimeout(() => setPhase(7), 400 + words.length * 450 + 5000),
      // Phase 8 — THIS IS A LIFE
      setTimeout(() => setPhase(8), 400 + words.length * 450 + 5500),
      // Phase 9 — fade everything out
      setTimeout(() => setPhase(9), 400 + words.length * 450 + 7800),
      // Done
      setTimeout(() => {
        sessionStorage.setItem("intro_played", "true");
        onComplete();
      }, 400 + words.length * 450 + 8600),
    ];

    return () => {
      wordTimers.forEach(clearTimeout);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  const alreadyPlayed =
    typeof window !== "undefined" && sessionStorage.getItem("intro_played");
  if (alreadyPlayed) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 200, background: "#050507" }}
      animate={phase >= 9 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <AnimatePresence mode="wait">

        {/* PHASE 1 — Words appear one by one */}
        {phase === 1 && phase < 2 && (
          <motion.div
            key="words"
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className="font-display tracking-[0.16em]"
                  style={{
                    fontSize: "clamp(28px,5vw,72px)",
                    color: i === words.length - 1 ? "#f59e0b" : "white",
                    lineHeight: 1,
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    wordIndex > i
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* PHASE 2 — blank transition */}
        {phase === 2 && (
          <motion.div
            key="blank1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <span />
          </motion.div>
        )}

        {/* PHASE 3+4 — Amber dot then text */}
        {(phase === 3 || phase === 4) && (
          <motion.div
            key="dot-scene"
            className="flex flex-col items-center"
            style={{ gap: 32 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Dot */}
            <div className="relative flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 22 + (i + 1) * 22,
                    height: 22 + (i + 1) * 22,
                    border: "1px solid #f59e0b",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.4, 2] }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
              <motion.div
                className="rounded-full"
                style={{
                  width: 22,
                  height: 22,
                  background: "#f59e0b",
                  boxShadow:
                    "0 0 28px #f59e0b, 0 0 70px rgba(245,158,11,0.4)",
                  zIndex: 2,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </div>

            {/* "It started here." — only appears in phase 4 */}
            <AnimatePresence>
              {phase === 4 && (
                <motion.p
                  key="started"
                  className="font-mono-label tracking-[0.28em]"
                  style={{
                    fontSize: "clamp(13px,1.8vw,20px)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  It started here.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* PHASE 5 — blank */}
        {phase === 5 && (
          <motion.div
            key="blank2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <span />
          </motion.div>
        )}

        {/* PHASE 6 — dots */}
        {phase === 6 && (
          <motion.p
            key="dots"
            className="font-mono-label tracking-[0.5em]"
            style={{ color: "rgba(255,255,255,0.2)", fontSize: 18 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            · · · · · · · · · · · · ·
          </motion.p>
        )}

        {/* PHASE 7 — blank */}
        {phase === 7 && (
          <motion.div
            key="blank3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <span />
          </motion.div>
        )}

        {/* PHASE 8 — THIS IS A LIFE. START ANYWHERE. */}
        {phase === 8 && (
          <motion.div
            key="final"
            className="flex flex-col items-center text-center"
            style={{ gap: 16 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="font-display tracking-[0.16em]"
              style={{
                fontSize: "clamp(32px,5.5vw,80px)",
                color: "white",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              THIS IS A LIFE.
            </motion.p>
            <motion.p
              className="font-display tracking-[0.16em]"
              style={{
                fontSize: "clamp(32px,5.5vw,80px)",
                color: "#f59e0b",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              START ANYWHERE.
            </motion.p>
            <motion.p
              className="font-mono-label tracking-[0.3em]"
              style={{
                fontSize: "clamp(10px,1.2vw,13px)",
                color: "rgba(255,255,255,0.25)",
                marginTop: 8,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              · · · click a node to begin · · ·
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default IntroSequence;