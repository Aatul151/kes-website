export const SITE_NAME = "KES Group";
export const SITE_URL = "https://kesprojects.com";
export const DEFAULT_DESCRIPTION =
  "KES Group is India's leading provider of Pre-Engineered Buildings, Steel Structures, Warehouses, Factory Buildings, and Turnkey Industrial Construction Solutions.";

const STATIC_ROUTE_SEO = {
  "/": {
    title: "KES Group - Your Engineering Partner",
    description:
      "KES Group delivers pre-engineered buildings, steel structures, warehouses, factory buildings, and turnkey industrial construction solutions across India.",
  },
  "/about": {
    title: "About KES Group | Industrial Engineering Company",
    description:
      "Learn about KES Group's engineering expertise, manufacturing capabilities, leadership team, and commitment to industrial construction excellence.",
  },
  "/services": {
    title: "Industrial Construction Services | KES Group",
    description:
      "Explore KES Group services including PEB structures, steel buildings, warehouses, factory buildings, and turnkey industrial project delivery.",
  },
  "/projects": {
    title: "Industrial Projects Portfolio | KES Group",
    description:
      "View KES Group's completed industrial projects across manufacturing, warehousing, logistics, pharmaceutical, and infrastructure sectors.",
  },
  "/clients": {
    title: "Our Clients | KES Group",
    description:
      "Discover the leading organizations that trust KES Group for high-quality engineering, EPC, and industrial infrastructure solutions.",
  },
  "/blog": {
    title: "Engineering Blog | KES Group",
    description:
      "Read KES Group insights on pre-engineered buildings, steel structures, industrial construction, project delivery, and sector trends.",
  },
  "/contact": {
    title: "Contact KES Group | Request a Quote",
    description:
      "Contact KES Group for pre-engineered buildings, steel structures, warehouses, and turnkey industrial construction project support.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | KES Group",
    description:
      "Read the KES Group privacy policy to understand how we collect, use, and protect website visitor and client information.",
  },
  "/view-gallery": {
    title: "Project Gallery | KES Group",
    description:
      "Browse the KES Group project gallery featuring industrial buildings, steel structures, warehouses, and completed engineering works.",
  },
};

export function getSeoForPath(pathname = "/", blogPosts = []) {
  const cleanPath = pathname.split("?")[0] || "/";

  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = blogPosts.find((item) => item.slug === slug);

    if (post) {
      return {
        title: `${post.title} | KES Group Blog`,
        description: post.excerpt,
        path: cleanPath,
      };
    }

    return {
      title: "Article Not Found | KES Group Blog",
      description:
        "The requested KES Group blog article could not be found. Browse our latest engineering and construction insights instead.",
      path: cleanPath,
    };
  }

  return {
    ...(STATIC_ROUTE_SEO[cleanPath] || {
      title: "Page Not Found | KES Group",
      description:
        "The page you are looking for could not be found. Explore KES Group's industrial construction services, projects, and company information.",
    }),
    path: cleanPath,
  };
}

export function getPrerenderRoutes(blogPosts = []) {
  return [
    "/",
    "/about",
    "/services",
    "/projects",
    "/clients",
    "/blog",
    "/contact",
    "/privacy-policy",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
}
