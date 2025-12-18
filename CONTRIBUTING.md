# Kontribusi ke MochiSave

Terima kasih sudah mempertimbangkan untuk berkontribusi! Kontribusi Anda membuat MochiSave semakin bermanfaat.

## 📋 Daftar Isi

- [Kode Etik](#kode-etik)
- [Mulai Cepat](#mulai-cepat)
- [Proses Pengembangan](#proses-pengembangan)
- [Proses Pull Request](#proses-pull-request)
- [Standar Kode](#standar-kode)
- [Panduan Commit](#panduan-commit)

## 📜 Kode Etik

Proyek ini mengikuti Kode Etik. Dengan berpartisipasi Anda diharapkan mematuhinya.

## 🚀 Mulai Cepat

1. **Fork repository**
2. **Clone fork Anda**
   ```bash
   git clone https://github.com/your-username/mochisave.git
   cd mochisave
   ```

3. **Install dependensi**
   ```bash
   npm install
   ```

4. **Siapkan environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local dengan kredensial Anda
   ```

5. **Siapkan database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. **Jalankan development server**
   ```bash
   npm run dev
   ```

## 🔄 Proses Pengembangan

### Penamaan Branch

- `feature/deskripsi` - Fitur baru
- `fix/deskripsi` - Perbaikan bug
- `docs/deskripsi` - Pembaruan dokumentasi
- `refactor/deskripsi` - Refaktor kode
- `test/deskripsi` - Penambahan tes

Contoh: `feature/tambah-pinterest`

### Membuat Perubahan

1. Buat branch baru
   ```bash
   git checkout -b feature/nama-fitur
   ```

2. Lakukan perubahan Anda
3. Uji perubahan dengan baik
4. Commit perubahan (ikuti panduan commit)
5. Push ke fork Anda
6. Buka Pull Request

## 📤 Proses Pull Request

1. **Perbarui dokumentasi** - Jika ada fitur baru, perbarui README.md
2. **Tambahkan tes** - Sertakan tes untuk fitur baru bila relevan
3. **Ikuti gaya kode** - Pastikan sesuai standar proyek
4. **Perbarui CHANGELOG** - Tambahkan perubahan Anda
5. **Satu fitur per PR** - Fokus pada satu perubahan
6. **Judul PR deskriptif** - Gunakan judul yang jelas

### Template PR

```markdown
## Deskripsi
Ringkas perubahan yang dibuat

## Jenis Perubahan
- [ ] Bug fix
- [ ] Fitur baru
- [ ] Breaking change
- [ ] Pembaruan dokumentasi

## Pengujian
Bagaimana Anda menguji perubahan ini?

## Screenshot (jika ada)
Tambahkan screenshot di sini

## Checklist
- [ ] Kode mengikuti panduan gaya
- [ ] Self-review dilakukan
- [ ] Ada komentar seperlunya
- [ ] Dokumentasi diperbarui
- [ ] Tidak ada peringatan baru
- [ ] Tes sudah ditambahkan
```

## 💻 Standar Kode

### TypeScript

- Gunakan TypeScript untuk kode baru
- Definisikan tipe dengan baik, hindari `any`
- Gunakan interface untuk bentuk objek
- Ekspor tipe bila diperlukan

```typescript
// Baik
interface DownloadOptions {
  quality: string
  format: string
}

// Hindari
const download = (options: any) => { }
```

### Komponen React

- Gunakan functional component dengan hooks
- Jaga komponen kecil dan fokus
- Gunakan nama komponen deskriptif
- Props harus ditipkan

```typescript
interface ButtonProps {
  onClick: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick} className={variant}>{children}</button>
}
```

### Organisasi Berkas

```
src/
├── app/              # Halaman Next.js App Router
├── components/       # Komponen reusable
│   ├── ui/          # Komponen UI dasar
│   ├── layout/      # Komponen layout
│   └── features/    # Komponen fitur
├── lib/             # Utilitas dan helper
├── hooks/           # Custom React hooks
├── types/           # Definisi tipe TypeScript
└── styles/          # Style global
```

### Konvensi Penamaan

- **Komponen**: PascalCase (`Button.tsx`, `DownloadForm.tsx`)
- **Utilitas**: camelCase (`formatDate.ts`, `validators.ts`)
- **Hooks**: camelCase dengan prefiks `use` (`useDownload.ts`)
- **Konstanta**: UPPERCASE (`API_URL`, `MAX_FILE_SIZE`)

### CSS/Styling

- Gunakan utilitas Tailwind CSS
- Gunakan komponen DaisyUI bila tersedia
- Minimalkan CSS kustom
- Gunakan `clsx` untuk conditional class

```tsx
<button className={clsx('btn', variant === 'primary' && 'btn-primary')}>
  Klik saya
</button>
```

## 📝 Panduan Commit

### Format Pesan Commit

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Tipe

- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Hanya dokumentasi
- `style`: Perubahan gaya kode (formatting, dll)
- `refactor`: Refaktor kode
- `test`: Penambahan tes
- `chore`: Tugas pemeliharaan

### Contoh

```bash
feat(download): tambah dukungan Instagram Reels

Menambahkan scraper untuk Instagram Reels dengan dukungan kualitas HD.
Termasuk tes dan pembaruan dokumentasi.

Closes #123
```

```bash
fix(api): perbaiki isu rate limiting

Memperbaiki bug di mana rate limit tidak diperiksa dengan benar
untuk pengguna yang telah login.

Fixes #456
```

## 🧪 Pengujian

### Menjalankan Tes

```bash
# Jalankan semua tes
npm test

# Jalankan dengan coverage
npm run test:coverage

# Jalankan tes tertentu
npm test -- DownloadForm.test.tsx
```

### Menulis Tes

- Tulis tes untuk fitur baru
- Uji edge case
- Gunakan nama tes yang deskriptif

```typescript
describe('DownloadForm', () => {
  it('memvalidasi format URL', () => {
    // Implementasi tes
  })

  it('mendeteksi platform dari URL', () => {
    // Implementasi tes
  })
})
```

## 🐛 Pelaporan Bug

### Template Laporan Bug

```markdown
**Deskripsi bug**
Jelaskan bug dengan jelas

**Langkah Reproduksi**
1. Buka '...'
2. Klik '...'
3. Lihat error

**Perilaku yang Diharapkan**
Apa yang seharusnya terjadi

**Screenshots**
Jika ada, sertakan tangkapan layar

**Environment:**
- OS: [mis. Windows 10]
- Browser: [mis. Chrome 95]
- Versi: [mis. 1.0.0]
```

## 💡 Permintaan Fitur

Kami senang menerima ide fitur! Sertakan:

- **Deskripsi jelas** dari fitur
- **Use case** - Mengapa dibutuhkan?
- **Contoh** - Bagaimana cara kerjanya?
- **Alternatif** - Apakah ada pendekatan lain?

## ❓ Pertanyaan?

- Cek [Issues](https://github.com/yourusername/mochisave/issues)
- Tanya di [Discussions](https://github.com/yourusername/mochisave/discussions)
- Email ke dev@mochisave.com

## 🎉 Apresiasi

Kontributor akan ditambahkan ke README.md dan mendapat badge khusus!

---

**Terima kasih telah berkontribusi ke MochiSave! 🍡**
