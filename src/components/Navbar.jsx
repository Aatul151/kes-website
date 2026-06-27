import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { COMPANY, FLOATING_ACTIONS } = useContent();
  const { whatsapp } = FLOATING_ACTIONS;
  const whatsappUrl = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`;
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
                src="/kes_logo.gif"
                alt="KES Groups - Your Engineering Partner"
                className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-[25px] font-semibold text-[#C8102E] transition-colors duration-200 font-poppins group-hover:text-[#a50d25]">
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
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={whatsapp.label}
              title={"Chat Now"}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] transition-colors duration-200 shadow-sm"
            >
              <WhatsAppIcon size={20} />
            </a>
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
