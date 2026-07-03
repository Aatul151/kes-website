import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight, CheckCircle, Building2, Layers, Warehouse, Factory,
  Store, Home as HomeIcon, Umbrella, Key
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";
import { scrollToServiceFromHash, scrollToServiceSection } from "../utils/scrollToService.js";
import HeroSection from "../components/HeroSection.jsx";

const ICON_MAP = {
  Building2, Layers, Warehouse, Factory, Store, Home: HomeIcon, Umbrella, Key,
};

export default function Services() {
  const { SERVICES } = useContent();
  useScrollAnimation();
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleHash = () => {
      setTimeout(() => scrollToServiceFromHash(), 50);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleServiceNav = (id, e) => {
    e.preventDefault();
    window.history.replaceState(null, "", `/services#${id}`);
    scrollToServiceSection(id);
  };

  const handleQuote = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <HeroSection
        img="/images/heroes/services.jpg"
        title="Our Services"
        description="Comprehensive industrial construction solutions — from Pre-Engineered Buildings to complete Turnkey delivery."
      />

      {/* Service Nav */}
      <section className="services-category-bar sticky top-[65px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-category-bar__track">
            {SERVICES.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                onClick={(e) => handleServiceNav(svc.id, e)}
                className="services-category-pill"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((svc, i) => {
        const Icon = ICON_MAP[svc.icon] || Building2;
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 ${isEven ? "bg-[#F8F8F8]":"bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Text */}
                <div className={`${!isEven ? "lg:order-2" : ""} animate-on-scroll-left`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-[#C8102E]" />
                    </div>
                    <span className="section-label mb-0">Service {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="accent-line" />
                  <h2 className="section-title">{svc.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.description}</p>

                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-3">Key Features</h4>
                  <ul className="space-y-2.5 mb-7">
                    {svc.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-[#C8102E] mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleQuote(svc.title)}
                    className="btn-primary text-xs"
                  >
                    Request Quote for {svc.title} <ArrowRight size={13} />
                  </button>
                </div>

                {/* Image */}
                <div className={`${!isEven ? "lg:order-1" : ""} animate-on-scroll-right`}>
                  <div className="relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="rounded-xl w-full h-80 object-cover shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-[#C8102E] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {svc.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-[#C8102E]">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 text-sm mb-7">Our engineering team will analyze your requirements and recommend the optimal solution.</p>
          <Link href="/contact">
            <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
              Talk to an Engineer
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
