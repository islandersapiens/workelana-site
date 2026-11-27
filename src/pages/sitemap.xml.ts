import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isoDate } from '../lib/date';

export const GET: APIRoute = async ({ site }) => {
  const guides = (await getCollection('panduan')).sort((a, b) => a.data.order - b.data.order);
  const newest = new Date(Math.max(...guides.map((g) => g.data.updated.getTime())));
  const pages: [string, Date][] = [
    ['/', newest],
    ['/panduan/', newest],
    ...guides.map((g): [string, Date] => [`/panduan/${g.id}/`, g.data.updated]),
    ['/privasi/', new Date('2026-11-27')],
  ];
  const urls = pages
    .map(([path, date]) => `<url><loc>${new URL(path, site).href}</loc><lastmod>${isoDate(date)}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
