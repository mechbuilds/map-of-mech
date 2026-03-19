import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BLOG_POSTS, PILLARS } from "@/data/blog";
import PageFooter from "@/components/PageFooter";
import DisclaimerModal from "@/components/DisclaimerModal";

const BlogPage = () => {
  const [activePillar, setActivePillar] = useState("ALL");
  const navigate = useNavigate();

  const filtered =
    activePillar === "ALL"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.pillar === activePillar);

  return (
    <>
      <DisclaimerModal />
      <motion.div
        className="min-h-screen"
        style={{ background: "#050507", padding: "62px 46px 140px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero */}
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            marginBottom: 52,
            paddingBottom: 40,
          }}
        >
          <p
            className="font-mono-label tracking-[0.38em] mb-[14px]"
            style={{ fontSize: "11px", color: "#f87171" }}
          >
            TRANSMISSIONS FROM THE MAP
          </p>
          <h1
            className="font-display leading-[0.88]"
            style={{ fontSize: "clamp(64px,11vw,150px)", margin: "0 0 18px" }}
          >
            THE
            <br />
            SIGNAL
          </h1>
          <p
            className="font-body tracking-[0.1em]"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}
          >
            Facts. Stories. Zero Filter.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-[6px] mb-[46px]">
          {PILLARS.map((p) => (
            <button
              key={p}
              data-hover="true"
              onClick={() => setActivePillar(p)}
              className="font-display tracking-[0.2em] px-4 py-2 transition-colors"
              style={{
                fontSize: "11.5px",
                borderRadius: 1,
                border: `1px solid ${
                  activePillar === p ? "white" : "rgba(255,255,255,0.1)"
                }`,
                background: activePillar === p ? "white" : "transparent",
                color:
                  activePillar === p ? "#050507" : "rgba(255,255,255,0.32)",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="max-w-[1080px]"
          style={{ columns: "2 320px", columnGap: 14 }}
        >
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              data-hover="true"
              className="relative overflow-hidden mb-[14px]"
              style={{
                breakInside: "avoid" as const,
                background: "#0b0b0f",
                borderTop: `2px solid ${post.pillarColor}`,
                padding: post.wide ? "34px 30px 28px" : "26px 24px 22px",
                cursor: "none",
              }}
              onClick={() => navigate(`/blog/${post.id}`)}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{
                backgroundColor: "#0f0f14",
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: 100,
                  height: 100,
                  background: `radial-gradient(at top right, ${post.pillarColor}12 0%, transparent 70%)`,
                }}
              />
              <p
                className="font-mono-label tracking-[0.32em] mb-[13px]"
                style={{ fontSize: "10px", color: post.pillarColor }}
              >
                {post.pillar}
              </p>
              <h3
                className="font-display leading-[1.08] mb-[14px]"
                style={{
                  fontSize: post.wide
                    ? "clamp(22px,2.8vw,36px)"
                    : "clamp(18px,2.2vw,27px)",
                }}
              >
                {post.headline}
              </h3>
              <p
                className="font-body mb-4"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.65,
                }}
              >
                {post.teaser}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p
                  className="font-mono-label tracking-[0.16em]"
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {post.readTime} read
                </p>
                <p
                  className="font-mono-label tracking-[0.16em]"
                  style={{
                    fontSize: "11px",
                    color: post.pillarColor,
                    opacity: 0.8,
                  }}
                >
                  READ →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <PageFooter />
      </motion.div>
    </>
  );
};

export default BlogPage;