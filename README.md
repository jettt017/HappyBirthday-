# 🎂 BirthdayGurl — Bespoke Virtual Celebration Page

<div align="center">
  
  <p align="center">
    <strong>Sebuah kartu ucapan ulang tahun interaktif, sinematik, dan penuh dengan kejutan estetik.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.0.1-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-6.2.3-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

---

## 🌟 Tentang BirthdayGurl

**BirthdayGurl** adalah aplikasi web satu halaman (Single Page Application) berbasis React yang dirancang khusus sebagai kado ulang tahun digital yang interaktif dan memukau. Dengan estetika warna pastel *Champagne*, *Warm Blush*, dan *Amber Glow*, aplikasi ini memberikan pengalaman imersif bagi penerimanya dari awal membuka kotak kado hingga meniup lilin ulang tahun secara virtual.

Aplikasi ini menampilkan efek transisi yang mulus, musik latar belakang sinematik yang menenangkan, efek confetti interaktif, dan berbagai permainan kartu mini di dalam tata letak Bento Grid yang elegan.

---

## 🚀 Fitur Utama

Aplikasi kado digital ini dilengkapi dengan berbagai fitur interaktif premium:

### 1. ✉️ Portal Undangan (Intro Screen)
* Layar pembuka eksklusif yang dipersonalisasi khusus untuk **"Jiyaaa"**.
* Dilengkapi dengan tombol **"Let's Open"** yang memicu ledakan konfeti beresolusi tinggi sebelum masuk ke halaman perayaan utama.

### 2. 🎵 Hub Audio Sinematik (Cinematic Audio Hub)
* Pemutar musik latar belakang piano yang tenang (melalui pemutaran *stream* YouTube tersembunyi).
* Tombol kontrol audio melayang berbentuk piringan hitam/vinyl yang berputar ketika musik aktif.
* Tombol **"Replay"** untuk memutar ulang seluruh rangkaian perayaan dari awal.

### 3. 🎈 Latar Belakang Balon & Glow Dinamis
* Efek gelembung/balon melayang secara acak di latar belakang menggunakan Framer Motion.
* Pencahayaan ambient glow berpendar lembut di latar belakang yang memberikan kesan hangat dan nyaman (*cozy visual vibe*).

### 4. ✍️ Pesan Ketik Otomatis (Typewriter Wishes)
* Pesan ucapan ulang tahun yang diketik secara otomatis dengan jeda dinamis pada tanda baca untuk memberikan irama membaca yang natural dan emosional.

### 5. 🍱 Bento Grid Interaktif
Berisi 4 jenis kartu interaktif unik untuk menghibur sang "Birthday Gurl":
*   **🃏 Tarot Redemption**: Kartu Tarot 3D interaktif yang dapat dibalik (flip) untuk menarik kartu ramalan positif (seperti *The Star*, *The Sun*, *The World*, atau *The Empress*) lengkap dengan pesan ramalan personal untuk tahun yang baru.
*   **🎁 Surprise Present Box**: Kotak hadiah visual 3D yang ketika dibuka akan mengeluarkan konfeti dan memberikan tiket/voucher traktiran digital (seperti voucher sarapan pagi, tiket bioskop, atau secangkir teh buatan rumah) yang siap untuk di-screenshot.
*   **✨ Scratch Reveal Card**: Kartu gosok digital interaktif berbasis Canvas HTML5. Penerima dapat menggosok debu bintang untuk mengungkap pesan rahasia yang tersembunyi di bawahnya.
*   **🏆 Birthday Feats (Achievements)**: Panel pencapaian menyenangkan untuk membuka klaim kualitas diri unik (seperti tingkat radiasi senyuman, rasio kopi-ke-ide-cemerlang, kehangatan empati, dll).

### 6. 🎂 Tiup Lilin Kue Virtual
* Desain kue ulang tahun berlapis lengkap dengan *dripping cream*, buah stroberi, dan taburan meses yang manis.
* **5 buah lilin interaktif** dengan nyala api yang bergoyang secara realistis.
* Pengguna dapat mengeklik setiap lilin untuk memadamkannya secara individu.
* Ketika semua lilin padam, aplikasi akan memicu **kembang api konfeti megah** selama beberapa detik dan menampilkan kotak dialog harapan ulang tahun.

---

## 🛠️ Tech Stack & Pustaka

