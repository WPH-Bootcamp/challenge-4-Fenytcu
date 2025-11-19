// Bonus/stats.js
// ===============================
// Menghitung berbagai statistik kelas dan siswa
// ===============================

function getTotalStudents(students) {
  return students.length;
}

function getClassAverage(students) {
  if (students.length === 0) return 0;

  const total = students.reduce((acc, s) => acc + s.average(), 0);
  return +(total / students.length).toFixed(2);
}

function getHighestScore(students) {
  if (students.length === 0) return null;

  const ranked = [...students].sort((a, b) => b.average() - a.average());
  return ranked[0];
}

function getLowestScore(students) {
  if (students.length === 0) return null;

  const ranked = [...students].sort((a, b) => a.average() - b.average());
  return ranked[0];
}

function getClassStatistics(students, className) {
  const filtered = students.filter((s) => s.className === className);

  if (filtered.length === 0) {
    return {
      className,
      totalStudents: 0,
      averageClassScore: 0,
      highestStudent: null,
      lowestStudent: null,
    };
  }

  return {
    className,
    totalStudents: filtered.length,
    averageClassScore: getClassAverage(filtered),
    highestStudent: getHighestScore(filtered),
    lowestStudent: getLowestScore(filtered),
  };
}

export {
  getTotalStudents,
  getClassAverage,
  getHighestScore,
  getLowestScore,
  getClassStatistics,
};
