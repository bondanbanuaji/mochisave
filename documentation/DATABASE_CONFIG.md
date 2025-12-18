# 🗄️ Konfigurasi Database MySQL (Port 3307)

## ✅ Port MySQL Telah Diubah

Port MySQL diganti dari **3306** ke **3307** untuk menghindari konflik dengan instalasi MySQL lain.

---

## 📝 Konfigurasi di .env.local

Pastikan file `.env.local` menggunakan port **3307**:

```env
DATABASE_URL="mysql://root:password@localhost:3307/mochisave"
```

### Format Connection String:
```
mysql://[username]:[password]@localhost:3307/[database_name]
```

**Contoh:**
```env
# Dengan username root tanpa password
DATABASE_URL="mysql://root@localhost:3307/mochisave"

# Dengan username root dan password
DATABASE_URL="mysql://root:mypassword@localhost:3307/mochisave"

# Dengan username kustom
DATABASE_URL="mysql://mochi:secret123@localhost:3307/mochisave"
```

---

## 🚀 Cara Menjalankan MySQL di Port 3307

### Pilihan 1: XAMPP

1. **Buka XAMPP Control Panel**
2. **Klik Config → my.ini** (untuk MySQL)
3. **Cari dan ubah:**
   ```ini
   [mysqld]
   port=3307
   ```
4. **Restart MySQL** dari XAMPP Control Panel

### Pilihan 2: MySQL Standalone

1. **Edit konfigurasi MySQL:**
   ```bash
   # Windows
   C:\\ProgramData\\MySQL\\MySQL Server X.X\\my.ini
   
   # Linux
   /etc/mysql/my.cnf
   ```

2. **Ubah port:**
   ```ini
   [mysqld]
   port=3307
   ```

3. **Restart MySQL:**
   ```bash
   # Windows (Command Prompt sebagai Admin)
   net stop MySQL
   net start MySQL
   
   # Linux
   sudo systemctl restart mysql
   ```

### Pilihan 3: Docker

```bash
docker run -d \
  --name mysql-mochisave \
  -p 3307:3306 \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_DATABASE=mochisave \
  mysql:8.0
```

---

## 🔧 Verifikasi Koneksi

### 1. Cek MySQL Berjalan di Port 3307

```bash
# Windows (PowerShell)
netstat -an | findstr 3307

# Linux/Mac
netstat -tuln | grep 3307
```

### 2. Tes Koneksi dengan MySQL CLI

```bash
mysql -u root -p --port=3307 -h localhost
```

### 3. Tes Koneksi dengan Prisma

```bash
npx prisma db push
```

Jika sukses, akan muncul:
```
✔ Generated Prisma Client to ./node_modules/@prisma/client
```

---

## 🐛 Troubleshooting

### Error: Can't connect to MySQL server

**Solusi:**
1. Pastikan MySQL berjalan di port 3307
2. Cek username dan password benar
3. Pastikan firewall tidak memblokir port 3307

```bash
# Cek service MySQL
# Windows
sc query MySQL

# Linux
systemctl status mysql
```

### Error: Access denied for user

**Solusi:**
```sql
-- Login sebagai root
mysql -u root -p --port=3307

-- Buat user baru (jika perlu)
CREATE USER 'mochi'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON mochisave.* TO 'mochi'@'localhost';
FLUSH PRIVILEGES;
```

### Error: Unknown database 'mochisave'

**Solusi:**
```bash
# Buat database
mysql -u root -p --port=3307 -e "CREATE DATABASE mochisave;"

# Atau lewat Prisma
npx prisma db push
```

---

## 📊 Setup Database Lengkap

### Langkah demi Langkah:

```bash
# 1. Pastikan MySQL berjalan di port 3307
netstat -an | findstr 3307

# 2. Buat database
mysql -u root -p --port=3307 -e "CREATE DATABASE mochisave;"

# 3. Salin file environment
cp .env.example .env.local

# 4. Edit .env.local dengan kredensial Anda
# DATABASE_URL="mysql://root:yourpassword@localhost:3307/mochisave"

# 5. Generate Prisma Client
npx prisma generate

# 6. Jalankan migrasi
npx prisma migrate dev --name init

# 7. (Opsional) Buka Prisma Studio
npx prisma studio
```

---

## 🎯 Perintah Cepat

```bash
# Cek koneksi database
npx prisma db pull

# Reset database
npx prisma migrate reset

# Buka Prisma Studio (GUI)
npx prisma studio

# Cek status database
npx prisma db push --accept-data-loss
```

---

## 🔐 Tips Keamanan

1. **Jangan commit .env.local** ke Git (sudah ada di .gitignore)
2. **Gunakan password kuat** untuk produksi
3. **Jangan gunakan user root** di produksi
4. **Aktifkan SSL** untuk koneksi database produksi

---

## 📞 Butuh Bantuan?

Jika masih ada masalah dengan database:

1. Pastikan service MySQL berjalan
2. Cek port 3307 tidak dipakai aplikasi lain
3. Verifikasi kredensial di .env.local
4. Tes koneksi dengan MySQL CLI terlebih dahulu

**Semoga membantu! 🍡**
