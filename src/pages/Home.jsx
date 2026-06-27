import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Building2,
  Layers,
  Warehouse,
  Factory,
  Store,
  Home as HomeIcon,
  Umbrella,
  Key,
  Zap,
  Award,
  TrendingDown,
  Shield,
  Globe,
  Users,
  MessageSquare,
  PenTool,
  Settings,
  Wrench,
  HardHat,
  Cog,
  Truck,
  Package,
  Pill,
  Car,
  UtensilsCrossed,
  Scissors,
  Sun,
  Phone,
  Mail,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useContent } from "../context/ContentContext.jsx";
import ContactForm from "../components/ContactForm.jsx";

const ICON_MAP = {
  Building2,
  Layers,
  Warehouse,
  Factory,
  Store,
  Home: HomeIcon,
  Umbrella,
  Key,
  Zap,
  Award,
  TrendingDown,
  Shield,
  Globe,
  Users,
  MessageSquare,
  PenTool,
  Settings,
  Wrench,
  HardHat,
  Cog,
  Truck,
  Package,
  Pill,
  Car,
  UtensilsCrossed,
  Scissors,
  Sun,
  CheckCircle,
  Star,
};

const PROJECT_FILTERS = [
  "All",
  "Manufacturing",
  "Logistics",
  "Warehousing",
  "Pharmaceutical",
  "Automobile",
  "Food Processing",
  "Textile",
  "Renewable Energy",
];

