// bonus-index.js (ESM version)
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import Student from '../src/Student.js';
import StudentManager from '../src/StudentManager.js';
import showBonusMenu from './bonus-menu.js';

const rl = readline.createInterface({ input, output });
const manager = new StudentManager();

async function mainMenu() {
  console.log('\n=== MENU UTAMA ===');
  console.log('1. Tambah Siswa');
  console.log('2. Tampilkan Semua Siswa');
  console.log('3. Bonus Features');
  console.log('0. Keluar');

  const choice = await rl.question('Pilih menu: ');

  switch (choice) {
    case '1':
      await addStudentMenu();
      break;

    case '2':
      manager.displayAllStudents();
      break;

    case '3':
      await showBonusMenu(manager, rl);
      break;

    case '0':
      console.log('Keluar...');
      rl.close();
      return;

    default:
      console.log('Pilihan tidak valid.');
  }

  mainMenu();
}

async function addStudentMenu() {
  console.log('\n=== Tambah Siswa ===');
  const id = await rl.question('ID siswa: ');
  const name = await rl.question('Nama siswa: ');
  const kelas = await rl.question('Kelas siswa: ');

  const student = new Student(id, name, kelas);

  manager.addStudent(student);
  console.log('Siswa berhasil ditambahkan!');
}

mainMenu();
