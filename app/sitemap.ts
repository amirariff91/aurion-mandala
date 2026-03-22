import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aurionmandala.com',
      lastModified: new Date("2025-03-22"),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
