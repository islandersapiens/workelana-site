/* ===== Ubah bagian ini saja ===== */
const FORM_URL = ''; // kosong = semua tombol Gabung langsung ke Discord
const DISCORD_URL = 'https://discord.gg/3GsxTStmM';
const EMAIL = ''; // kosong = tautan Kontak mengarah ke Discord
export const MEMBER_COUNT = ''; // contoh: "3.200+ anggota". Kosong = tidak ditampilkan
export const PHOTOS: readonly string[] = []; // contoh: ["/foto/kafe.jpg"] di folder public/. Kosong = bagian foto disembunyikan
/* ================================ */

export const JOIN_URL = FORM_URL || DISCORD_URL;
export const CONTACT_URL = EMAIL ? `mailto:${EMAIL}` : DISCORD_URL;
export const SITE_NAME = 'Workelana';
export const SITE_URL = 'https://workelana.com/';
export const OG_IMAGE = '/images/og.png';

/** Shared schema.org publisher, referenced by @id from every page. */
export const ORG = {
  '@type': 'Organization',
  '@id': `${SITE_URL}#org`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}images/logo.png`, width: 620, height: 152 },
  sameAs: [DISCORD_URL],
};
export const ORG_REF = { '@id': ORG['@id'] };
