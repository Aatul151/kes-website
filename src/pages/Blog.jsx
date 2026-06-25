import React, { useState } from "react";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { BLOG_POSTS } from "../data/content.js";

const CATEGORIES = ["All", "PEB", "Warehousing", "Steel Structures", "Project Management", "Industry News"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = BLOG_POSTS.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useScrollAnimation([activeCategory, searchQuery]);

  const featured = BLOG_POSTS[0];

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Knowledge Hub</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">KES Engineering Blog</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Insights, technical articles, and industry news from India's leading industrial construction experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Featured Article</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-on-scroll">
            <div className="relative rounded-xl overflow-hidden h-72">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#C8102E] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                {featured.category}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3 leading-tight">{featured.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                  <span className="text-[#C8102E] font-bold text-xs">{featured.author[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A1A1A]">{featured.author}</p>
                  <p className="text-[10px] text-gray-500">{featured.authorRole}</p>
                </div>
              </div>
              <Link href={`/blog/${featured.slug}`}>
                <button className="btn-primary text-xs">
                  Read Article <ArrowRight size={13} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="bg-white border-b border-gray-100 sticky top-[65px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-9 py-2 text-xs w-56"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-14 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover animate-on-scroll cursor-pointer"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-gray-400 text-[11px] mb-2.5">
                        <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-[#1A1A1A] text-sm leading-snug mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                            <span className="text-[#C8102E] font-bold text-[10px]">{post.author[0]}</span>
                          </div>
                          <span className="text-[11px] text-gray-500">{post.author}</span>
                        </div>
                        <span className="text-[#C8102E] text-xs font-semibold flex items-center gap-1">
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <Tag size={13} /> Popular Topics
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["PEB", "Steel Structures", "Warehouse Design", "Industrial Construction", "Turnkey Projects", "Green Buildings", "Safety", "Project Management"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-[#F8F8F8] border border-gray-200 rounded-full text-xs text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E] hover:bg-red-50 transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
