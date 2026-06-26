import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Target, Eye, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useContent } from "../context/ContentContext.jsx";

export default function About() {
  const { ABOUT, STATS } = useContent();
  useScrollAnimation();

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/heroes/about.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About KES Engineering</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            15 years of engineering excellence, 500+ projects delivered, and an unwavering commitment to building India's industrial future.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-4xl font-bold text-[#C8102E] mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="animate-on-scroll-left">
              <span className="section-label">Our Journey</span>
              <div className="accent-line" />
              <h2 className="section-title">The KES Story</h2>
              {ABOUT.story.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">{para}</p>
              ))}
              <Link href="/contact">
                <button className="btn-primary text-xs mt-2">
                  Work With Us <ArrowRight size={13} />
                </button>
              </Link>
            </div>
            <div className="animate-on-scroll-right">
              <img
                src="/images/heroes/about-story.jpg"
                alt="KES Engineering facility"
                className="rounded-xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Our Foundation</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Vision, Mission & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 animate-on-scroll card-hover">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <Eye size={22} className="text-[#C8102E]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ABOUT.vision}</p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 animate-on-scroll card-hover">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <Target size={22} className="text-[#C8102E]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ABOUT.mission}</p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT.values.map((val, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center animate-on-scroll card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={16} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-2">{val.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Leadership</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Meet Our Leaders</h2>
            <p className="section-subtitle mx-auto text-center">
              Experienced professionals driving KES Engineering's vision and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT.leadership.map((leader, i) => (
              <div
                key={i}
                className="bg-[#F8F8F8] rounded-xl overflow-hidden border border-gray-100 animate-on-scroll card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-[#1A1A1A] text-base">{leader.name}</h3>
                  <p className="text-[#C8102E] text-xs font-semibold mb-3">{leader.designation}</p>
                  <p className="text-gray-600 text-xs leading-relaxed italic">"{leader.message}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label" style={{ color: "#ff6b7a" }}>Our Journey</span>
            <div className="accent-line-center" />
            <h2 className="section-title text-white">Key Milestones</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-8">
              {ABOUT.milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 animate-on-scroll ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 inline-block">
                      <span className="text-[#C8102E] font-bold text-lg">{m.year}</span>
                      <p className="text-gray-300 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#C8102E] rounded-full border-4 border-[#1A1A1A] z-10 shrink-0 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C8102E]">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Great?</h2>
          <p className="text-red-100 text-sm mb-7">Let's discuss your project and show you why 350+ clients trust KES Engineering.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
                Request Quote
              </button>
            </Link>
            <Link href="/projects">
              <button className="btn-outline-white text-xs">View Our Projects</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
