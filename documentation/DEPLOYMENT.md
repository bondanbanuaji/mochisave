# 🚀 Panduan Deployment MochiSave

Panduan lengkap untuk men-deploy MochiSave ke produksi.

## 📋 Checklist Pra-Deployment

### Layanan yang Dibutuhkan
- [ ] Akun Vercel (hosting)
- [ ] Database MySQL (PlanetScale direkomendasikan)
- [ ] Proyek Google Cloud Console (OAuth)
- [ ] Akun Stripe (pembayaran)
- [ ] Nama domain (opsional tapi disarankan)

### Environment Variables
Pastikan semua variabel ini dikonfigurasi di platform deployment Anda:

```env
# Database
DATABASE_URL="mysql://..."

# NextAuth
NEXTAUTH_URL="https://domainanda.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Stripe (Opsional untuk MVP)
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Layanan Opsional
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
RAPIDAPI_KEY=""
```

---

## 🗄️ Setup Database (PlanetScale)

### 1. Buat Database

```bash
# Install PlanetScale CLI
brew install planetscale/tap/pscale

# Login
pscale auth login

# Buat database
pscale database create mochisave --region us-east

# Buat branch
pscale branch create mochisave main
```

### 2. Ambil Connection String

```bash
# Ambil connection string
pscale connect mochisave main

# Atau buat password
pscale password create mochisave main production
```

### 3. Jalankan Migrasi

```bash
# Perbarui DATABASE_URL di .env
# Lalu jalankan migrasi
npx prisma migrate deploy
npx prisma generate
```

---

## 🔐 Setup Google OAuth

