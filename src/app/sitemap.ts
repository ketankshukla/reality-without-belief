import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://reality.ketanshukla.com",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
