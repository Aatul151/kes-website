import React from "react";
import { Link } from "wouter";
import ClientLogo from "./ClientLogo.jsx";

export default function ClientsCarousel({ clients }) {
  if (!clients?.length) return null;

  const items = [...clients, ...clients];

  return (
    <section className="py-14 bg-[#F8F8F8] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center animate-on-scroll">
          <span className="section-label">Trusted By Industry Leaders</span>
          <div className="accent-line-center" />
          <h2 className="section-title">Our Clients</h2>
        </div>
      </div>

      <div className="client-marquee" aria-label="Client logos carousel">
        <div
          className="client-marquee__track"
          style={{ animationDuration: `${Math.max(clients.length * 4, 24)}s` }}
        >
          {items.map((client, i) => (
            <div key={`${client.id}-${i}`} className="client-marquee__item">
              <ClientLogo
                client={client}
                className="h-14 sm:h-16 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/clients">
          <span className="inline-flex items-center gap-1 text-[#C8102E] text-xs font-semibold hover:gap-2 transition-all cursor-pointer">
            View All Clients <span aria-hidden="true">→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