Aplikasi dibangun menggunakan teknologi modern berikut:

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework Utama** | [React 19](https://react.dev/) | Library UI berbasis komponen terstruktur dan berkinerja tinggi. |
| **Build Tool** | [Vite 6](https://vite.dev/) | Bundler proyek super cepat dengan HMR (Hot Module Replacement). |
| **Bahasa** | [TypeScript](https://www.typescriptlang.org/) | Pengetikan statis aman untuk mengurangi bug kode. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Kerangka kerja CSS utility-first untuk desain responsif cepat. |
| **Animasi** | [Motion (Framer Motion)](https://motion.dev/) | Pustaka animasi deklaratif untuk transisi halaman dan kartu 3D yang sangat mulus. |
| **Efek Visual** | [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) | Efek ledakan kertas konfeti berkinerja tinggi. |
| **Ikon** | [Lucide React](https://lucide.dev/) | Set ikon SVG bersih dan minimalis. |

---

## 📂 Struktur Proyek

Berikut adalah gambaran singkat struktur file utama proyek:

```text
BirthdayGurl/
├── assets/                  # Folder aset statis
├── src/
│   ├── components/          # Komponen UI utama
│   │   ├── interactive/     # Sub-komponen Bento Grid interaktif
│   │   │   ├── AchievementCard.tsx
│   │   │   ├── InteractiveGiftBox.tsx
│   │   │   ├── ScratchRevealCard.tsx
│   │   │   └── SpecialWishCard.tsx   # Kartu Tarot 3D
│   │   ├── BirthdayWishes.tsx        # Efek Typewriter Wish
│   │   ├── CelebrationFooter.tsx     # Lilin & Kue Ulang Tahun
│   │   ├── FloatingBalloons.tsx      # Balon mengapung di latar belakang
│   │   ├── IntroScreen.tsx           # Halaman pembuka personalisasi
│   │   └── CelebrationFooter.tsx
│   ├── types.ts             # Definisi tipe TypeScript
│   ├── App.tsx              # Pengatur alur & state utama aplikasi
│   ├── index.css            # Pengaturan tema dasar & animasi CSS
│   └── main.tsx             # Entry point React
├── index.html               # File HTML utama
├── package.json             # Manajer dependensi & script proyek
├── tsconfig.json            # Konfigurasi TypeScript compiler
└── vite.config.ts           # Konfigurasi Vite & Tailwind CSS Plugin
```

---

## ⚙️ Cara Menjalankan Secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi di komputer Anda:

### Prasyarat
Pastikan komputer Anda sudah terinstal **Node.js** (versi 18 atau lebih baru direkomendasikan).

### Langkah-Langkah:

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/USERNAME/BirthdayGurl.git
   cd BirthdayGurl
   ```

2. **Instal dependensi proyek:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (development server):**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara lokal di alamat: [http://localhost:3000](http://localhost:3000)

4. **Membuat build produksi:**
   Jika Anda ingin mengompilasi kode menjadi file siap unggah ke hosting (seperti Vercel, Netlify, atau GitHub Pages):
   ```bash
   npm run build
   ```
   Hasil build akan disimpan di folder `dist/`.

---

## 🎨 Kustomisasi Kado Anda

Jika Anda ingin menyesuaikan aplikasi ini untuk orang terkasih lainnya:

*   **Mengubah Nama Penerima:** Buka file `src/components/IntroScreen.tsx` dan ubah konstanta `name` di baris ke-12:
    ```typescript
    const name = 'NamaKustomAnda';
    ```
*   **Mengubah Musik Latar:** Buka file `src/App.tsx` dan ganti ID video YouTube pada baris ke-88:
    ```tsx
    src="https://www.youtube.com/embed/KODE_VIDEO_YOUTUBE?autoplay=1&mute=0&loop=1&playlist=KODE_VIDEO_YOUTUBE"
    ```
*   **Mengubah Pesan Ulang Tahun:** Anda dapat memodifikasi isi teks ucapan berdasarkan tipe nada bicara (*heartfelt*, *playful*, atau *poetical*) di dalam objek `wishes` pada file `src/components/BirthdayWishes.tsx`.

---

## 💝 Kredit & Watermark

Aplikasi kado istimewa ini dirancang dengan penuh kehangatan:

*   **Didesain & Dikembangkan oleh:** **gani** (tertera pada watermark kaki halaman utama).
*   **Lisensi:** Bebas digunakan untuk keperluan pribadi guna membahagiakan teman, pasangan, atau keluarga tercinta.

---
<div align="center">
  <sub>Made with 💖 by gani. Happy Birthday to someone wonderful out there!</sub>
</div>
