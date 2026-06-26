import React from "react";
import { Link } from "wouter";
import { ArrowRight, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";

export default function PrivacyPolicy() {
  const { PRIVACY_POLICY } = useContent();
  useScrollAnimation();

  return (
    <div className="page-transition pt-20">
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/heroes/privacy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Legal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{PRIVACY_POLICY.title}</h1>
          <p className="text-gray-400 text-sm">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 p-4 mb-10 bg-red-50 border border-red-100 rounded-xl animate-on-scroll">
            <Shield size={20} className="text-[#C8102E] shrink-0" />
            <p className="text-gray-700 text-sm leading-relaxed">{PRIVACY_POLICY.intro}</p>
          </div>

          <div className="space-y-10">
            {PRIVACY_POLICY.sections.map((section, i) => (
              <div key={section.title} className="animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-3">{section.title}</h2>
                <ul className="space-y-2.5">
                  {section.content.map((item) => (
                    <li key={item} className="flex gap-2.5 text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#C8102E] mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center animate-on-scroll">
            <Link href="/contact">
              <button className="btn-primary text-xs">
                Contact Us <ArrowRight size={13} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
