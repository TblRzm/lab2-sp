function addLetterGrade(data) {
    let result = [];

    for (let student of data) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        result.push({
            name: student.name,
            score: student.score,
            letter: letter
        });
    }
    return result;
}

module.exports = addLetterGrade;