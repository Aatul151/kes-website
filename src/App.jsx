import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingScreen from "./components/LandingScreen.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Clients from "./pages/Clients.jsx";
import Gallery from "./pages/Gallery.jsx";
import { useContent } from "./context/ContentContext.jsx";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, getSeoForPath } from "./seo/routeSeo.js";
import { scrollToServiceFromHash } from "./utils/scrollToService.js";

const LANDING_SCREEN_HIDDEN_KEY = "kes-landing-screen-hidden";

function upsertMeta(selector, attributes) {
  if (typeof document === "undefined") return;

  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      tag.setAttribute(key, value);
    }
  });
}

function upsertLink(selector, attributes) {
  if (typeof document === "undefined") return;

  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      tag.setAttribute(key, value);
    }
  });
}

function SeoManager({ location }) {
  const { BLOG_POSTS } = useContent();
  const seo = getSeoForPath(location, BLOG_POSTS);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const title = seo.title || SITE_NAME;
    const description = seo.description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${SITE_URL}${seo.path || "/"}`;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [seo]);

  return null;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => scrollToServiceFromHash(), 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "auto";
  }, [location]);
  return null;
}

export default function App() {
  const [location] = useLocation();
  const [showLanding, setShowLanding] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem(LANDING_SCREEN_HIDDEN_KEY) !== "true";
  });
  const isGallery = location === "/view-gallery";

  const handleLandingComplete = ({ persistHide = false } = {}) => {
    if (persistHide && typeof window !== "undefined") {
      window.localStorage.setItem(LANDING_SCREEN_HIDDEN_KEY, "true");
    }
    setShowLanding(false);
  };

  const openLandingScreen = () => {
    setShowLanding(true);
  };

  if (isGallery) {
    return <Gallery />;
  }

  return (
    <>
      <SeoManager location={location} />
      {showLanding && <LandingScreen onComplete={handleLandingComplete} />}
      <div className={`min-h-screen flex flex-col font-poppins transition-opacity duration-500 ${showLanding ? "invisible opacity-0" : "opacity-100"}`}>
        <ScrollToTop />
        {!showLanding && <FloatingActions />}
        <Navbar onOpenLanding={openLandingScreen} />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/clients" component={Clients} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route>
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-[#C8102E] mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-6">Page not found</p>
                  <a href="/" className="btn-primary">Go Home</a>
                </div>
              </div>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}
