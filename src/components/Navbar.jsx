import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { COMPANY } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200 py-2"
          : "bg-white shadow-sm border-b border-gray-200 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src="/kes_logo.png"
                alt="KES Engineering - Your Engineering Partner"
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-sm font-semibold text-[#C8102E] transition-colors duration-200 font-poppins group-hover:text-[#a50d25]">
                {COMPANY.name}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`cursor-pointer text-sm font-medium transition-colors duration-200 font-poppins ${
                    location === link.href
                      ? "text-[#C8102E] border-b-2 border-[#C8102E] pb-0.5"
                      : "text-[#333] hover:text-[#C8102E]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-semibold font-poppins py-2.5 px-6 rounded transition-all duration-200 tracking-wide uppercase">
                Request Quote
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#1A1A1A] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`block py-2.5 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer font-poppins ${
                  location === link.href
                    ? "bg-red-50 text-[#C8102E]"
                    : "text-[#444] hover:bg-gray-50 hover:text-[#C8102E]"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-semibold font-poppins py-2.5 px-6 rounded transition-all duration-200 tracking-wide uppercase w-full mt-3">
              Request Quote
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
