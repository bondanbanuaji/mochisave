<div align="center">

# 🍡 MochiSave

### Platform Pengunduh Media Sosial Universal

<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
<img src="https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
<img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>

<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
<img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome"/>
<img src="https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge" alt="Version"/>

[🚀 Demo Langsung](https://mochisave.com) • [📖 Dokumentasi](./) • [🐛 Laporkan Bug](https://github.com/yourusername/mochisave/issues) • [✨ Ajukan Fitur](https://github.com/yourusername/mochisave/issues)

---

### Unduh video, foto, dan audio dari platform media sosial favorit Anda dalam hitungan detik! 🎯

</div>

---

## 🌟 Fitur

<table>
<tr>
<td width="50%">

### 🎬 Dukungan Multi-Platform
- **Facebook** - Video, Foto, Reels, Stories
- **Instagram** - Post, Reels, Stories, IGTV
- **TikTok** - Video tanpa watermark, Audio
- **YouTube** - Video, Audio, Thumbnail
- **X/Twitter** - Video, Foto, GIF
- Platform lain segera hadir!

</td>
<td width="50%">

### ⚡ Fitur Inti
- **Pratinjau Instan** - Lihat sebelum mengunduh
- **Pilihan Kualitas** - HD, SD, Audio saja
- **Unduhan Batch** - Banyak tautan sekaligus
- **Konversi Format** - MP4, MP3, WebM
- **Riwayat Unduhan** - Lacak semua unduhan
- **Tanpa Watermark** - Hasil bersih

</td>
</tr>
</table>

---

## 🎨 Tangkapan Layar

<div align="center">
<table>
<tr>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Hero+Section" width="100%" alt="Hero Section"/>
<br/>
<b>🏠 Hero Section</b>
<br/>
<sub>Latar 3D animasi dengan interaksi halus</sub>
</td>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Download+Interface" width="100%" alt="Antarmuka Unduhan"/>
<br/>
<b>⬇️ Antarmuka Unduhan</b>
<br/>
<sub>Pengalaman unduh yang bersih dan intuitif</sub>
</td>
</tr>
<tr>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/10B981/FFFFFF?text=Dashboard" width="100%" alt="Dashboard"/>
<br/>
<b>📊 Dashboard Pengguna</b>
<br/>
<sub>Kelola unduhan dan riwayat</sub>
</td>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Mobile+View" width="100%" alt="Tampilan Mobile"/>
<br/>
<b>📱 Responsif Mobile</b>
<br/>
<sub>Nyaman di semua perangkat</sub>
</td>
</tr>
</table>
</div>

---

## 🚀 Tumpukan Teknologi

### Frontend
```typescript
Next.js 14 (App Router) + TypeScript + React 18
├── TailwindCSS + DaisyUI          // Styling
├── Three.js + @react-three/fiber  // Grafis 3D
├── Anime.js                       // Mikro-interaksi
├── Lenis                          // Smooth scrolling
├── Framer Motion                  // Transisi halaman
└── React Query                    // Manajemen state data
```

### Backend
```typescript
Next.js API Routes + Prisma ORM
├── Database MySQL
├── NextAuth.js (Google OAuth)
├── Upstash Redis (Rate limiting)
├── Sharp (Pemrosesan gambar)
└── Custom Media Scrapers
```

### Infrastruktur
```yaml
Deployment: Vercel
Database: PlanetScale / Railway
Storage: Google Cloud Storage
Payment: Stripe
Email: SendGrid
Monitoring: Sentry
Analytics: Google Analytics 4
```

---

## 📦 Struktur Proyek

```
mochisave/
├── 📁 prisma/
│   ├── schema.prisma          # Skema database
│   └── migrations/            # Migrasi database
│
├── 📁 public/
│   ├── font/                  # File font Outfit
│   ├── animations/            # Aset animasi
│   └── images/                # Gambar statis
│
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router
│   │   ├── (auth)/           # Halaman autentikasi
│   │   ├── (dashboard)/      # Halaman dashboard
│   │   ├── (platforms)/      # Halaman per platform
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Endpoint NextAuth
│   │   │   ├── download/     # Endpoint unduhan
│   │   │   └── history/      # Endpoint riwayat
│   │   ├── pricing/          # Halaman harga
│   │   ├── layout.tsx        # Layout root
│   │   └── page.tsx          # Homepage
│   │
│   ├── 📁 components/
│   │   ├── ui/               # Komponen UI reusable
│   │   ├── layout/           # Komponen layout (Navbar, Footer)
│   │   ├── features/         # Komponen fitur
│   │   └── animations/       # Komponen animasi
│   │
│   ├── 📁 lib/
│   │   ├── prisma.ts         # Prisma client
│   │   ├── auth.ts           # Konfigurasi auth
│   │   ├── scrapers/         # Scraper platform
│   │   └── utils/            # Fungsi utilitas
│   │
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 types/             # Tipe TypeScript
│   └── 📁 styles/            # Style global
│
├── .env.example               # Template environment variables
├── .gitignore                 # Aturan gitignore
├── next.config.js             # Konfigurasi Next.js
├── tailwind.config.js         # Konfigurasi Tailwind
├── tsconfig.json              # Konfigurasi TypeScript
├── package.json               # Dependensi
└── README.md                  # Berkas ini
```

---

## 🎯 Langkah Cepat

### Prasyarat
- Node.js 18+ dan npm/yarn/pnpm
- MySQL 8.0+
- Akun Google Cloud (untuk OAuth)

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/yourusername/mochisave.git
cd mochisave

# 2. Install dependensi
npm install

# 3. Siapkan environment variables
cp .env.example .env.local
# Edit .env.local dengan kredensial Anda

# 4. Inisialisasi database
npx prisma generate
npx prisma migrate dev --name init

# 5. Jalankan server pengembangan
npm run dev
```

🎉 Buka [http://localhost:3000](http://localhost:3000) dan mulai unduh!

### Environment Variables

Buat file `.env.local` di direktori root dengan variabel berikut:

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3307/mochisave"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Opsional: untuk fitur produksi
STRIPE_SECRET_KEY="sk_test_..."
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

---

## 🎭 Pameran Fitur

### 🎨 UI/UX Interaktif
- **Animasi Halus** - Momentum scrolling dengan Lenis
- **Mikro-interaksi** - Efek hover yang menyenangkan
- **Desain Responsif** - Nyaman di semua perangkat
- **Font Khusus** - Outfit variable untuk tipografi modern

### 🔐 Autentikasi
- **Google OAuth** - Login sekali klik yang aman
- **Manajemen Sesi** - Autentikasi berbasis JWT
- **Akses Berbasis Peran** - Free, Premium, Admin

### 📊 Dashboard Pengguna
- **Riwayat Unduhan** - Lacak semua unduhan
- **Statistik** - Analitik penggunaan dan insight
- **Manajemen Profil** - Atur preferensi
- **Kontrol Langganan** - Kelola akses premium

### 💳 Monetisasi (Segera Hadir)
- **Paket Gratis** - 10 unduhan/hari dengan kualitas standar
- **Premium** - Unduhan HD tanpa batas, tanpa iklan
- **Integrasi Stripe** - Pemrosesan pembayaran aman

---

## 🌐 Platform yang Didukung

<div align="center">

| Platform | Video | Foto | Audio | Stories | Status |
|----------|-------|------|-------|---------|--------|
| 📘 Facebook | ✅ | ✅ | ✅ | ✅ | 🟢 Aktif |
| 📷 Instagram | ✅ | ✅ | ✅ | ✅ | 🟢 Aktif |
| 🎵 TikTok | ✅ | ❌ | ✅ | ❌ | 🟢 Aktif |
| 🎬 YouTube | ✅ | ❌ | ✅ | ❌ | 🟢 Aktif |
| 🐦 X/Twitter | ✅ | ✅ | ❌ | ❌ | 🟢 Aktif |
| 📌 Pinterest | 🔄 | 🔄 | ❌ | ❌ | 🟡 Segera |
| 💼 LinkedIn | 🔄 | 🔄 | ❌ | ❌ | 🟡 Segera |

</div>

---

## 📊 Endpoint API

### Autentikasi
```typescript
POST   /api/auth/signin          # Login dengan Google
POST   /api/auth/signout         # Logout
GET    /api/auth/session         # Dapatkan sesi aktif
```

### Unduhan
```typescript
POST   /api/download/analyze     # Analisis URL & ambil metadata
POST   /api/download/start       # Mulai proses unduh
GET    /api/download/[id]        # Ambil status unduhan
```

### Riwayat
```typescript
GET    /api/history              # Ambil riwayat unduhan pengguna
DELETE /api/history/[id]         # Hapus item riwayat
```

---

## 🛠️ Pengembangan

### Script Tersedia

```bash
# Pengembangan
npm run dev              # Mulai server dev
npm run build            # Build untuk produksi
npm run start            # Jalankan server produksi

# Kualitas Kode
npm run lint             # Jalankan ESLint
npm run type-check       # Pengecekan tipe TypeScript

# Database
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Jalankan migrasi (dev)
npx prisma studio        # Buka Prisma Studio
```

### Skema Database

Aplikasi menggunakan Prisma ORM dengan MySQL. Model utama meliputi:

- **User** - Akun pengguna dan autentikasi
- **Account** - Akun penyedia OAuth
- **Session** - Sesi pengguna
- **Download** - Catatan unduhan dan riwayat
- **Subscription** - Langganan premium

---

## 🔒 Keamanan

- ✅ **Validasi Input** - Validasi skema dengan Zod
- ✅ **Rate Limiting** - Batasan berbasis IP dan pengguna (rencana)
- ✅ **Perlindungan CSRF** - Perlindungan bawaan NextAuth.js
- ✅ **Pencegahan SQL Injection** - Query terparameterisasi Prisma
- ✅ **Pencegahan XSS** - Sanitasi bawaan React
- ✅ **HTTPS Only** - Transmisi data aman
- ✅ **Environment Variables** - Penyimpanan kredensial aman

---

## 🤝 Kontribusi

Kami membuka kontribusi! Cara berkontribusi:

1. 🍴 Fork repository
2. 🌿 Buat branch fitur (`git checkout -b feature/FiturKeren`)
3. ✨ Commit perubahan Anda (`git commit -m 'Tambah FiturKeren'`)
4. 📤 Push ke branch (`git push origin feature/FiturKeren`)
5. 🎉 Buka Pull Request

### Panduan Pengembangan

- Ikuti gaya kode yang ada
- Tulis pesan commit yang bermakna
- Tambahkan tes untuk fitur baru
- Perbarui dokumentasi jika diperlukan
- Pastikan semua tes lulus sebelum PR

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT - lihat berkas [LICENSE](LICENSE) untuk detail.

---

## 🙏 Apresiasi

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://www.prisma.io/) - ORM generasi berikutnya
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Library komponen Tailwind
- [Three.js](https://threejs.org/) - Library grafis 3D
- [Anime.js](https://animejs.com/) - Library animasi
- [NextAuth.js](https://next-auth.js.org/) - Autentikasi untuk Next.js

---

## 🗺️ Roadmap

### Fase 1: MVP ✅
- [x] Setup proyek dasar
- [x] Autentikasi pengguna
- [x] Homepage dan UI
- [x] Struktur API routes
- [x] Skema database

### Fase 2: Fitur Inti 🚧
- [ ] Implementasi scraper platform
- [ ] Sistem antrean unduhan
- [ ] Pemrosesan & penyimpanan file
- [ ] Pelacakan progres

### Fase 3: UX Lanjutan 📋
- [ ] Latar belakang Three.js
- [ ] Animasi halus
- [ ] Dashboard pengguna
- [ ] Halaman riwayat unduhan

### Fase 4: Monetisasi 📋
- [ ] Integrasi Stripe
- [ ] Paket langganan
- [ ] Rate limiting
- [ ] Dashboard admin

### Fase 5: Halaman Platform 📋
- [ ] Halaman downloader Facebook
- [ ] Halaman downloader Instagram
- [ ] Halaman downloader TikTok
- [ ] Halaman downloader YouTube
- [ ] Halaman downloader Twitter

### Fase 6: Penyempurnaan & Rilis 📋
- [ ] Optimasi performa
- [ ] Optimasi SEO
- [ ] Testing & perbaikan bug
- [ ] Deployment produksi

---

## 📞 Dukungan

<div align="center">

### Butuh bantuan? Kami siap!

[![Email](https://img.shields.io/badge/Email-support@mochisave.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:support@mochisave.com)
[![Twitter](https://img.shields.io/badge/Twitter-@mochisave-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mochisave)

</div>

---

## 💡 FAQ

**T: Apakah ini legal?**
J: Alat ini untuk penggunaan pribadi saja. Selalu patuhi hukum hak cipta dan Ketentuan Layanan platform.

**T: Bisakah mengunduh konten privat?**
J: Tidak, hanya konten publik yang dapat diunduh.

**T: Berapa ukuran file maksimum?**
J: Pengguna gratis dapat mengunduh hingga 100MB. Pengguna premium tanpa batas.

**T: Bisakah digunakan komersial?**
J: Paket Pro mencakup hak penggunaan komersial. Hubungi kami untuk detail.

---

<div align="center">

### Dibuat dengan ❤️ oleh Tim MochiSave

**Jika proyek ini bermanfaat, beri kami ⭐!**

[⬆ Kembali ke Atas](#-mochisave)

---

**© 2024 MochiSave. Semua hak dilindungi.**

</div>
