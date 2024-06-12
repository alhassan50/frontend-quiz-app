import quizData from '../data/quizData.json'

interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  // Define the structure of a single quiz subject
  interface Quiz {
    title: string;
    icon: string;
    color: string;
    questions: Question[];
  }
  
  // Define the structure of the entire quizzes data
  interface QuizzesData {
    quizzes: Quiz[];
  }


export default function fetchQuizQestions(subjectTitle: string) {
    if (!subjectTitle || typeof(subjectTitle) !== "string") throw new Error('Invalid subject')
    const quizSubjectData:QuizzesData = quizData
    const quizQuestions = quizSubjectData.quizzes.find(subject => subjectTitle.toLowerCase() ===  ('/'+subject.title).toLowerCase())
    return quizQuestions?.questions
}
