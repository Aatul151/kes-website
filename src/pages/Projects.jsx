import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { MapPin, Maximize2, ArrowRight, Calendar, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";

const FILTERS = ["All", "Manufacturing", "Logistics", "Warehousing", "Pharmaceutical", "Automobile", "Food Processing", "Textile", "Renewable Energy"];

export default function Projects() {
  const { PROJECTS } = useContent();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [imageIdx, setImageIdx] = useState(0);
  useScrollAnimation([activeFilter, selected]);

  useEffect(() => {
    setImageIdx(0);
  }, [selected?.id]);

  const filtered = activeFilter === "All"    ? PROJECTS
    : PROJECTS.filter((p) => p.tag === activeFilter);
  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/heroes/projects.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Our Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            500+ projects delivered across India's most demanding industrial sectors. Here are some of our landmark achievements.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-[65px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      {!selected && <section className="py-14 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-6">
            Showing <span className="font-semibold text-[#1A1A1A]">{filtered.length}</span> projects
            {activeFilter !== "All" && <> in <span className="font-semibold text-[#C8102E]">{activeFilter}</span></>}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base">No projects found for this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  className="project-card h-72 animate-on-scroll cursor-pointer"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={() => setSelected(project)}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="overlay" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="bg-[#C8102E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {project.tag}
                      </span>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                        <Maximize2 size={13} className="text-white" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{project.title}</h3>
                      <div className="flex items-center gap-1 text-gray-300 text-xs mb-1">
                        <MapPin size={11} /> {project.location}
                      </div>
                      <div className="flex items-center gap-3 text-gray-400 text-[11px]">
                        <span className="flex items-center gap-1"><Maximize2 size={10} /> {project.area}</span>
                        <span className="flex items-center gap-1"><Calendar size={10} /> {project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>}

      {/* Project Detail */}
      {selected && (() => {
        const galleryImages =
          selected.images?.length > 0
            ? selected.images
            : [selected.image];
        const goPrev = () =>
          setImageIdx(
            (i) => (i - 1 + galleryImages.length) % galleryImages.length,
          );
        const goNext = () =>
          setImageIdx((i) => (i + 1) % galleryImages.length);

        return (
          <section className="py-10 bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight">
                    {selected.title}
                  </h2>
                  <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm mt-1">
                    <MapPin size={13} className="sm:w-3.5 sm:h-3.5 shrink-0" />
                    {selected.location}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#C8102E] transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Gallery */}
                <div className="lg:col-span-9">
                  <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A]/5 aspect-[16/10]">
                    <img
                      src={galleryImages[imageIdx]}
                      alt={`${selected.title} — image ${imageIdx + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {galleryImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={goPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        <span className="absolute bottom-3 right-3 text-xs text-white bg-black/50 px-2.5 py-1 rounded-full">
                          {imageIdx + 1} / {galleryImages.length}
                        </span>
                      </>
                    )}
                  </div>

                  {galleryImages.length > 1 && (
                    <div className="flex justify-center gap-2 mt-3 overflow-x-auto pb-1">
                      {galleryImages.map((img, i) => (
                        <button
                          key={`${img}-${i}`}
                          type="button"
                          onClick={() => setImageIdx(i)}
                          className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            i === imageIdx
                              ? "border-[#C8102E] ring-2 ring-[#C8102E]/30"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }`}
                          aria-label={`View image ${i + 1}`}
                          aria-current={i === imageIdx ? "true" : undefined}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="lg:col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <span className="bg-[#C8102E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {selected.tag}
                  </span>

                  <div className="grid grid-cols-1 gap-3 mt-6">
                    {[
                      { label: "Industry", value: selected.industry },
                      { label: "Area", value: selected.area },
                      { label: "Year", value: selected.year },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-4 border border-gray-100 bg-[#F8F8F8]"
                      >
                        <p className="text-[10px] text-gray-500 uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-[#1A1A1A]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Scope of Work
                    </p>
                    <p className="text-sm text-gray-700 leading-7">
                      {selected.scope}
                    </p>
                  </div>

                  <Link href="/contact">
                    <button
                      className="btn-primary w-full justify-center text-xs mt-8"
                      onClick={() => setSelected(null)}
                    >
                      Start a Similar Project
                      <ArrowRight size={13} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* CTA */}
      <section className="py-16 bg-[#C8102E]">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-red-100 text-sm mb-7">Join 350+ satisfied clients who trust KES Engineering for their industrial construction needs.</p>
          <Link href="/contact">
            <button className="bg-white text-[#C8102E] font-bold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-all">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
