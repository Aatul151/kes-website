import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { SERVICES, COMPANY, SOCIAL_LINKS } from "../data/content.js";
import { SOCIAL_ICON_MAP } from "../utils/socialIcons.js";

const OFFICES = [
  {
    city: "Gandhinagar (HQ)",
    address: "KES Engineering Pvt. Ltd., 514,Shree Ugti Corporate Park , Kudasan, Gandhinagar, Gujarat 382421, IN",
    phone: "+91 90999 10579",
    email: "info@kesengineering.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Navsari",
    address: "KES Engineering Pvt. Ltd., 314,Uma darshan arcade, Navsari, Gujarat 396424, IN",
    phone: "+91 90999 10579",
    email: "info@kesengg.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  useScrollAnimation();
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "",
    projectType: "", budget: "", timeline: "", message: ""
  });
  const [formStatus, setFormStatus] = useState("");

  // Pre-fill service from URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setFormData((prev) => ({ ...prev, projectType: service }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setFormData({ name: "", company: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label" style={{ color: "#ff6b7a" }}>Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact KES Engineering</h1>
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
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2 className="font-bold text-[#1A1A1A] text-xl mb-1">Request a Quote</h2>
                <p className="text-gray-500 text-sm mb-6">Fill in your project details and we'll prepare a detailed proposal.</p>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-sm mb-5 flex items-center gap-2">
                    <CheckCircle size={16} />
                    <div>
                      <p className="font-semibold">Inquiry Received!</p>
                      <p className="text-xs mt-0.5">Our team will contact you within 24 hours with a detailed proposal.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="form-label">Company Name</label>
                      <input name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Your company" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Project Type *</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} required className="form-input">
                      <option value="">Select project type</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="form-input">
                        <option value="">Select budget range</option>
                        <option>Below Rs. 50 Lakhs</option>
                        <option>Rs. 50L - 1 Crore</option>
                        <option>Rs. 1Cr - 5 Crore</option>
                        <option>Rs. 5Cr - 20 Crore</option>
                        <option>Above Rs. 20 Crore</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Project Timeline</label>
                      <select name="timeline" value={formData.timeline} onChange={handleChange} className="form-input">
                        <option value="">Select timeline</option>
                        <option>Immediate (0-3 months)</option>
                        <option>Short-term (3-6 months)</option>
                        <option>Medium-term (6-12 months)</option>
                        <option>Long-term (12+ months)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Project Description</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Describe your project: location, size, specific requirements, timeline, etc."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Submit Inquiry <ArrowRight size={15} />
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy">
                      <span className="text-[#C8102E] hover:underline cursor-pointer">Privacy Policy</span>
                    </Link>
                    . We never share your data with third parties.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5 animate-on-scroll-right">
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

              {/* Social */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A1A1A] text-sm mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICON_MAP[social.icon];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-50 transition-all"
                      >
                        <Icon size={13} style={{ color: social.color }} />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
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
  );
}
