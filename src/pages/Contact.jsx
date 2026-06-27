import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useContent } from "../context/ContentContext.jsx";
import { SOCIAL_ICON_MAP } from "../utils/socialIcons.js";
import ContactForm from "../components/ContactForm.jsx";

const OFFICES = [
  {
    city: "Gandhinagar (HQ)",
    address: "KES Group, 514,Shree Ugti Corporate Park , Kudasan, Gandhinagar, Gujarat 382421, IN",
    phone: "+91 90999 10579",
    email: "info@kesengineering.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Navsari",
    address: "KES Group, 314,Uma darshan arcade, Navsari, Gujarat 396424, IN",
    phone: "+91 90999 10579",
    email: "info@kesengg.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  const { COMPANY, SOCIAL_LINKS } = useContent();
  useScrollAnimation();

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/heroes/contact.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact KES Group</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Our engineering team will respond within 24 hours with a detailed proposal.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Phone, label: "Call Us", value: COMPANY.phone, sub: "Mon-Sat, 9AM-6PM", href: `tel:${COMPANY.phone}` },
              { icon: Mail, label: "Email Us", value: COMPANY.email, sub: "We reply within 24 hours", href: `mailto:${COMPANY.email}` },
              { icon: MapPin, label: "Visit Us", value: COMPANY.address, sub: "Gandhinagar, Gujarat", href: "#map" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-[#F8F8F8] rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 bg-[#C8102E] rounded-xl flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{item.value}</p>
                  <p className="text-gray-400 text-[11px]">{item.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 animate-on-scroll-left">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-2 animate-on-scroll-right">
              {/* Office Locations */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A1A1A] text-sm mb-4">Our Offices</h3>
                <div className="space-y-5">
                  {OFFICES.map((office, i) => (
                    <div key={i} className={`${i > 0 ? "pt-4 border-t border-gray-100" : ""}`}>
                      <p className="font-semibold text-[#C8102E] text-xs mb-2">{office.city}</p>
                      <div className="space-y-1.5">
                        <div className="flex gap-2">
                          <MapPin size={12} className="text-gray-400 mt-0.5 shrink-0" />
                          <p className="text-gray-600 text-xs leading-relaxed">{office.address}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Phone size={12} className="text-gray-400 shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-gray-600 text-xs hover:text-[#C8102E] transition-colors">{office.phone}</a>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Mail size={12} className="text-gray-400 shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-gray-600 text-xs hover:text-[#C8102E] transition-colors">{office.email}</a>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Clock size={12} className="text-gray-400 shrink-0" />
                          <p className="text-gray-600 text-xs">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl p-1 border border-gray-100">
                <section id="map" className="h-80 bg-gray-200 animate-on-scroll">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KES Engineering Office Location"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}

    </div>
  );
}
