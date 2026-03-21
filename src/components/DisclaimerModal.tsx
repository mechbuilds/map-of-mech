import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DisclaimerModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("disclaimer_seen");
    if (!seen) {
      setTimeout(() => setVisible(true), 600);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("disclaimer_seen", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(6px)",
              zIndex: 300,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 301,
              width: "90vw",
              maxWidth: "520px",
              background: "#0c0c10",
              border: "1px solid rgba(248,113,113,0.3)",
              borderTop: "2px solid #f87171",
              padding: "36px 24px 32px",
              boxSizing: "border-box",
            }}
          >
            {/* Top bar accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, #f87171, transparent)",
              }}
            />

            {/* Eyebrow */}
            <p
              className="font-mono-label tracking-[0.35em]"
              style={{
                fontSize: "11px",
                color: "#f87171",
                marginBottom: 20,
              }}
            >
              BEFORE YOU READ THIS
            </p>

            {/* Headline */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(24px, 5vw, 48px)",
                color: "white",
                lineHeight: 1.0,
                letterSpacing: "0.03em",
                marginBottom: 24,
              }}
            >
              THIS BLOG HAS
              <br />
              STRONG OPINIONS.
              <br />
              <span style={{ color: "#f87171" }}>ALL OF THEM.</span>
            </h2>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(248,113,113,0.3), transparent)",
                marginBottom: 24,
              }}
            />

            {/* Body */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              This blog contains uncomfortable truths, unfiltered
              takes, and zero apologies. If you're easily offended,
              that's noted.
            </p>

            <p
              className="font-body"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              It's also not my problem.
            </p>

            {/* Button */}
            <button
              data-hover="true"
              onClick={dismiss}
              style={{
                width: "100%",
                padding: "16px",
                background: "#f87171",
                border: "none",
                color: "#050507",
                fontFamily: "Bebas Neue",
                fontSize: "18px",
                letterSpacing: "0.22em",
                marginBottom: 14,
                cursor: "pointer",
              }}
            >
              I CAN HANDLE IT →
            </button>

            {/* Small exit line */}
            <p
              className="font-mono-label tracking-[0.2em]"
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                textAlign: "center",
              }}
            >
              or leave. that's fine too.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;