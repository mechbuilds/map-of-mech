import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog";
import PageFooter from "@/components/PageFooter";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postIndex = BLOG_POSTS.findIndex((p) => p.id === Number(id));
  const post = BLOG_POSTS[postIndex];
  const nextPost = BLOG_POSTS[postIndex + 1] || null;
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [id]);

  if (!post) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#050507" }}
      >
        <div className="text-center">
          <p
            className="font-mono-label tracking-[0.3em]"
            style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}
          >
            POST NOT FOUND
          </p>
          <button
            data-hover="true"
            onClick={() => navigate("/blog")}
            className="font-display tracking-[0.2em] mt-6 block"
            style={{ fontSize: 14, color: "white", background: "none", border: "none" }}
          >
            ← BACK TO SIGNAL
          </button>
        </div>
      </div>
    );
  }

  // Split content into two halves for pullquote insertion
  const half = Math.floor(post.content.length / 2);
  const firstHalf = post.content.slice(0, half);
  const secondHalf = post.content.slice(half);

  return (
    <motion.div
      className="min-h-screen"
      style={{ background: "#050507", padding: "62px 46px 140px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Back button */}
        <button
          data-hover="true"
          onClick={() => navigate("/blog")}
          className="font-mono-label tracking-[0.25em] mb-12 flex items-center gap-2"
          style={{
            fontSize: 9,
            color: "rgba(255,255,255,0.82)",
            background: "none",
            border: "none",
          }}
        >
          ← BACK TO SIGNAL
        </button>

        {/* Pillar eyebrow */}
        <p
          className="font-mono-label tracking-[0.35em] mb-4"
          style={{ fontSize: "8.5px", color: post.pillarColor }}
        >
          {post.pillar}
        </p>

        {/* Headline */}
        <h1
          className="font-display leading-[1.0] mb-6"
          style={{
            fontSize: "clamp(40px,6vw,80px)",
            letterSpacing: "0.02em",
            color: "white",
          }}
        >
          {post.headline}
        </h1>

        {/* Byline */}
        <div
          className="flex items-center gap-2 mb-10"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <span className="font-mono-label tracking-[0.12em]" style={{ fontSize: "9px" }}>
            {post.author}
          </span>
          <span style={{ fontSize: 10 }}>·</span>
          <span className="font-mono-label tracking-[0.12em]" style={{ fontSize: "9px" }}>
            {post.date}
          </span>
          <span style={{ fontSize: 10 }}>·</span>
          <span className="font-mono-label tracking-[0.12em]" style={{ fontSize: "9px" }}>
            {post.readTime} read
          </span>
        </div>

        {/* Top color bar */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, ${post.pillarColor}, transparent)`,
            marginBottom: 48,
          }}
        />

        {/* Opening hook — first paragraph larger */}
        <p
          className="font-body mb-8"
          style={{
            fontSize: "clamp(17px,2vw,21px)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.75,
          }}
        >
          {post.content[0]}
        </p>

        {/* First half of content */}
        {firstHalf.slice(1).map((paragraph, i) => (
          <motion.p
            key={`first-${i}`}
            className="font-body mb-6"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.9,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Pullquote — breaks the article in the middle */}
        <motion.div
          style={{
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            borderBottom: `1px solid rgba(255,255,255,0.08)`,
            padding: "36px 0",
            margin: "48px 0",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(22px,3vw,38px)",
              color: post.pillarColor,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
            }}
          >
            {post.pullquote}
          </p>
        </motion.div>

        {/* Second half of content */}
        {secondHalf.map((paragraph, i) => (
          <motion.p
            key={`second-${i}`}
            className="font-body mb-6"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.9,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Bottom divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, rgba(255,255,255,0.06), transparent)`,
            margin: "48px 0 40px",
          }}
        />

        {/* Next article */}
        {nextPost ? (
          <div
            data-hover="true"
            onClick={() => navigate(`/blog/${nextPost.id}`)}
            style={{
              background: "#0b0b0f",
              borderTop: `2px solid ${nextPost.pillarColor}`,
              padding: "28px 30px",
              marginBottom: 16,
              cursor: "none",
            }}
          >
            <p
              className="font-mono-label tracking-[0.3em] mb-3"
              style={{ fontSize: "8px", color: nextPost.pillarColor }}
            >
              NEXT TRANSMISSION
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(18px,2.4vw,28px)",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              {nextPost.headline}
            </p>
            <p
              className="font-mono-label tracking-[0.16em] mt-3"
              style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.25)" }}
            >
              {nextPost.readTime} read →
            </p>
          </div>
        ) : null}

        {/* Back to all */}
        <button
          data-hover="true"
          onClick={() => navigate("/blog")}
          style={{
            width: "100%",
            padding: "16px",
            background: "transparent",
            border: `1px solid rgba(255,255,255,0.1)`,
            color: "rgba(255,255,255,0.82)",
            fontFamily: "Bebas Neue",
            fontSize: 14,
            letterSpacing: "0.2em",
            cursor: "none",
          }}
        >
          ← BACK TO ALL TRANSMISSIONS
        </button>
      </div>

      <PageFooter />
    </motion.div>
  );
};

export default BlogPostPage;