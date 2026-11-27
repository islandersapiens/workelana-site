# Workelana

Situs [workelana.com](https://workelana.com), dibangun dengan [Astro](https://astro.build) + TypeScript. Hasilnya HTML statis tanpa JavaScript di browser.

## Perintah

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # cek tipe, build ke dist/, lalu cek keamanan hasil build
```

## Mengubah isi

- Link Discord, email, jumlah anggota, foto: `src/config.ts`
- Panduan: satu file Markdown per panduan di `src/content/panduan/`. Kolom wajib dicek otomatis oleh `src/content.config.ts`; build gagal kalau ada yang kosong atau salah.
- Beranda: `src/pages/index.astro`. Tampilan: `src/styles/global.css`.

## Keamanan

- Header keamanan (CSP ketat, anti-iframe, dll.) ada di `netlify.toml`.
- `scripts/check-dist.mjs` jalan di setiap build dan menggagalkan build kalau ada inline script/style, sumber dari pihak ketiga, link internal yang rusak, atau tag SEO yang hilang.
