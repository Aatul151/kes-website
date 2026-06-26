import React, { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext(null);

const CONTENT_URL = "/content.js";

async function loadContentModule() {
  const response = await fetch(CONTENT_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch content.js (${response.status})`);
  }
  const source = await response.text();
  const blob = new Blob([source], { type: "text/javascript" });
  const blobUrl = URL.createObjectURL(blob);
  try {
    return await import(/* @vite-ignore */ blobUrl);
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    loadContentModule()
      .then((mod) => {
        if (!cancelled) setContent(mod);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] text-white p-6">
        <div className="text-center max-w-md">
          <p className="text-[#C8102E] font-semibold mb-2">Unable to load site content</p>
          <p className="text-sm text-gray-400">
            Please check that <code className="text-gray-300">content.js</code> is available and try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">
        <div className="w-10 h-10 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return content;
}
