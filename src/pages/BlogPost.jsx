import React from "react";
import { Link, useParams } from "wouter";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { BLOG_POSTS } from "../data/content.js";

function renderContent(content) {
  const lines = content.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-[#1A1A1A] mt-8 mb-3">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-[#1A1A1A] text-sm mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(
          <li key={i} className="text-gray-700 text-sm leading-relaxed">
            {lines[i].replace("- ", "")}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 my-3 ml-2">
          {listItems}
        </ul>
      );
      continue;
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPost() {
  useScrollAnimation();
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#C8102E] mb-4">Article Not Found</h1>
          <Link href="/blog">
            <button className="btn-primary text-xs">Back to Blog</button>
          </Link>
        </div>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const otherRelated = related.length < 3
    ? [...related, ...BLOG_POSTS.filter((p) => p.id !== post.id && !related.includes(p)).slice(0, 3 - related.length)]
    : related;

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white text-xs mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </button>
          </Link>
          <span className="inline-block bg-[#C8102E] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-gray-400 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#C8102E] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">{post.author[0]}</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">{post.author}</p>
                <p className="text-gray-500 text-[10px]">{post.authorRole}</p>
              </div>
            </div>
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl mb-8 shadow-md"
              />
              <div className="prose max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Tag size={12} /> Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#F8F8F8] border border-gray-200 rounded-full text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Share2 size={12} /> Share This Article
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, label: "LinkedIn", color: "#0077B5" },
                    { Icon: Twitter, label: "Twitter", color: "#1DA1F2" },
                    { Icon: Facebook, label: "Facebook", color: "#1877F2" },
                  ].map(({ Icon, label, color }) => (
                    <button
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-xs text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      <Icon size={13} style={{ color }} /> {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-4">About the Author</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{post.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">{post.author}</p>
                    <p className="text-gray-500 text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  A senior member of KES Engineering's technical team with extensive experience in industrial construction and structural engineering.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-[#C8102E] rounded-xl p-5 text-white">
                <h4 className="font-bold text-base mb-2">Start Your Project</h4>
                <p className="text-red-100 text-xs leading-relaxed mb-4">
                  Ready to build? Our engineering team is here to help you plan and execute your industrial facility.
                </p>
                <Link href="/contact">
                  <button className="bg-white text-[#C8102E] font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-all w-full">
                    Request a Quote
                  </button>
                </Link>
              </div>

              {/* Related Posts */}
              {otherRelated.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {otherRelated.map((rp) => (
                      <Link key={rp.id} href={`/blog/${rp.slug}`}>
                        <div className="flex gap-3 group cursor-pointer">
                          <img
                            src={rp.image}
                            alt={rp.title}
                            className="w-16 h-14 object-cover rounded-lg shrink-0"
                          />
                          <div>
                            <p className="text-xs font-medium text-[#1A1A1A] leading-snug group-hover:text-[#C8102E] transition-colors line-clamp-2">
                              {rp.title}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">{rp.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-14 bg-[#F8F8F8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-[#1A1A1A] text-lg">More Articles</h3>
            <Link href="/blog">
              <button className="btn-outline text-xs">View All <ArrowRight size={12} /></button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherRelated.map((rp) => (
              <Link key={rp.id} href={`/blog/${rp.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover cursor-pointer">
                  <img src={rp.image} alt={rp.title} className="w-full h-36 object-cover" />
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-[#C8102E] uppercase tracking-wider">{rp.category}</span>
                    <h4 className="font-semibold text-[#1A1A1A] text-sm mt-1 leading-snug line-clamp-2">{rp.title}</h4>
                    <p className="text-gray-400 text-[11px] mt-2">{rp.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
