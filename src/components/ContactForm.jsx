import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Phone, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const { SERVICES, EMAIL_SERVICES } = useContent();
    const [location] = useLocation();
    const [formData, setFormData] = useState({
        name: "", company: "", email: "", phone: "",
        projectType: "", budget: "", timeline: "", message: ""
    });

    const [formStatus, setFormStatus] = useState("");
    const [loader, setLoader] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await emailjs.send(
                EMAIL_SERVICES.SERVICE_ID,
                EMAIL_SERVICES.TEMPLATE_ID,
                { ...formData, to_email: EMAIL_SERVICES.TO_EMAIL },
                EMAIL_SERVICES.PUBLIC_KEY,
            );

            setLoader(false);
            setFormStatus("success");
            setFormData({ name: "", company: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });
            setTimeout(() => setFormStatus(""), 5000);
        } catch (error) {
            setLoader(false);
            setFormStatus("error");
            console.error("FAILED", error);
        }
    };

    return (
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

            {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm mb-5 flex items-center gap-2">
                    <AlertCircle size={16} />
                    <div>
                        <p className="font-semibold">Failed to Send Inquiry</p>
                        <p className="text-xs mt-0.5">
                            Something went wrong while submitting your inquiry. Please try again later or contact us directly.
                        </p>
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
                        <input name="phone" type="number" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="+91 XXXXX XXXXX" />
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
                <button type="submit" disabled={loader} className="btn-primary w-full justify-center">
                    {loader ? "Sending..." : <>Submit Inquiry <ArrowRight size={15} /></>}
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
    );
}
