[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mN9h8nSd)

# Challenge 4: Sistem Manajemen Nilai Siswa

## Deskripsi

Buatlah aplikasi CLI (Command Line Interface) untuk sistem manajemen nilai siswa menggunakan JavaScript dengan pendekatan Object-Oriented Programming (OOP).

## Tujuan Pembelajaran

- Memahami konsep OOP dalam JavaScript (Class, Object, Inheritance, Encapsulation)
- Mengimplementasikan CRUD operations
- Mengelola data menggunakan array dan object
- Membuat interactive CLI application
- Menerapkan error handling

## Fitur yang Harus Diimplementasikan

### 1. Class Student

Buat class `Student` dengan properti:

- `id` (string/number) - ID unik siswa
- `name` (string) - Nama siswa
- `class` (string) - Kelas siswa (misal: "10A", "11B")
- `grades` (object) - Object berisi nilai mata pelajaran

Method yang harus ada:

- `addGrade(subject, score)` - Menambah nilai mata pelajaran
- `getAverage()` - Menghitung rata-rata nilai
- `getGradeStatus()` - Menentukan status (Lulus/Tidak Lulus)
- `displayInfo()` - Menampilkan informasi siswa

### 2. Class StudentManager

Buat class `StudentManager` untuk mengelola data siswa:

Method yang harus ada:

- `addStudent(student)` - Menambah siswa baru
- `removeStudent(id)` - Menghapus siswa berdasarkan ID
- `findStudent(id)` - Mencari siswa berdasarkan ID
- `updateStudent(id, data)` - Update data siswa
- `getAllStudents()` - Mendapatkan semua data siswa
- `getTopStudents(n)` - Mendapatkan n siswa dengan rata-rata tertinggi
- `displayAllStudents()` - Menampilkan semua siswa

### 3. CLI Interface

Implementasikan menu interaktif dengan pilihan:

1. Tambah Siswa Baru
2. Lihat Semua Siswa
3. Cari Siswa (by ID)
4. Update Data Siswa
5. Hapus Siswa
6. Tambah Nilai Siswa
7. Lihat Top 3 Siswa
8. Keluar

## Kriteria Penilaian

### OOP Implementation (40%)

- Penggunaan class dengan benar
- Encapsulation (private/public properties)
- Method yang sesuai dengan tanggung jawab class
- Constructor yang tepat

### Functionality (40%)

- Semua fitur CRUD berfungsi dengan baik
- Perhitungan rata-rata dan status benar
- Pencarian dan sorting berfungsi
- Data persistence (bonus jika menggunakan file)

### Code Quality (20%)

- Clean code dan readable
- Error handling yang baik
- Validasi input
- Dokumentasi/komentar yang jelas

## Ketentuan Teknis

1. **Struktur Nilai:**

   - Setiap siswa memiliki nilai untuk berbagai mata pelajaran
   - Nilai harus dalam rentang 0-100
   - Rata-rata >= 75 = Lulus, < 75 = Tidak Lulus

2. **Validasi:**

   - ID siswa harus unik
   - Nama tidak boleh kosong
   - Nilai harus berupa angka 0-100
   - Input harus divalidasi sebelum diproses

3. **Error Handling:**
   - Tangani error saat siswa tidak ditemukan
   - Tangani input yang tidak valid
   - Berikan pesan error yang informatif

## Contoh Output

```
=== SISTEM MANAJEMEN NILAI SISWA ===
1. Tambah Siswa Baru
2. Lihat Semua Siswa
3. Cari Siswa
4. Update Data Siswa
5. Hapus Siswa
6. Tambah Nilai Siswa
7. Lihat Top 3 Siswa
8. Keluar
Pilih menu (1-8): 2

=== DAFTAR SISWA ===
ID: S001
Nama: Budi Santoso
Kelas: 10A
Mata Pelajaran:
  - Matematika: 85
  - Bahasa Indonesia: 90
  - IPA: 88
Rata-rata: 87.67
Status: Lulus
------------------------
```

## Cara Mengerjakan

1. Clone repository ini
2. Implementasikan class-class yang diperlukan di folder `src/`
3. Implementasikan CLI di file `index.js`
4. Test aplikasi Anda dengan menjalankan `node index.js`
5. Pastikan semua fitur berfungsi dengan baik

## Bonus Points

- Implementasi data persistence menggunakan JSON file
- Tambah fitur export laporan ke file
- Implementasi filtering (misal: filter by class)
- Tambah fitur statistik kelas
- UI yang lebih menarik dengan colors (chalk/colors library)

## Submission

Pastikan repository Anda berisi:

- Source code lengkap
- README.md dengan cara menjalankan

==========================================
Cara Menjalankan Aplikasi (How to Run)

- Pastikan sudah menginstall Node.js.

- Clone repository (jika dari GitHub)
  co :
  git clone https://github.com/username/repo.git

- Masuk ke folder project

- cd challenge-4-Fenytcu

- penginstalan : npm install

- Jalankan aplikasi
  node index.js

Pilih menu yang tersedia

