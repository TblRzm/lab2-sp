const calculateAverage = require("./features/average");
const findTopStudent = require("./features/topStudent");
const filterFailed = require("./features/failed");
const addLetterGrade = require("./features/letterGrade");

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

console.log("Анализ успеваемости студентов");
console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Не сдали:", filterFailed(grades, 60));
console.log("Буквенные оценки:", addLetterGrade(grades));