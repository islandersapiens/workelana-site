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
