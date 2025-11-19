// bonus-menu.js (UPDATED WITH CHALK UI)
import chalk from 'chalk';
import readline from 'readline';
import filterByClass from './filter.js';
import * as stats from './stats.js';
import * as exporter from './export.js';

// Membuat input terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper: tanya user
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// UI Header cantik
function printHeader() {
  console.log(
    chalk.cyanBright('\n══════════════════════════════════════════════')
  );
  console.log(chalk.yellowBright('          📚 BONUS FEATURES MENU 📚'));
  console.log(
    chalk.cyanBright('══════════════════════════════════════════════\n')
  );
}

// MENU UTAMA
export default async function showBonusMenu(manager) {
  printHeader();

  console.log(chalk.green('1.') + ' Filter siswa berdasarkan kelas');
  console.log(chalk.green('2.') + ' Statistik kelas');
  console.log(chalk.green('3.') + ' Export semua kelas ke JSON');
  console.log(chalk.green('4.') + ' Export satu kelas ke JSON');
  console.log(chalk.red('0.') + ' Keluar\n');

  const choice = await ask(chalk.yellow('Pilih menu ➜ '));

  await runBonusFeature(manager, Number(choice));

  rl.close();
}

// JALANKAN FITUR BONUS
export async function runBonusFeature(manager, menu) {
  switch (menu) {
    case 1:
      await menuFilterClass(manager);
      break;

    case 2:
      await menuClassStats(manager);
      break;

    case 3:
      await menuExportAll(manager);
      break;

    case 4:
      await menuExportOne(manager);
      break;

    default:
      console.log(chalk.red('Menu tidak ditemukan ❌'));
  }
}

// ===============================
// MENU 1: FILTER KELAS
// ===============================
async function menuFilterClass(manager) {
  const className = await ask('\nNama kelas yang ingin difilter: ');
  filterByClass(manager, className.trim());
}

// ===============================
// MENU 2: STATISTIK KELAS
// ===============================
async function menuClassStats(manager) {
  const className = await ask('\nNama kelas: ');
  const result = stats.getClassStatistics(manager.getAllStudents(), className);

  console.log(chalk.cyanBright('\n📊 Statistik Kelas'));
  console.log(chalk.white('-----------------------------'));
  console.log('Kelas:', result.className);
  console.log('Jumlah siswa:', result.totalStudents);
  console.log('Rata-rata nilai:', result.averageClassScore);
  if (result.highestStudent)
    console.log('Nilai tertinggi:', result.highestStudent.name);
  if (result.lowestStudent)
    console.log('Nilai terendah:', result.lowestStudent.name);
}

// ===============================
// MENU 3: EXPORT ALL
// ===============================
async function menuExportAll(manager) {
  const summaries = manager.getAllStudents().reduce((acc, s) => {
    let className = s.className;
    if (!acc[className]) acc[className] = [];

    acc[className].push({
      id: s.id,
      name: s.name,
      average: s.getAverage(),
    });

    return acc;
  }, {});

  exporter.exportAllToJSON(summaries);
}

// ===============================
// MENU 4: EXPORT ONE CLASS
// ===============================
async function menuExportOne(manager) {
  const className = await ask('\nNama kelas yang ingin diexport: ');
  const summary = stats.getClassStatistics(
    manager.getAllStudents(),
    className.trim()
  );

  exporter.exportOneClass(summary);
}
