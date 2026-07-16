/* ==========================================================================
   Giftbox.id_pku — main.js
   Fitur JavaScript wajib pada project ini:
   1) Filter kategori produk (tanpa reload halaman)
   2) Bootstrap Modal untuk menampilkan detail produk
   3) Validasi form kontak sebelum submit
   4) Navbar collapse otomatis ditangani oleh Bootstrap (data-bs-toggle)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ------------------------------------------------------------------
     1) FILTER KATEGORI PRODUK
     Setiap tombol kategori punya atribut data-filter.
     Setiap kartu produk punya atribut data-category.
     Saat tombol diklik, kartu yang kategorinya tidak cocok disembunyikan.
  ------------------------------------------------------------------ */
  const pills = document.querySelectorAll(".cat-pill");
  const cards = document.querySelectorAll("[data-category]");

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      // reset tombol aktif
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.getAttribute("data-filter");

      cards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");
        const show = filter === "all" || filter === cardCategory;
        card.closest(".product-col").style.display = show ? "block" : "none";
      });
    });
  });

  /* ------------------------------------------------------------------
     2) MODAL DETAIL PRODUK
     Data produk diambil dari atribut data-* pada tombol "Lihat Detail",
     lalu dimasukkan ke elemen-elemen di dalam modal sebelum modal tampil.
  ------------------------------------------------------------------ */
  const productModal = document.getElementById("productModal");
  if (productModal) {
    productModal.addEventListener("show.bs.modal", function (event) {
      const trigger = event.relatedTarget; // tombol yang diklik
      if (!trigger) return;

      const title = trigger.getAttribute("data-title");
      const price = trigger.getAttribute("data-price");
      const desc = trigger.getAttribute("data-desc");
      const category = trigger.getAttribute("data-category-label");
      const iconHTML = trigger.getAttribute("data-icon-target");

      productModal.querySelector("#modalTitle").textContent = title;
      productModal.querySelector("#modalPrice").textContent = price;
      productModal.querySelector("#modalDesc").textContent = desc;
      productModal.querySelector("#modalCategory").textContent = category;

      // salin ikon SVG dari kartu produk yang sesuai ke dalam modal
      const iconSource = document.querySelector(iconHTML);
      const iconWrapper = productModal.querySelector("#modalIcon");
      iconWrapper.innerHTML = iconSource ? iconSource.innerHTML : "";

      // siapkan link WA otomatis berisi nama produk
      const waLink = productModal.querySelector("#modalWaLink");
      const waMessage = encodeURIComponent(
        "Halo Giftbox.id_pku, saya mau tanya-tanya soal " + title + " (" + price + ")"
      );
      waLink.setAttribute("href", "https://wa.me/6287821655923?text=" + waMessage);
    });
  }

  /* ------------------------------------------------------------------
     3) VALIDASI FORM KONTAK
     Validasi manual sebelum form "submit": nama, WA, pesan wajib diisi,
     nomor WA harus berupa angka. Jika ada yang gagal, class Bootstrap
     "is-invalid" ditambahkan supaya pesan error tampil di bawah input.
  ------------------------------------------------------------------ */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const nameInput = document.getElementById("cName");
      const phoneInput = document.getElementById("cPhone");
      const messageInput = document.getElementById("cMessage");

      // reset status sebelumnya
      [nameInput, phoneInput, messageInput].forEach((el) => el.classList.remove("is-invalid"));

      if (nameInput.value.trim().length < 3) {
        nameInput.classList.add("is-invalid");
        valid = false;
      }

      const phoneClean = phoneInput.value.trim();
      const phonePattern = /^[0-9+ ]{9,15}$/;
      if (!phonePattern.test(phoneClean)) {
        phoneInput.classList.add("is-invalid");
        valid = false;
      }

      if (messageInput.value.trim().length < 8) {
        messageInput.classList.add("is-invalid");
        valid = false;
      }

      const successAlert = document.getElementById("formSuccess");

      if (valid) {
        // Simulasi pengiriman: arahkan ke WhatsApp berisi ringkasan pesan
        const text = encodeURIComponent(
          "Halo Giftbox.id_pku, saya " + nameInput.value.trim() +
          " (" + phoneClean + "). " + messageInput.value.trim()
        );
        successAlert.style.display = "block";
        successAlert.textContent = "Pesan siap dikirim! Mengarahkan ke WhatsApp...";
        setTimeout(function () {
          window.open("https://wa.me/6287821655923?text=" + text, "_blank");
        }, 700);
        contactForm.reset();
      } else {
        successAlert.style.display = "none";
      }
    });
  }

  /* ------------------------------------------------------------------
     4) NAVBAR: tandai menu aktif sesuai halaman yang sedang dibuka
  ------------------------------------------------------------------ */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".gb-navbar .nav-link[data-page]").forEach(function (link) {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
});
