import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "MAP", short: "MAP", path: "/" },
  { label: "SIGNAL", short: "SIG", path: "/blog" },
  { label: "POSITIONS", short: "POS", path: "/comments" },
  { label: "WHO IS MECH", short: "WHO", path: "/about" },
  { label: "CONTACT", short: "CON", path: "/contact" },
];

const NavPill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className="fixed flex items-center"
      style={{
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 80,
        background: "rgba(9,9,14,0.95)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 999,
        padding: isMobile ? "8px 16px" : "9px 28px",
        gap: isMobile ? 14 : 24,
        display: "flex",
        boxShadow: "0 8px 48px rgba(0,0,0,0.7)",
      }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            data-hover="true"
            onClick={() => navigate(item.path)}
            className="font-display relative whitespace-nowrap"
            style={{
              fontSize: isMobile ? "10px" : "12px",
              letterSpacing: "0.18em",
              color: isActive ? "white" : "rgba(255,255,255,0.26)",
              background: "none",
              border: "none",
              padding: "2px 0",
              cursor: "none",
            }}
          >
            {isMobile ? item.short : item.label}
            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-[1px]"
                style={{ background: "white" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </motion.nav>
  );
};

export default NavPill;