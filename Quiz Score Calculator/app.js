const questions = [
  { id: 1, correctAnswer: 'B' },
  { id: 2, correctAnswer: 'A' },
  { id: 3, correctAnswer: 'D' },
  { id: 4, correctAnswer: 'C' },
];
const userAnswers = [
  { questionId: 1, answer: 'B' },
  { questionId: 2, answer: 'C' },
  { questionId: 3, answer: 'D' },
  { questionId: 4, answer: 'C' },
];


function countCorrectAnswers(questions, userAnswers){
    let count = 0;
    for(let i of Object.values(questions)){
        for(let k of Object.values(userAnswers)){
            
            if(i.id === k.questionId && i.correctAnswer === k.answer){
            count++
            }
        }
    }
    return count
} //should match each question with its user answer and return the number correct.

function calculatePercentage(correctCount, totalQuestions){
    let res = (correctCount / totalQuestions) * 100
    return res
} //should return the percentage score.

function getResultMessage(percentage){
    return (percentage >= 60 && percentage < 70)? "You passed" :
    (percentage > 80)?  'Great work' : 'You failed'
} //should return a short message based on the percentage.

function createQuizResult(questions, userAnswers){
    let correctCount, percentage, totalQuestions;
    totalQuestions = questions.length;
    correctCount = countCorrectAnswers(questions, userAnswers);
    percentage = calculatePercentage(correctCount, totalQuestions);
    return{
        correctCount, totalQuestions, percentage, message: getResultMessage(percentage)
    }

} //should return correctCount, totalQuestions, percentage, and message.


console.log(countCorrectAnswers(questions, userAnswers));
console.log(createQuizResult(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));