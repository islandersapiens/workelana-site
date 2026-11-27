export type Tone = 'sun' | 'teal' | 'navy';

/** Channels shown in the Discord window in the hero. */
export const heroChannels = [
  { category: 'Start', channels: ['kenalan-yuk'] },
  { category: 'Pintu Rezeki', channels: ['katalog-loker-remote', 'lapak-gigs-fiverr-upwork-etc', 'berbagi-loker-umum'] },
  { category: 'Review Platform Remote', channels: ['awas-penipuan', 'review-jujur-platform'] },
  { category: 'Ngopi dan Ngantor', channels: ['spot-wfc-favorit'] },
];
export const activeChannel = 'katalog-loker-remote';

export const jobs = [
  { company: 'Mercor', role: 'Generalist Expert', rate: '$40–$70', text: 'Detail lengkap dan link lamaran ada di Discord.' },
  { company: 'Mercor', role: 'Language & Audio Expert', rate: '$35–$50', text: 'Menulis prompt dan jawaban referensi, menilai terjemahan atau kualitas audio. Ada AI interview sekitar 20 menit.' },
];

/** `icon` holds the inner SVG paths of a 24x24 stroke icon. */
export const categories: { name: string; text: string; tone: Tone; channels: string[]; icon: string }[] = [
  { name: 'Pintu Rezeki', tone: 'sun', text: 'Loker remote tiap hari: AI annotation, bahasa Indonesia, expert, dan gig Fiverr atau Upwork.', channels: ['katalog-loker-remote', 'berbagi-loker-umum'], icon: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' },
  { name: 'Review Platform Remote', tone: 'teal', text: 'Review jujur dari yang sudah coba, plus channel khusus untuk loker yang mencurigakan.', channels: ['awas-penipuan', 'review-jujur-platform'], icon: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>' },
  { name: 'Workelana University', tone: 'navy', text: 'Latihan interview bareng, review CV, dan belajar skill baru.', channels: ['latihan-interview', 'cv-yang-dilirik-recruiter'], icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>' },
  { name: 'Ngopi dan Ngantor', tone: 'sun', text: 'Spot WFC favorit dan perlengkapan nomad, dari anggota untuk anggota.', channels: ['spot-wfc-favorit'], icon: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v3M12 3v3"/>' },
  { name: 'Ruang Santai', tone: 'teal', text: 'Ngobrol bebas. Kadang bahas kerja, kadang tidak.', channels: ['community-chat'], icon: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>' },
  { name: 'Kenalan dulu', tone: 'navy', text: 'Sapa anggota lain dan ceritakan bidangmu di channel pembuka.', channels: ['kenalan-yuk'], icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>' },
];

export const steps = [
  { title: 'Klik Gabung Discord gratis', text: 'Kamu langsung diarahkan ke server Discord Workelana. Belum punya akun Discord? Buat gratis di sana.' },
  { title: 'Pilih role bidangmu', text: 'Channel loker yang cocok langsung muncul.' },
  { title: 'Sapa kami', text: 'Mampir ke #kenalan-yuk, lalu mulai baca atau berbagi loker.' },
];

export const rules = [
  'Saling jaga. Bertanya boleh, merendahkan jangan.',
  'Jangan spam atau jualan di luar channel lapak.',
  'Jangan bagikan soal tes atau materi rahasia platform.',
  'Nemu loker mencurigakan? Taruh di #awas-penipuan supaya yang lain ikut waspada.',
];

export const faqs = [
  { q: 'Ada kerja remote untuk fresh graduate?', a: 'Ada, tapi tidak semua loker cocok. Mulai dari bidang yang kamu kuasai, baca syarat tiap loker, dan tanya anggota lain yang sudah pernah mencoba.' },
  { q: 'Apa itu AI annotation?', a: 'Pekerjaan memberi label, menilai, atau mengevaluasi data dan jawaban AI supaya modelnya belajar lebih baik, misalnya menilai terjemahan, audio, atau video.' },
  { q: 'Apakah kerja remote dari Indonesia dibayar dalam dolar?', a: 'Banyak loker dari platform luar negeri membayar dalam dolar AS, tapi tiap platform berbeda. Kisaran bayaran biasanya tertera di loker, jadi cek dulu sebelum melamar.' },
  { q: 'Gratis?', a: 'Ya. Gabung dan baca semua loker dasar gratis.' },
  { q: 'Perlu pengalaman?', a: 'Tidak wajib. Ada loker untuk pemula maupun yang sudah jago, dan kamu bisa tanya langsung ke sesama anggota.' },
  { q: 'Ada link referral?', a: 'Ada. Sebagian link dari admin adalah link referral. Kalau kamu diterima, Workelana dapat bonus kecil, tanpa biaya tambahan untukmu. Selalu kami beri tanda.' },
];
