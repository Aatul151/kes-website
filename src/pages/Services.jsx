import React from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight, CheckCircle, Building2, Layers, Warehouse, Factory,
  Store, Home as HomeIcon, Umbrella, Key
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";

const ICON_MAP = {
  Building2, Layers, Warehouse, Factory, Store, Home: HomeIcon, Umbrella, Key,
};

export default function Services() {
  const { SERVICES } = useContent();
  useScrollAnimation();
  const [, navigate] = useLocation();

  const handleQuote = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/heroes/services.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>What We Build</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive industrial construction solutions — from Pre-Engineered Buildings to complete Turnkey delivery.
          </p>
        </div>
      </section>

      {/* Service Nav */}
      <section className="bg-white border-b border-gray-100 sticky top-[65px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {SERVICES.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="shrink-0 px-4 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-red-50 hover:text-[#C8102E] transition-all whitespace-nowrap"
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
            className={`py-20 ${isEven ? "bg-white" : "bg-[#F8F8F8]"}`}
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
