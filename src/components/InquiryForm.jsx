import React, { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { PROJECT_TYPES, BUDGET_RANGES, TIMELINES } from "../data/content.js";

const API_URL = import.meta.env.VITE_API_URL || "/api";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

export default function InquiryForm({ prefilledProjectType = "" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: prefilledProjectType,
    budgetRange: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    try {
      const validated = schema.parse(form);
      setErrors({});
      setStatus("loading");

      const response = await fetch(`${API_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: "Request failed" }));
        throw new Error(err.error || "Failed to submit inquiry");
      }

      setStatus("success");
      setForm({
        name: "", company: "", email: "", phone: "",
        projectType: prefilledProjectType, budgetRange: "", timeline: "", message: "",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((e) => { fieldErrors[e.path[0]] = e.message; });
        setErrors(fieldErrors);
        setStatus("idle");
      } else {
        setApiError(err.message || "Failed to submit. Please try again.");
        setStatus("error");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Inquiry Submitted!</h3>
        <p className="text-[#555] max-w-md leading-relaxed text-sm">
          Thank you for reaching out. Our engineering team will review your requirements and contact you within 24-48 business hours.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-primary mt-7">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`form-input ${errors.name ? "border-red-400" : ""}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="form-label">Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`form-input ${errors.email ? "border-red-400" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 **********"
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label className="form-label">Project Type</label>
        <select name="projectType" value={form.projectType} onChange={handleChange} className="form-input">
          <option value="">Select Project Type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Budget Range</label>
          <select name="budgetRange" value={form.budgetRange} onChange={handleChange} className="form-input">
            <option value="">Select Budget Range</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label">Project Timeline</label>
          <select name="timeline" value={form.timeline} onChange={handleChange} className="form-input">
            <option value="">Select Timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Project Details</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project requirements, location, size, and any specific needs..."
          rows={4}
          className="form-input resize-none"
        />
      </div>

      {apiError && (
        <div className="flex items-center gap-3 p-3.5 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
          <p className="text-red-600 text-sm">{apiError}</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
        {status === "loading" ? (
          <><Loader size={16} className="animate-spin" /> Submitting...</>
        ) : (
          <><Send size={16} /> Submit Inquiry</>
        )}
      </button>
    </form>
  );
}
