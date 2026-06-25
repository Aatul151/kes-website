import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, ArrowRight, Heart } from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "../data/content.js";
import { SOCIAL_ICON_MAP } from "../utils/socialIcons.js";

const SERVICES = [
  "Pre Engineered Buildings",
  "Steel Structures",
  "Warehouse Construction",
  "Factory Buildings",
  "Commercial Buildings",
  "Roofing Systems",
  "Industrial Sheds",
  "Turnkey Projects",
];

const QUICK_LINKS = [
  { label: "About KES", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/kes_logo.png"
                alt="KES Engineering - Your Engineering Partner"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's leading provider of Pre-Engineered Buildings, Steel Structures, and Turnkey Industrial Construction Solutions.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#C8102E] hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 text-sm hover:text-[#C8102E] transition-colors cursor-pointer flex items-center gap-1.5 group">
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-gray-400 text-sm hover:text-[#C8102E] transition-colors cursor-pointer flex items-center gap-1.5 group">
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-[#C8102E] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-[#C8102E] shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-gray-400 text-sm hover:text-[#C8102E] transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-[#C8102E] shrink-0" />
                <a href="mailto:info@kesengineering.in" className="text-gray-400 text-sm hover:text-[#C8102E] transition-colors">info@kesengineering.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY.name} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
            <Link href="/privacy-policy">
              <span className="text-gray-500 text-xs hover:text-[#C8102E] transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <a
              href="https://namtechsolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs hover:text-[#C8102E] transition-colors inline-flex items-center gap-1"
            >
              Developed with <Heart size={11} className="text-[#C8102E] fill-[#C8102E]" /> by Namtech Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
