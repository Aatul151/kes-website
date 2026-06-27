import React from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle, Cog, Truck, Package, Pill,
  Car, UtensilsCrossed, Scissors, Sun
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";

const ICON_MAP = { Cog, Truck, Package, Pill, Car, UtensilsCrossed, Scissors, Sun };

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
          <span className="section-label" style={{ color: "#ff6b7a" }}> Our Trusted Partners </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            We are proud to partner with leading organizations across diverse industries,
            delivering high-quality engineering, EPC, and infrastructure solutions built
            on trust, reliability, and long-term relationships.
          </p>
        </div>
      </section>

      {/* Clients Titles Overview */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CLIENTS.map((client, i) => {
              return (
                <a
                  key={client.id}
                  href={`#${client.id}`}
                  className="industry-tile animate-on-scroll"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <img src={client.image} alt="client image" className="rounded-sm" />
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A1A] leading-tight">{client.title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Sections */}
      {CLIENTS.map((client, i) => {
        // const Icon = ICON_MAP[ind.icon] || Cog;
        // const isEven = i % 2 === 0;
        // return (
        //   <section
        //     key={client.id}
        //     id={client.id}
        //     className={`py-20 ${!isEven ? "bg-white" : "bg-[#F8F8F8]"}`}
        //   >
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //       <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>
        //         {/* Image */}
        //         <div className={`${!isEven ? "lg:order-2" : ""} animate-on-scroll-left`}>
        //           <div className="relative">
        //             <img
        //               src={client.image}
        //               alt={client.title}
        //               className="rounded-xl w-full h-80 object-cover shadow-lg"
        //             />
        //             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
        //               {/* <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
        //                 <Icon size={14} className="text-[#C8102E]" />
        //               </div> */}
        //               <span className="text-xs font-bold text-[#1A1A1A]">{client.title}</span>
        //             </div>
        //           </div>
        //         </div>

        //         {/* Text */}
        //         <div className={`${!isEven ? "lg:order-1" : ""} animate-on-scroll-right`}>
        //           <div className="flex items-center gap-3 mb-4">
        //             <span className="section-label mb-0">Client {String(i + 1).padStart(2, "0")}</span>
        //           </div>
        //           <div className="accent-line" />
        //           <h2 className="section-title">{client.title}</h2>
        //           <p className="text-gray-600 text-sm leading-relaxed mb-6">{client.description}</p>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        // );
      })}

      {/* CTA */}
      {/* <section className="py-16 bg-[#C8102E]">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Your Industry, Our Expertise</h2>
          <p className="text-red-100 text-sm mb-7">Whatever your sector, KES Engineering has the experience and capability to deliver your industrial facility to the highest standards.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
                Request a Quote
              </button>
            </Link>
            <Link href="/projects">
              <button className="btn-outline-white text-xs">View Projects</button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
