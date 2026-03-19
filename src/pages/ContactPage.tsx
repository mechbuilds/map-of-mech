import { useState } from "react";
import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mojkyqyv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("sent");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "#0c0c10",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    padding: "16px 4px",
    outline: "none",
    fontFamily: "DM Mono",
    fontSize: "13px",
    letterSpacing: "0.08em",
    width: "100%",
    display: "block",
    transition: "border-bottom-color 0.2s",
  };

  return (
    <motion.div
      className="min-h-screen"
      style={{ background: "#050507", padding: "78px 46px 140px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          className="font-mono-label tracking-[0.38em] mb-5"
          style={{ fontSize: "11px", color: "#f87171" }}
        >
          OPEN TRANSMISSION
        </p>

        {/* Headline */}
        <h1
          className="font-display leading-[0.92] mb-4"
          style={{
            fontSize: "clamp(46px,7.5vw,92px)",
            color: "white",
          }}
        >
          SAY SOMETHING
          <br />
          WORTH SAYING.
        </h1>

        {/* Subtitle */}
        <p
          className="font-body mb-12"
          style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
        >
          No spam. No pitch. Just signal.
          <br />
          If you have something real to say, say it.
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, rgba(248,113,113,0.3), transparent)",
            marginBottom: 48,
          }}
        />

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", padding: "60px 0" }}
          >
            <p
              className="font-display tracking-[0.1em]"
              style={{ fontSize: 36, color: "#4ade80", marginBottom: 16 }}
            >
              TRANSMISSION RECEIVED.
            </p>
            <p
              className="font-mono-label tracking-[0.2em]"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
            >
              I read everything. I reply to things worth replying to.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Name */}
              <div>
                <label
                  className="font-mono-label tracking-[0.25em]"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={fields.name}
                  onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = "rgba(248,113,113,0.6)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="font-mono-label tracking-[0.25em]"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = "rgba(248,113,113,0.6)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="font-mono-label tracking-[0.25em]"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={7}
                  placeholder="Say something real."
                  value={fields.message}
                  onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "rgba(248,113,113,0.6)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p
                  className="font-mono-label tracking-[0.15em]"
                  style={{ fontSize: "11px", color: "#f87171" }}
                >
                  Something went wrong. Try again.
                </p>
              )}

              {/* Submit */}
              <button
                data-hover="true"
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  padding: "18px",
                  background: status === "sending" ? "rgba(255,255,255,0.1)" : "white",
                  border: "none",
                  color: "#050507",
                  fontFamily: "Bebas Neue",
                  fontSize: "18px",
                  letterSpacing: "0.22em",
                  cursor: "none",
                  transition: "background 0.2s",
                }}
              >
                {status === "sending" ? "SENDING..." : "SEND TRANSMISSION"}
              </button>

              {/* Footer note */}
              <p
                className="font-mono-label tracking-[0.15em]"
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                I read everything. I reply to things worth replying to.
              </p>
            </div>
          </form>
        )}
      </div>

      <PageFooter />
    </motion.div>
  );
};

export default ContactPage;