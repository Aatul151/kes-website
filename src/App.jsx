import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingScreen from "./components/LandingScreen.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Clients from "./pages/Clients.jsx";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding && (
        <LandingScreen onComplete={() => setShowLanding(false)} />
      )}
      <div className={`min-h-screen flex flex-col font-poppins transition-opacity duration-500 ${showLanding ? "invisible opacity-0" : "opacity-100"}`}>
        <ScrollToTop />
        <Navbar />
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
