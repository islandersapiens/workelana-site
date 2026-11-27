const fmt = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "17 November 2026" */
export const formatDate = (d: Date): string => fmt.format(d);

/** "2026-11-17" for JSON-LD and sitemaps */
export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);
