import { initDashboard } from "./dashboard.js";

// === Fungsi Load Page Dinamis ===
function loadPage(page, event) {
  fetch(`pages/${page}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("main-content").innerHTML = html;

      // update highlight menu aktif
      document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
      if (event && event.target) event.target.classList.add("active");

      // Jalankan script dashboard kalau halaman dashboard dibuka
      if (page === "dashboard.html") {
        setTimeout(initDashboard, 300);
      }
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = "<p>Gagal memuat halaman.</p>";
    });
}

// === Notifikasi Toggle ===
function toggleNotif() {
  document.getElementById("notifBox").classList.toggle("hidden");
}

// Bikin fungsi global biar bisa dipanggil dari HTML (onclick)
window.loadPage = loadPage;
window.toggleNotif = toggleNotif;

// Muat dashboard pertama kali
window.onload = () => loadPage("dashboard.html", { target: document.querySelector(".sidebar a") });
