// bonus/filter.js
// ===============================
// Filter data berdasarkan kelas
// ===============================

/**
 * Filter students by class name
 * @param {Array} students
 * @param {string} className
 * @returns {Array}
 */
export function filterByClass(students, className) {
  return students.filter((s) => s.className === className);
}

/**
 * Filter students with score above limit
 * @param {Array} students
 * @param {number} minScore
 * @returns {Array}
 */
export function filterByMinimumScore(students, minScore = 80) {
  return students.filter((s) => s.average() >= minScore);
}

/**
 * DEFAULT EXPORT (untuk import filterByClass from './filter.js')
 */
export default filterByClass;
