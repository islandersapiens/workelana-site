# Workelana

Situs [workelana.com](https://workelana.com), dibangun dengan [Astro](https://astro.build) + TypeScript. Hasilnya HTML statis tanpa JavaScript di browser.

## Perintah

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # cek tipe, build ke dist/, lalu cek keamanan hasil build
```

## Struktur

```
public/              file yang disalin apa adanya (favicon, robots.txt, images/)
scripts/             pemeriksa hasil build (check-dist.mjs)
src/
  assets/fonts/      font Plus Jakarta Sans (di-host sendiri)
  components/        SiteHeader, SiteFooter, GuideCard, PromoCard
    home/            section-section beranda (Hero, JobTickets, Faq, ...)
  content/panduan/   artikel panduan, satu file Markdown per panduan
  data/home.ts       isi beranda: loker contoh, kategori, aturan, FAQ
  layouts/           Base (kerangka halaman) dan Article (panduan, privasi)
  lib/               fungsi bantu (format tanggal)
  pages/             rute situs: /, /panduan/, /panduan/[slug]/, /privasi/, /sitemap.xml
  styles/global.css  semua tampilan
  config.ts          link Discord, email, jumlah anggota, foto
```

## Mengubah isi

- Link Discord, email, jumlah anggota, foto: `src/config.ts`
- Panduan: satu file Markdown per panduan di `src/content/panduan/`. Kolom wajib dicek otomatis oleh `src/content.config.ts`; build gagal kalau ada yang kosong atau salah.
- Isi beranda: `src/data/home.ts`. Urutan section: `src/pages/index.astro`. Tampilan: `src/styles/global.css`.

## Keamanan

- Header keamanan (CSP ketat, anti-iframe, dll.) ada di `netlify.toml`.
- `scripts/check-dist.mjs` jalan di setiap build dan menggagalkan build kalau ada inline script/style, sumber dari pihak ketiga, link internal yang rusak, atau tag SEO yang hilang.
