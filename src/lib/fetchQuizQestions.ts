import quizData from '../data/quizData.json'

export default function fetchQuizQestions(subjectTitle: string) {
    if (!subjectTitle || typeof(subjectTitle) !== "string") throw new Error('Invalid subject')
    const quizSubjectData:QuizzesData = quizData
    const quizQuestions = quizSubjectData.quizzes.find(subject => subjectTitle.toLowerCase() ===  ('/'+subject.title).toLowerCase())
    return quizQuestions?.questions
}
