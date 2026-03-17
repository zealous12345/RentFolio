"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

/* ─── Logo ─── */
const Logo = () => (
  <div style={{ width: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ background: "#035381", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 8px" }}>
      <svg viewBox="0 0 100 85" fill="white" width="56" height="45">
        <path d="M50 5L3 46h14v44h24V66h18v24h24V46h14L50 5z"/>
      </svg>
    </div>
    <div style={{ background: "white", width: "100%", textAlign: "center", padding: "4px 2px" }}>
      <div style={{ fontSize: "9px", fontWeight: 900, color: "#035381", letterSpacing: "2px", lineHeight: 1.2, fontFamily: "var(--font-heading)" }}>RENTFOLIO</div>
      <div style={{ fontSize: "7px", fontWeight: 700, color: "#035381", letterSpacing: "1.5px", fontFamily: "var(--font-heading)" }}>LIMITED</div>
    </div>
  </div>
);

/* ─── Nav link classes ─── */
const activeClass = "leading-[80px] relative after:absolute after:bottom-4 after:h-[2px] after:bg-primary-color after:w-full after:left-0 after:right-0";
const hoverClass  = "leading-[80px] relative after:absolute after:bottom-4 after:h-[2px] after:bg-primary-color after:w-0 hover:after:w-full after:left-0 after:right-auto after:transition-[width] after:duration-300 after:ease-out";

const NavLinks = ({ pathname }: { pathname: string }) => (
  <nav className="flex gap-8 tracking-[1px] text-[13px] font-medium">
    <Link href="/"         className={pathname === "/"         ? activeClass : hoverClass}>HOME</Link>
    <Link href="/services" className={pathname === "/services" ? activeClass : hoverClass}>SERVICES</Link>
    <Link href="/contact"  className={pathname === "/contact"  ? activeClass : hoverClass}>CONTACT US</Link>
  </nav>
);

const SocialIcons = () => (
  <div className="flex gap-4 text-sm items-center">
    <span className="cursor-pointer hover:text-primary-color transition-colors"><FaFacebookF /></span>
    <span className="cursor-pointer hover:text-primary-color transition-colors"><FaInstagram /></span>
    <span className="cursor-pointer hover:text-primary-color transition-colors"><FaTwitter /></span>
  </div>
);

/* ═════════════════════════════════
   MAIN NAVBAR COMPONENT
   ═════════════════════════════════ */
const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── DESKTOP: Absolute header (shown at top of page) ── */}
      <header
        className="hidden sm:block absolute top-0 left-0 right-0 z-30 text-white w-full"
        style={{ opacity: isScrolled ? 0 : 1, pointerEvents: isScrolled ? "none" : "auto", transition: "opacity 0.3s ease" }}
      >
        <div className="relative">
          {/* Top info bar */}
          <div className="bg-black-color">
            <div className="flex gap-8 justify-end items-center h-12 mx-[5%] text-[13px]">
              <span>
                <span className="text-primary-color font-heading tracking-wider mr-1">LOCATION /</span>
                <span className="opacity-75">Colchester, United Kingdom</span>
              </span>
              <a href="tel:+447412835416" className="group">
                <span className="text-primary-color font-heading tracking-wider mr-1">PHONE /</span>
                <span className="opacity-75 group-hover:text-primary-color group-hover:opacity-100 transition-colors">+44 7412 835416</span>
              </a>
              <a href="mailto:rentfolioltd@gmail.com" className="group">
                <span className="text-primary-color font-heading tracking-wider mr-1">E-MAIL /</span>
                <span className="opacity-75 group-hover:text-primary-color group-hover:opacity-100 transition-colors">rentfolioltd@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Nav row */}
          <div className="flex items-center justify-between h-20 pl-[5%] pr-[5%]">
             <div className="flex items-center gap-12">
               <Link href="/" className="z-[60]">
                 <Logo />
               </Link>
               <NavLinks pathname={pathname} />
             </div>
            <SocialIcons />
          </div>
        </div>
      </header>

      {/* ── DESKTOP: Sticky header (slides in from top on scroll) ── */}
      <header
        className="hidden sm:block fixed left-0 right-0 z-[55] bg-black-color text-white shadow-xl"
        style={{
          top: isScrolled ? 0 : "-100px",
          transition: "top 0.4s ease",
        }}
      >
        <div className="relative max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between h-20 pl-[5%] pr-[5%]">
            <div className="flex items-center gap-12">
              <Link href="/" className="z-[60]">
                <Logo />
              </Link>
              <NavLinks pathname={pathname} />
            </div>
            <SocialIcons />
          </div>
        </div>
      </header>

      {/* ── MOBILE: Fixed top bar ── */}
      <header className="sm:hidden fixed top-0 left-0 right-0 bg-black-color z-[55] h-14">
        <div className="flex items-center justify-between h-full px-4">
          <button
            onClick={() => setIsMobileMenuOpen(v => !v)}
            className="flex flex-col gap-[5px] p-2 text-white"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Logo />
          </Link>

          <div style={{ width: 40 }} />
        </div>
      </header>

      {/* ── MOBILE: Fullscreen slide-in menu ── */}
      <div
        className="sm:hidden fixed inset-0 bg-black-color z-[50] flex flex-col items-center justify-center gap-10 text-white"
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s ease",
        }}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl tracking-[3px]">
          <Link href="/"         onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary-color transition-colors">HOME</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary-color transition-colors">SERVICES</Link>
          <Link href="/contact"  onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary-color transition-colors">CONTACT US</Link>
        </nav>
        <div className="flex gap-6 text-2xl">
          <span className="cursor-pointer hover:text-primary-color transition-colors"><FaFacebookF /></span>
          <span className="cursor-pointer hover:text-primary-color transition-colors"><FaInstagram /></span>
          <span className="cursor-pointer hover:text-primary-color transition-colors"><FaTwitter /></span>
        </div>
        <div className="text-sm opacity-60 flex flex-col items-center gap-1">
          <a href="tel:+447412835416">+44 7412 835416</a>
          <a href="mailto:rentfolioltd@gmail.com">rentfolioltd@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