1. Tambah Siswa Baru
2. Lihat Semua Siswa
3. Cari Siswa
4. Update Data Siswa
5. Hapus Siswa
6. Tambah Nilai Siswa
7. Lihat Top 3 Siswa
8. # Keluar
   ===========================================

- # Contoh data atau screenshot hasil running

## 📸 Screenshot Hasil Running (1–8)

### 1. Menu Utama Aplikasi

![Menu Utama](./Screenshot/1%20tambah%20siswa%20baru.jpg)

### 2. Tambah Siswa Baru

![Tambah Siswa](./Screenshot/2%20Lihat%20semua%20siswa.jpg)

### 3. Lihat Semua Siswa

![Daftar Semua Siswa](./Screenshot/3%20Cari%20siswa.jpg)

### 4. Mencari Siswa Berdasarkan ID

![Cari Siswa](./Screenshot/4%20Update%20data%20siswa.jpg)

### 5. Menghapus Siswa

![Hapus Siswa](./Screenshot/5%20Hapus%20siswa.jpg)

### 6. Menambah Nilai ke Siswa

![Tambah Nilai Siswa](./Screenshot/6%20Tambah%20Nilai%20Siswa.jpgg)

### 7. Lihat Top 3 Siswa

![Top 3 Siswa](./Screenshot/7%20Lihat%20Top%203%20Siswa.jpg)

### 8. Keluar

# ![Keluar](./Screenshot/8%20Keluar.jpg)

===================================

- # Dokumentasi kode yang jelas
  📘 Dokumentasi Kode – Berdasarkan Menu Aplikasi

1. Tambah Siswa Baru

Menambahkan siswa baru ke dalam sistem.
Validasi: ID, nama, dan kelas harus diisi.

function addStudent() {
rl.question("Masukkan ID: ", (id) => {
rl.question("Masukkan Nama: ", (name) => {
rl.question("Masukkan Kelas: ", (kelas) => {
const newStudent = new Student(id, name, kelas);
studentManager.addStudent(newStudent);
console.log("Siswa berhasil ditambahkan!");
mainMenu();
});
});
});
}

2. Lihat Semua Siswa

Menampilkan seluruh siswa dalam bentuk tabel.

function listAllStudents() {
const students = studentManager.getAllStudents();
console.table(students);
mainMenu();
}

3. Cari Siswa

Mencari siswa berdasarkan ID.

function findStudentById() {
rl.question("Masukkan ID siswa: ", (id) => {
const student = studentManager.findStudent(id);
if (student) {
student.displayInfo();
} else {
console.log("Siswa tidak ditemukan.");
}
mainMenu();
});
}

4. Update Data Siswa

Mengubah nama atau kelas siswa berdasarkan ID.

function updateStudent() {
rl.question("Masukkan ID siswa: ", (id) => {
const student = studentManager.findStudent(id);
if (!student) return mainMenu();

    rl.question("Nama baru: ", (newName) => {
      rl.question("Kelas baru: ", (newClass) => {
        student.name = newName || student.name;
        student.studentClass = newClass || student.studentClass;
        studentManager.saveData();
        console.log("Data siswa berhasil diperbarui!");
        mainMenu();
      });
    });

});
}

5. Hapus Siswa

Menghapus siswa dari list berdasarkan ID.

function deleteStudent() {
rl.question("Masukkan ID siswa: ", (id) => {
studentManager.deleteStudent(id);
console.log("Siswa berhasil dihapus!");
mainMenu();
});
}

6. Tambah Nilai Siswa

Menambahkan atau mengupdate nilai mata pelajaran.

function addStudentGrade() {
rl.question("Masukkan ID siswa: ", (id) => {
const student = studentManager.findStudent(id);
if (!student) return mainMenu();

    rl.question("Nama mata pelajaran: ", (subject) => {
      rl.question("Nilai: ", (score) => {
        student.addGrade(subject, Number(score));
        studentManager.saveData();
        console.log("Nilai berhasil ditambahkan!");
        mainMenu();
      });
    });

});
}

7. Lihat Top 3 Siswa

Menampilkan 3 siswa dengan rata-rata nilai tertinggi.

function showTop3() {
const top = studentManager.getTopStudents(3);
console.table(
top.map(s => ({
ID: s.id,
Nama: s.name,
Kelas: s.studentClass,
RataRata: s.getAverage().toFixed(2)
}))
);
mainMenu();
}

8. Keluar

Mengakhiri aplikasi CLI.

function exitProgram() {
console.log("Terima kasih telah menggunakan aplikasi!");
rl.close();
}
=====================================================

## Tips

- Mulai dengan membuat class Student terlebih dahulu
- Test setiap method sebelum melanjutkan
- Gunakan readline-sync atau inquirer untuk input CLI
- Pisahkan logic dan UI untuk code yang lebih clean
- Commit secara berkala dengan pesan yang jelas

## Resources

- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Node.js readline-sync](https://www.npmjs.com/package/readline-sync)
- [JavaScript OOP Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)

---

**Deadline:** [Tentukan deadline sesuai kebutuhan]

**Happy Coding!**

# t-challenge-4-rep
