/* ===== UBAH BAGIAN INI SAJA ===== */
var CONFIG = {
  FORM_URL: "", // kosongkan = semua tombol langsung ke Discord. Isi link form hanya kalau nanti pakai form
  DISCORD_URL: "https://discord.gg/3GsxTStmM", // dipakai kalau FORM_URL dikosongkan
  EMAIL: "", // kosong = tautan Kontak mengarah ke Discord. Isi email kalau sudah punya
  PRIVACY_URL: "privasi/",
  MEMBER_COUNT: "", // contoh: "3.200+ anggota". Kosongkan kalau belum mau ditampilkan.
  PHOTOS: [] // contoh: ["foto/kafe.jpg","foto/meetup.jpg"]. Kosong = bagian foto disembunyikan.
};
/* ================================= */
(function(){
  var target = CONFIG.FORM_URL || CONFIG.DISCORD_URL;
  var j = document.querySelectorAll("[data-join]");
  for (var i=0;i<j.length;i++){ j[i].setAttribute("href", target); }
  var mail = CONFIG.EMAIL ? "mailto:" + CONFIG.EMAIL : CONFIG.DISCORD_URL;
  document.getElementById("contact").setAttribute("href", mail);
  document.getElementById("priv").setAttribute("href", CONFIG.PRIVACY_URL);
  document.getElementById("yr").textContent = new Date().getFullYear();
  if (CONFIG.MEMBER_COUNT){ var m=document.getElementById("members"); m.textContent=CONFIG.MEMBER_COUNT; m.className="members show"; }
  if (CONFIG.PHOTOS && CONFIG.PHOTOS.length){
    var g=document.getElementById("gallery");
    CONFIG.PHOTOS.forEach(function(src){ var im=document.createElement("img"); im.src=src; im.alt="Suasana kerja anggota Workelana"; im.loading="lazy"; g.appendChild(im); });
    document.getElementById("foto").className="show";
  }
})();