### 1. Buat Proyek
1. Masuk ke [Google Cloud Console](https://console.cloud.google.com/)
2. Buat proyek baru: "MochiSave"
3. Aktifkan Google+ API

### 2. Buat Kredensial OAuth
1. Buka "APIs & Services" > "Credentials"
2. Klik "Create Credentials" > "OAuth 2.0 Client ID"
3. Tipe aplikasi: Web application
4. Nama: "MochiSave Production"

### 3. Konfigurasi URI Terotorisasi

**Authorized JavaScript origins:**
```
https://domainanda.com
https://www.domainanda.com
```

**Authorized redirect URIs:**
```
https://domainanda.com/api/auth/callback/google
https://www.domainanda.com/api/auth/callback/google
```

### 4. Salin Kredensial
- Salin Client ID → `GOOGLE_CLIENT_ID`
- Salin Client Secret → `GOOGLE_CLIENT_SECRET`

---

## 💳 Setup Stripe (Opsional)

### 1. Buat Akun
- Daftar di [Stripe](https://stripe.com/)
- Aktivasi akun Anda

### 2. Ambil API Keys
1. Buka Developers > API keys
2. Salin:
   - Publishable key → `STRIPE_PUBLISHABLE_KEY`
   - Secret key → `STRIPE_SECRET_KEY`

### 3. Buat Produk
1. Buka menu Products
2. Buat produk untuk:
   - Premium Plan ($9/bulan)
   - Pro Plan ($29/bulan)

### 4. Setup Webhook
1. Buka Developers > Webhooks
2. Tambahkan endpoint: `https://domainanda.com/api/webhooks/stripe`
3. Pilih event:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Salin webhook secret → `STRIPE_WEBHOOK_SECRET`

---

## ▲ Deployment Vercel

### Opsi 1: Integrasi GitHub (Direkomendasikan)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Hubungkan ke Vercel**
   - Buka [Vercel](https://vercel.com/)
   - Klik "Import Project"
   - Pilih repository Anda
   - Konfigurasi proyek:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next

3. **Tambah Environment Variables**
   - Buka Settings > Environment Variables
   - Tambahkan semua variabel dari `.env.example`
   - Gunakan nilai produksi

4. **Deploy**
   - Klik "Deploy"
   - Tunggu build selesai
   - Situs Anda live! 🎉

### Opsi 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Untuk produksi
vercel --prod
```

---

## 🌐 Setup Domain Kustom

### 1. Tambahkan Domain ke Vercel
1. Buka pengaturan proyek
2. Navigasi ke Domains
3. Tambahkan domain: `domainanda.com`

### 2. Konfigurasi DNS

Tambah record berikut pada penyedia domain Anda:

**Untuk Apex Domain (domainanda.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Untuk Subdomain WWW:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Sertifikat SSL
- Vercel secara otomatis membuat sertifikat SSL
- Tunggu 1-2 menit hingga aktif
- HTTPS akan aktif otomatis

### 4. Perbarui OAuth Redirect URI
- Perbarui konsol Google OAuth dengan domain baru
- Perbarui `NEXTAUTH_URL`
- Redeploy aplikasi

---

## 🔍 Verifikasi Pasca-Deployment

### 1. Tes Autentikasi
- [ ] Kunjungi homepage
- [ ] Klik "Sign In"
- [ ] Login dengan Google
- [ ] Verifikasi pengguna login
- [ ] Cek database untuk record pengguna

### 2. Tes Fitur Unduhan
- [ ] Tempel URL valid
- [ ] Klik unduh
- [ ] Verifikasi record unduhan dibuat
- [ ] Cek status unduhan diperbarui

### 3. Tes Rate Limiting
- [ ] Lakukan banyak unduhan sebagai tamu
- [ ] Pastikan limit aktif setelah 10 unduhan
- [ ] Tes dengan pengguna login

### 4. Tes Alur Pembayaran (jika Stripe aktif)
- [ ] Buka halaman pricing
- [ ] Klik "Go Premium"
- [ ] Selesaikan pembayaran uji
- [ ] Verifikasi subscription di database
- [ ] Verifikasi role pengguna diperbarui

### 5. Tes Semua Halaman
- [ ] Homepage
- [ ] Semua halaman platform
- [ ] Halaman About
- [ ] Halaman Contact
- [ ] Halaman Pricing
- [ ] Halaman Terms & Privacy

---

## 🐛 Troubleshooting

### Kegagalan Build

**Error: Module not found**
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
rm package-lock.json
npm install
```

**Error: Prisma Client not generated**
```bash
# Tambahkan ke scripts package.json:
"postinstall": "prisma generate"
```

### Masalah Koneksi Database

**Error: Can't reach database server**
- Pastikan DATABASE_URL benar
- Verifikasi database berjalan
- Cek whitelist IP (PlanetScale)

```bash
# Tes koneksi
npx prisma db push
```

### Masalah OAuth

**Error: redirect_uri_mismatch**
- Pastikan redirect URI di Google Console sama persis
- Cek variabel NEXTAUTH_URL
- Gunakan protokol HTTPS untuk produksi

### Rate Limiting Tidak Bekerja

**Unduhan tidak dibatasi**
```typescript
// Pastikan Redis terhubung (jika memakai Redis)
// Atau verifikasi penyimpanan in-memory berjalan
```

---

## 📊 Monitoring & Analitik

### Analitik Vercel
1. Aktifkan di pengaturan proyek
2. Lihat dashboard metrik
3. Pantau:
   - Page views
   - Skor performa
   - Error rate

### Monitoring Database (PlanetScale)
- Periksa jumlah koneksi
- Monitor performa query
- Pasang alert untuk masalah

### Pelacakan Error (Direkomendasikan: Sentry)
```bash
npm install @sentry/nextjs

# Konfigurasi Sentry
npx @sentry/wizard -i nextjs
```

---

## 🔄 Continuous Deployment

### Deploy Otomatis
Vercel otomatis deploy setiap push ke branch main.

### Preview Deployment
Setiap pull request mendapat URL preview:
```
https://mochisave-git-feature-branch.vercel.app
```

### Rollback
Jika terjadi masalah:
1. Buka dashboard Vercel
2. Klik "Deployments"
3. Pilih deployment terakhir yang berfungsi
4. Klik menu "..." > "Promote to Production"

---

## 🔐 Praktik Keamanan

### Environment Variables
- [ ] Jangan pernah commit `.env`
- [ ] Gunakan secret yang kuat
- [ ] Rotasi key secara berkala
- [ ] Gunakan key berbeda untuk dev/prod

### Database
- [ ] Aktifkan SSL
- [ ] Gunakan connection pooling
- [ ] Backup rutin
- [ ] Monitor aktivitas mencurigakan

### Aplikasi
- [ ] Update dependensi secara berkala
- [ ] Aktifkan security headers
- [ ] Implementasi CORS dengan benar
- [ ] Audit keamanan berkala

---

## 📱 Optimasi Performa

### Pengaturan Vercel
```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

### Optimasi Database
```typescript
// Gunakan connection pooling
datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
  relationMode = "prisma"
}
```

---

## 🎉 Checklist Peluncuran

### Langkah Akhir Sebelum Rilis
- [ ] Semua tes lulus
- [ ] Dokumentasi diperbarui
- [ ] Environment variables dikonfigurasi
- [ ] Database dimigrasi
- [ ] OAuth dikonfigurasi
- [ ] Domain kustom disetel
- [ ] Sertifikat SSL aktif
- [ ] Semua fitur diuji
- [ ] Error tracking aktif
- [ ] Analitik terpasang
- [ ] Meta tag SEO ditambahkan
- [ ] Gambar sosial media disiapkan
- [ ] Sitemap digenerasi
- [ ] robots.txt dikonfigurasi

### Pasca Rilis
- [ ] Pantau error rate
- [ ] Cek metrik performa
- [ ] Verifikasi seluruh email berjalan
- [ ] Tes alur pembayaran
- [ ] Pantau feedback pengguna
- [ ] Setup status page
- [ ] Susun strategi backup

---

## 📞 Dukungan

Jika mengalami masalah saat deployment:

1. Cek [Dokumentasi Vercel](https://vercel.com/docs)
2. Cek [Dokumentasi Next.js](https://nextjs.org/docs)
3. Periksa log deployment
4. Hubungi support@mochisave.com

---

## 🎊 Selamat!

Platform MochiSave Anda kini live! 🚀

Jangan lupa untuk:
- Bagikan di media sosial
- Kumpulkan feedback pengguna
- Iterasi dan tingkatkan
- Pantau performa

**Selamat men-deploy! 🍡**
