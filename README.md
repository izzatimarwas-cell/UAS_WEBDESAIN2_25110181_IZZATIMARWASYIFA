# Website Company Profile — Giftbox.id_pku

**Nama :** [Isi Nama Lengkap Mahasiswa]
**NIM :** [Isi Nomor Induk Mahasiswa]
**Matkul :** Web Desain 2 (MKK 123)
**UMKM :** Giftbox.id_pku (Bucket Valentine, Coklat Beruang & Gift Pekanbaru)
**Lokasi :** Pekanbaru, Riau
**Instagram UMKM :** [@giftbox.id_pku](https://instagram.com/giftbox.id_pku)

## Deskripsi

Website company profile untuk **Giftbox.id_pku**, UMKM lokal Pekanbaru yang menjual
bucket bunga, bucket uang wisuda, coklat beruang, papan ucapan acrylic, dan parcel
kado — dengan sistem PO & Ready, harga mulai dari Rp35.000. UMKM ini dipilih karena
sudah aktif berjualan di Instagram namun belum memiliki website resmi.

## Halaman

| Halaman | File | Isi |
|---|---|---|
| Beranda | `index.html` | Hero, highlight kategori produk, keunggulan, testimoni (carousel), CTA |
| Tentang Kami | `about.html` | Cerita UMKM, visi misi, FAQ (accordion) |
| Produk | `produk.html` | Daftar 10 produk dengan filter kategori + modal detail produk |
| Kontak | `kontak.html` | Info kontak, embed Google Maps, form kontak dengan validasi JS |

## Teknologi

- HTML5 (struktur semantik)
- CSS3 custom + Bootstrap 5 (grid & komponen)
- JavaScript vanilla (`js/main.js`)

## Fitur JavaScript

1. **Filter kategori produk** — tombol kategori menyaring kartu produk tanpa reload halaman.
2. **Bootstrap Modal** — menampilkan detail tiap produk (harga, deskripsi, tombol pesan WA).
3. **Bootstrap Carousel** — slider testimoni pelanggan di halaman Beranda.
4. **Bootstrap Accordion** — FAQ di halaman Tentang Kami.
5. **Validasi form kontak** — nama, nomor WA, dan pesan divalidasi sebelum "dikirim"; nomor WA dicek formatnya dengan regex.
6. **Navbar collapse** — menu hamburger responsif di tampilan mobile (komponen Bootstrap).

## Struktur File

```
giftbox-pekanbaru/
├── index.html
├── about.html
├── produk.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Cara Menjalankan

Buka `index.html` langsung di browser, atau aktifkan lewat Live Server / GitHub Pages.
Semua library (Bootstrap 5, Google Fonts) dimuat lewat CDN sehingga membutuhkan koneksi
internet saat dibuka.

## Catatan Pengerjaan

Konten produk dan identitas visual (warna kraft/gold, gaya "gift tag" pada kartu produk)
disesuaikan dengan tema akun Instagram @giftbox.id_pku. Ilustrasi produk dibuat manual
menggunakan SVG (bukan foto asli) agar file tetap ringan dan tidak bergantung pada aset
eksternal.
