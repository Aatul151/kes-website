import React from "react";
import { Link } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";
import ClientLogo from "../components/ClientLogo.jsx";

export default function Clients() {
  const { CLIENTS } = useContent();
  useScrollAnimation();

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/heroes/clients.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Our Trusted Partners</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            We are proud to partner with leading organizations across diverse industries,
            delivering high-quality engineering, EPC, and infrastructure solutions built
            on trust, reliability, and long-term relationships.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Partnership Portfolio</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Companies We Work With</h2>
            <p className="section-subtitle mx-auto text-center">
              {CLIENTS.length}+ valued clients across manufacturing, automotive, infrastructure, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-10">
            {CLIENTS.map((client, i) => (
              <article
                key={client.id}
                className="client-card animate-on-scroll group text-center"
                style={{ transitionDelay: `${(i % 12) * 40}ms` }}
              >
                <div className="client-card__logo">
                  <ClientLogo
                    client={client}
                    className="max-h-full max-w-full w-auto h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
                <h3 className="client-card__name">{client.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C8102E]">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Become Our Next Success Story</h2>
          <p className="text-red-100 text-sm mb-7">
            Join industry leaders who trust KES Engineering for their industrial construction needs.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
              Partner With Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