export default function Home() {
  const {
    STATS,
    SERVICES,
    WHY_KES,
    PROJECTS,
    INDUSTRIES,
    PROCESS_STEPS,
    TESTIMONIALS,
    CERTIFICATIONS,
    SERVICE_AREAS,
    COMPANY,
    HOME_HERO,
  } = useContent();
  const [activeFilter, setActiveFilter] = useState("All");
  const heroVideos =
    HOME_HERO.videos?.length > 0
      ? HOME_HERO.videos
      : HOME_HERO.video
        ? [HOME_HERO.video]
        : [];
  const [heroVideoIdx, setHeroVideoIdx] = useState(0);
  const [heroVideosFailed, setHeroVideosFailed] = useState(() => new Set());
  const heroVideoRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const sliderRef = useRef(null);

  useScrollAnimation([activeFilter]);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeFilter);

  const heroVideoAvailable = heroVideos
    .map((_, i) => i)
    .filter((i) => !heroVideosFailed.has(i));
  const allHeroVideosFailed =
    heroVideos.length > 0 && heroVideoAvailable.length === 0;

  const advanceHeroVideo = () => {
    setHeroVideoIdx((current) => {
      const available = heroVideos
        .map((_, i) => i)
        .filter((i) => !heroVideosFailed.has(i));
      if (available.length <= 1) return current;
      const pos = available.indexOf(current);
      const nextPos = pos === -1 ? 0 : (pos + 1) % available.length;
      return available[nextPos];
    });
  };

  const handleHeroVideoError = (index) => {
    setHeroVideosFailed((prev) => {
      const next = new Set(prev).add(index);
      setHeroVideoIdx((current) => {
        if (current !== index) return current;
        const remaining = heroVideos
          .map((_, i) => i)
          .filter((i) => !next.has(i));
        return remaining[0] ?? current;
      });
      return next;
    });
  };

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video || allHeroVideosFailed || heroVideosFailed.has(heroVideoIdx))
      return;

    const src = heroVideos[heroVideoIdx];
    if (!src) return;

    let cancelled = false;

    const playVideo = () => {
      if (cancelled) return;
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    const onCanPlay = () => playVideo();

    video.pause();
    video.src = src;
    video.load();

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      playVideo();
    } else {
      video.addEventListener("canplay", onCanPlay, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [heroVideoIdx, heroVideosFailed, allHeroVideosFailed, heroVideos]);

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);


  return (
    <div className="page-transition">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {!allHeroVideosFailed && heroVideos.length > 0 ? (
            <video
              ref={heroVideoRef}
              muted
              loop={false}
              playsInline
              preload="auto"
              onError={() => handleHeroVideoError(heroVideoIdx)}
              onEnded={advanceHeroVideo}
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          ) : (
            <div className="w-full h-full bg-[#1A1A1A]" aria-hidden="true" />
          )}
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#ff6b7a] text-xs font-semibold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6">
              {HOME_HERO.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {HOME_HERO.title}
              <br />
              <span className="text-[#C8102E]">{HOME_HERO.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light mb-8 leading-relaxed">
              {HOME_HERO.subtitle || COMPANY.tagline}
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact">
                <button className="btn-primary text-sm">
                  Request Quote <ArrowRight size={15} />
                </button>
              </Link>
              <Link href="/projects">
                <button className="btn-outline-white text-sm">
                  Explore Projects
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="text-2xl sm:text-3xl font-bold text-[#C8102E] mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        {heroVideoAvailable.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {heroVideoAvailable.map((videoIdx) => (
              <button
                key={videoIdx}
                type="button"
                onClick={() => setHeroVideoIdx(videoIdx)}
                aria-label={`Show hero background ${videoIdx + 1} of ${heroVideoAvailable.length}`}
                aria-current={videoIdx === heroVideoIdx ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  videoIdx === heroVideoIdx
                    ? "w-8 bg-[#C8102E]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">What We Build</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto text-center">
              Comprehensive industrial construction solutions engineered for
              performance, speed, and long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = ICON_MAP[svc.icon] || Building2;
              return (
                <Link key={svc.id} href="/services">
                  <div
                    className="service-card animate-on-scroll"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#C8102E]" />
                    </div>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {svc.shortDesc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[#C8102E] text-xs font-semibold">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT STRIP ===== */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="animate-on-scroll-left">
              <span className="section-label">About KES</span>
              <div className="accent-line" />
              <h2 className="section-title">
                15 Years of Engineering Excellence
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Founded in 2009, KES Engineering has grown from a small
                fabrication unit to one of India's most trusted industrial
                construction companies. With 500+ projects delivered across 18
                states, we bring unmatched expertise to every project.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                Our ISO 9001:2015 certified manufacturing facility, team of 50+
                engineers, and nationwide erection capability make us the
                partner of choice for India's leading industrial corporations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-7">
                {[
                  { label: "Satisfied Clients", value: "350+" },
                  { label: "Sq.Ft Delivered", value: "50M+" },
                  { label: "Erection Teams", value: "25+" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-4 border border-gray-100"
                  >
                    <div className="text-xl font-bold text-[#C8102E]">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <button className="btn-primary text-xs">
                  Our Story <ArrowRight size={13} />
                </button>
              </Link>
            </div>
            <div className="animate-on-scroll-right">
              <div className="relative">
                <img
                  src="/images/heroes/home-about.jpg"
                  alt="KES Engineering facility"
                  className="rounded-xl w-full h-80 object-cover shadow-lg"
                />
                <div className="absolute -bottom-5 -left-5 bg-[#C8102E] text-white rounded-xl p-5 shadow-xl">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-xs opacity-80 mt-0.5">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY KES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Why Choose Us</span>
            <div className="accent-line-center" />
            <h2 className="section-title">The KES Advantage</h2>
            <p className="section-subtitle mx-auto text-center">
              Six compelling reasons why India's leading industrial companies
              choose KES Engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_KES.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || CheckCircle;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 animate-on-scroll card-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-[#C8102E] rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 animate-on-scroll">
            <div>
              <span className="section-label">Our Work</span>
              <div className="accent-line" />
              <h2 className="section-title mb-0">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <button className="btn-outline text-xs shrink-0">
                View All Projects <ArrowRight size={13} />
              </button>
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="project-card h-64 animate-on-scroll"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img src={project.image} alt={project.title} />
                <div className="overlay" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-semibold text-[#ff8a9a] uppercase tracking-widest mb-1">
                    {project.tag}
                  </span>
                  <h3 className="text-white font-semibold text-sm mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs">{project.location}</p>
                  <p className="text-gray-400 text-[11px] mt-1">
                    {project.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Sectors We Serve</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle mx-auto text-center">
              Deep domain expertise across India's most critical industrial
              sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICON_MAP[ind.icon] || Cog;
              return (
                <Link key={ind.id} href="/industries">
                  <div
                    className="industry-tile animate-on-scroll"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-[#C8102E]" />
                    </div>
                    <p className="text-xs font-semibold text-[#1A1A1A] leading-tight">
                      {ind.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS TIMELINE ===== */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label" style={{ color: "#ff6b7a" }}>
              How We Work
            </span>
            <div className="accent-line-center" />
            <h2 className="section-title text-white">Our Process</h2>
            <p className="section-subtitle mx-auto text-center text-gray-400">
              A proven 6-step process that ensures every project is delivered on
              time, within budget, and to the highest quality standards.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex items-start gap-0 mb-10">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || CheckCircle;
              const isActive = step.step <= activeStep;
              return (
                <div
                  key={step.step}
                  className="timeline-step cursor-pointer"
                  onClick={() => setActiveStep(step.step)}
                >
                  <div className={`step-circle ${isActive ? "active" : ""}`}>
                    {isActive ? <Icon size={18} /> : <span>{step.step}</span>}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className={`timeline-connector ${isActive ? "active" : ""}`}
                    />
                  )}
                  <p className="text-xs font-semibold text-white mt-2 px-2">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Step Detail */}
          {(() => {
            const step = PROCESS_STEPS.find((s) => s.step === activeStep);
            const Icon = ICON_MAP[step.icon] || CheckCircle;
            return (
              <div
                className="relative overflow-hidden border border-white-500 rounded-xl p-6 max-w-xl mx-auto text-center animate-on-scroll min-h-[220px] flex items-center justify-center bg-cover bg-center transition-[background-image] duration-500"
                style={{
                  backgroundImage: step.image ? `url(${step.image})` : undefined,
                }}
              >
                <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
                <div className="relative z-10 px-2">
                  <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 drop-shadow-sm">
                    Step {step.step}: {step.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Mobile Steps */}
          <div className="md:hidden mt-8 space-y-3">
            {PROCESS_STEPS.map((step) => {
              const Icon = ICON_MAP[step.icon] || CheckCircle;
              return (
                <div
                  key={step.step}
                  className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all ${activeStep === step.step
                    ? "border-[#C8102E] bg-[#C8102E]/10"
                    : "border-white/10 bg-white/5"
                    }`}
                  onClick={() => setActiveStep(step.step)}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${activeStep === step.step ? "bg-[#C8102E]" : "bg-white/10"
                      }`}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Step {step.step}: {step.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-label">Client Stories</span>
            <div className="accent-line-center" />
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-[#F8F8F8] border border-gray-100 rounded-2xl p-8 sm:p-10 text-center animate-on-scroll">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#C8102E] fill-[#C8102E]"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-7 italic">
                "{TESTIMONIALS[testimonialIdx].quote}"
              </p>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">
                  {TESTIMONIALS[testimonialIdx].name}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {TESTIMONIALS[testimonialIdx].designation},{" "}
                  {TESTIMONIALS[testimonialIdx].company}
                </p>
                <span className="inline-block mt-2 bg-red-50 text-[#C8102E] text-[10px] font-semibold px-3 py-1 rounded-full">
                  {TESTIMONIALS[testimonialIdx].industry}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() =>
                  setTestimonialIdx(
                    (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? "bg-[#C8102E] w-5" : "bg-gray-300"}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)
                }
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="section-label">Quality Assurance</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Certifications & Standards</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = ICON_MAP[cert.icon] || Shield;
              return (
                <div
                  key={i}
                  className="cert-badge flex-col gap-2 animate-on-scroll"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <Icon size={18} className="text-[#C8102E]" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-[#1A1A1A]">
                      {cert.name}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="section-label">Pan India Presence</span>
            <div className="accent-line-center" />
            <h2 className="section-title">Service Areas</h2>
            <p className="section-subtitle mx-auto text-center">
              Executing projects across 4 states with dedicated regional teams.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 animate-on-scroll">
            {SERVICE_AREAS.map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#F8F8F8] border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E] hover:bg-red-50 transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="animate-on-scroll-left">
              <span className="section-label" style={{ color: "#ff6b7a" }}>
                Get In Touch
              </span>
              <div className="accent-line" />
              <h2 className="section-title text-white">
                Start Your Project Today
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Tell us about your project and our team will get back to you
                within 24 hours with a detailed proposal.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: COMPANY.phone,
                    sub: "Mon-Sat, 9AM-6PM",
                  },
                  {
                    icon: Mail,
                    label: COMPANY.email,
                    sub: "We reply within 24 hours",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#C8102E]/20 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-[#C8102E]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
