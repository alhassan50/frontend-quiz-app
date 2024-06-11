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

export default function getAllSubjects() {
    const quizSubjectData:QuizzesData = quizData
    const allSubjects = quizSubjectData.quizzes.map(subject => ({
        title: subject.title,
        icon: subject.icon,
        color: subject.color
    }))
    
    return allSubjects
}
