function getLetterGrade(score) {
    return (score<60)? 'F' : 
    (score>=60 && score < 70)? 'D' :
    (score>=70 && score < 80)? 'C' :
    (score>=80 && score < 90)? 'B' : 'A'

}

function hasPassed(score) {
    return (score >= 60)? true : false
}

function getFeedback(grade) {
    let res = {A : 'Excellent work', B : 'Good Work', C : "You passed", D : "You passed", F : 'Keep practicing'}
    return res[getLetterGrade(grade)]
}

function createGradeReport(user, score) {
    let  grade, passed, feedback;
    grade = getLetterGrade(score);
    passed = hasPassed(score);
    feedback = getFeedback(score)
    return {
        user,
        score,
        grade,
        passed,
        feedback
    }
}
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));

console.log(createGradeReport('Den', 85))

/*{ name: "Ava", score: 92, grade: "A", passed: true, feedback: "Excellent work" }
{ name: "Noah", score: 48, grade: "F", passed: false, feedback: "Keep practicing" }
{ name: "Mina", score: 75, grade: "C", passed: true, feedback: "You passed" }
{ name: "Sam", score: 60, grade: "D", passed: true, feedback: "You passed" }*/