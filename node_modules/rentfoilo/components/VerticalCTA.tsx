"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CTA_STYLE: React.CSSProperties = {
  /* Positioning — fixed to viewport; portal ensures body is the containing block */
  position: "fixed",
  bottom: "30%",
  right: 0,
  zIndex: 9000,

  /* GPU layer promotion prevents scroll jitter */
  transform: "translateZ(0)",
  willChange: "transform",

  /* Visual */
  writingMode: "vertical-lr",
  backgroundColor: "#035381",
  color: "#ffffff",
  padding: "20px 14px",
  letterSpacing: "1px",
  fontSize: "1.1rem",
  fontWeight: 300,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Roboto Condensed, sans-serif",
  userSelect: "none",
  cursor: "pointer",
  /* Smooth hover slide — uses CSS class below, not JS transform override */
  transition: "right 0.2s linear",
};

const VerticalCTA = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === "/contact") return null;
  if (!mounted) return null;

  const content = (
    <>
      <style>{`
        .vertical-cta-btn { 
          right: 0 !important; 
          transition: transform 0.3s ease-out !important;
          transform: translate3d(0, 0, 0);
        }
        .vertical-cta-btn:hover { 
          transform: translate3d(-10px, 0, 0) !important;
        }
        @media (max-width: 640px) {
          .vertical-cta-btn {
            bottom: 20% !important;
            padding: 15px 10px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
      <Link
        href="/contact"
        className="vertical-cta-btn"
        style={CTA_STYLE}
      >
        SEND US A MESSAGE
      </Link>
    </>
  );

  return createPortal(content, document.body);
};

export default VerticalCTA;
