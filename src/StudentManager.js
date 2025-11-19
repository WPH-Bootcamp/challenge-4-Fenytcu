/**
 * Class StudentManager
 * Mengelola koleksi siswa dan operasi-operasi terkait
 *
 * TODO: Implementasikan class StudentManager dengan:
 * - Constructor untuk inisialisasi array students
 * - Method addStudent(student) untuk menambah siswa
 * - Method removeStudent(id) untuk menghapus siswa
 * - Method findStudent(id) untuk mencari siswa
 * - Method updateStudent(id, data) untuk update data siswa
 * - Method getAllStudents() untuk mendapatkan semua siswa
 * - Method getTopStudents(n) untuk mendapatkan top n siswa
 * - Method displayAllStudents() untuk menampilkan semua siswa
 */
import fs from 'fs';
import path from 'path';
import Student from './Student.js';

class StudentManager {
  constructor() {
    this.dataPath = path.join(process.cwd(), 'data.json');
    this.students = [];
    this.loadData();
  }

  saveData() {
    fs.writeFileSync(this.dataPath, JSON.stringify(this.students, null, 2));
  }

  loadData() {
    if (fs.existsSync(this.dataPath)) {
      const raw = fs.readFileSync(this.dataPath);
      const data = JSON.parse(raw);

      this.students = data.map(
        (s) => new Student(s.id, s.name, s.studentClass, s.grades)
      );
    }
  }

  /**
   * Menambah siswa baru ke dalam sistem
   * @param {Student} student - Object Student yang akan ditambahkan
   * @returns {boolean} true jika berhasil, false jika ID sudah ada
   * TODO: Validasi bahwa ID belum digunakan
   */

  addStudent(student) {
    //Menambah siswa baru ke dalam sistem
    const exists = this.students.find((s) => s.id === student.id);
    if (exists) {
      console.log(`Gagal menambah. ID ${student.id} sudah digunakan.`);
      return false;
    }
    this.students.push(student);
    this.saveData();
    console.log(`Siswa ${student.name} berhasil ditambahkan.`);

    return true;
  }

  /**
   * Menghapus siswa berdasarkan ID
   * @param {string} id - ID siswa yang akan dihapus
   * @returns {boolean} true jika berhasil, false jika tidak ditemukan
   * TODO: Cari dan hapus siswa dari array
   */

  removeStudent(id) {
    // menghapus siswa berdasarkan ID
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      console.log(` Siswa dengan ID ${id} tidak ditemukan.`);
      return false;
    }
    const removed = this.students.splice(index, 1);
    console.log(` Siswa ${removed[0].name} telah dihapus.`);
    return true;
  }

  /**
   * Mencari siswa berdasarkan ID
   * @param {string} id - ID siswa yang dicari
   * @returns {Student|null} Object Student jika ditemukan, null jika tidak
   * TODO: Gunakan method array untuk mencari siswa
   */

  findStudent(id) {
    // Mencari siswa berdasarkan ID
    const student = this.students.find((s) => s.id === id);
    return student || null;
  }

  /**
   * Update data siswa
   * @param {string} id - ID siswa yang akan diupdate
   * @param {object} data - Data baru (name, class, dll)
   * @returns {boolean} true jika berhasil, false jika tidak ditemukan
   * TODO: Cari siswa dan update propertinya
   */

  updateStudent(id, data) {
    // Update data siswa
    const student = this.findStudent(id);
    if (!student) {
      console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
      return false;
    }
    if (data.name) student.name = data.name;
    if (data.studentClass) student.studentClass = data.studentClass;

    this.saveData();

    console.log(` Data siswa ${student.name} berhasil diupdate.`);
    return true;
  }

  /**
   * Mendapatkan semua siswa
   * @returns {Array} Array berisi semua siswa
   */

  getAllStudents() {
    return this.students;
    // Mendapatkan semua siswa
  }

  /**
   * Mendapatkan top n siswa berdasarkan rata-rata nilai
   * @param {number} n - Jumlah siswa yang ingin didapatkan
   * @returns {Array} Array berisi top n siswa
   * TODO: Sort siswa berdasarkan rata-rata (descending) dan ambil n teratas
   */

  getTopStudents(n) {
    // Mendapatkan top n siswa berdasarkan rata-rata nilai
    const rankedStudents = [...this.students].sort(
      (a, b) => b.getAverage() - a.getAverage()
      // Sort siswa berdasarkan rata-rata (descending) dan ambil n teratas
    );
    return rankedStudents.slice(0, n);
  }

  /**
   * Menampilkan informasi semua siswa
   * TODO: Loop semua siswa dan panggil displayInfo() untuk masing-masing
   */

  displayAllStudents() {
    // Menampilkan informasi semua siswa
    console.log('Daftar Semua Siswa:');
    if (this.students.length === 0) {
      console.log('Belum ada data siswa.');
      return;
    }
    console.log('====== DAFTAR SEMUA SISWA ======');
    this.students.forEach((student, index) => {
      console.log(`\n#${index + 1}`);
      console.log(student.displayInfo());
    });
  }

  /**
   * BONUS: Mendapatkan siswa berdasarkan kelas
   * @param {string} className - Nama kelas
   * @returns {Array} Array siswa dalam kelas tersebut
   */

  getStudentsByClass(className) {
    // Mendapatkan siswa berdasarkan kelas
    return this.students.filter(
      (student) => student.studentClass === className
    );
  }

  /**
   * BONUS: Mendapatkan statistik kelas
   * @param {string} className - Nama kelas
   * @returns {object} Object berisi statistik (jumlah siswa, rata-rata kelas, dll)
   */

  getClassStatistics(className) {
    // Mendapatkan statistik kelas
    const studentsInClass = this.getStudentsByClass(className);

    if (studentsInClass.length === 0) {
      return null;
    }

    const totalAverage = studentsInClass.reduce(
      (sum, student) => sum + student.getAverage(),
      0
    );

    const classAverage = totalAverage / studentsInClass.length;

    return {
      className: className,
      totalStudents: studentsInClass.length,
      averageClassScore: classAverage,
    };
  }
}

export default StudentManager;
