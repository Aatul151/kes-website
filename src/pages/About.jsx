import React from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Building2,
  Eye,
  Target,
  ScrollText,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useContent } from "../context/ContentContext.jsx";
import HeroSection from "../components/HeroSection.jsx";
import LazyImage from "../components/LazyImage.jsx";

const ICON_MAP = { Building2 };

function FoundationCard({ number, title, text, icon: Icon, variant, delay }) {
  return (
    <article
      className={`foundation-card foundation-card--${variant} animate-on-scroll`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="foundation-card__number" aria-hidden="true">
        {number}
      </span>
      <div className="foundation-card__icon-wrap">
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <h3 className="foundation-card__title">{title}</h3>
      <p className="foundation-card__text  text-justify">{text}</p>
      <div className="foundation-card__accent" aria-hidden="true" />
    </article>
  );
}

export default function About() {
  const { ABOUT, STATS, COMPANY, LEADER, MILESTONES } = useContent();
  useScrollAnimation();

  const policyPoints = ABOUT?.policy_statement
    ? ABOUT.policy_statement.split(/(?<=\.)\s+/).filter(Boolean)
    : [];

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <HeroSection
        img="/images/heroes/about.jpg"
        title="About KES Groups"
        description={`${COMPANY.yearsExperience} years of engineering excellence, ${COMPANY.projectsDelivered}+ projects delivered, and an unwavering commitment to building India's industrial future.`}
      />

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl font-bold text-[#C8102E] mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
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
                <p
                  key={i}
                  className="text-gray-600 text-sm leading-relaxed mb-4 text-justify"
                >
                  {para}
                </p>
              ))}
              <Link href="/contact">
                <button className="btn-primary text-xs mt-2">
                  Work With Us <ArrowRight size={13} />
                </button>
              </Link>
            </div>
            <div className="animate-on-scroll-right">
              <LazyImage
                src="/images/heroes/about-story.jpg"
                alt="KES Engineering facility"
                className="rounded-xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub Compony*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">Business Verticals</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Our Subsidiary Companies</h2>
            <p className="section-subtitle mx-auto text-center">
              Through our specialized subsidiaries, we provide end-to-end
              engineering, construction, and infrastructure solutions across
              multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPANY.subCompanys.map((company, index) => {
              const Icon = ICON_MAP[company.icon] || Building2;
              return (
                <div
                  key={company.id}
                  className="animate-on-scroll group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#C8102E]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8102E] transition-all duration-300">
                    <Icon
                      size={30}
                      className="text-[#C8102E] group-hover:text-white transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    {company.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {company.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 h-1 w-16 bg-[#C8102E] rounded-full group-hover:w-28 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="foundation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">Our Foundation</span>
            <div className="accent-line-center" />
            <h2 className="section-title">
              Vision, Mission & Policy Statement
            </h2>
            <p className="section-subtitle mx-auto text-center">
              The principles that guide every structure we design, fabricate,
              and deliver.
            </p>
          </div>

          <div className="foundation-bento mb-10">
            <FoundationCard
              number="01"
              title="Our Vision"
              text={ABOUT.vision}
              icon={Eye}
              variant="vision"
              delay={0}
            />
            <FoundationCard
              number="02"
              title="Our Mission"
              text={ABOUT.mission}
              icon={Target}
              variant="mission"
              delay={100}
            />

            <article
              className="foundation-policy animate-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="foundation-policy__brand">
                <span className="foundation-policy__number" aria-hidden="true">
                  03
                </span>
                <div className="foundation-policy__icon-wrap">
                  <ScrollText size={30} strokeWidth={1.75} />
                </div>
                <h3 className="foundation-policy__title">Policy Statement</h3>
                <p className="foundation-policy__tagline">
                  Quality, safety, and accountability in every operation.
                </p>
              </div>
              <div className="foundation-policy__body">
                <ul className="foundation-policy__list">
                  {policyPoints.map((point, i) => (
                    <li key={i} className="foundation-policy__item text-justify">
                      <span className="foundation-policy__check">
                        <CheckCircle size={16} strokeWidth={2.25} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
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
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {val.desc}
                </p>
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
              Experienced professionals driving KES Engineering's vision and
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADER.map((leader, i) => (
              <div
                key={i}
                className="bg-[#F8F8F8] rounded-xl overflow-hidden border border-gray-100 animate-on-scroll card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <LazyImage
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-[#1A1A1A] text-base">
                    {leader.name}
                  </h3>
                  <p className="text-[#C8102E] text-xs font-semibold mb-3 ">
                    {leader.designation}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed text-justify">
                    {leader.message}
                  </p>
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
            <span className="section-label" style={{ color: "#ff6b7a" }}>
              Our Journey{" "}
            </span>
            <div className="accent-line-center" />
            <h2 className="section-title" style={{ color: "#ffffff" }}>
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 animate-on-scroll ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 inline-block">
                      <span className="text-[#C8102E] font-bold text-lg">
                        {m.year}
                      </span>
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-red-100 text-sm mb-7">
            Let's discuss your project and show you why {COMPANY.satisfiedClients}+ clients trust KES
            Engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
                Request Quote
              </button>
            </Link>
            <Link href="/projects">
              <button className="btn-outline-white text-xs">
                View Our Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
