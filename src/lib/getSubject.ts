import quizData from '../data/quizData.json'

// Define the structure of a single question
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

export default function getSubject(subjectTitle: string) {
    const quizSubjectData:QuizzesData = quizData
    const selectedSubject = quizSubjectData.quizzes.find(subject => subjectTitle.toLowerCase() ===  ('/'+subject.title).toLowerCase())

    if (selectedSubject === undefined) return undefined

    return {
        title: selectedSubject.title,
        icon: selectedSubject.icon,
        color: selectedSubject.color
    }
}
