type Subject = {
    title: string,
    icon: string,
    color: string,
}

type Question = {
    question: string;
    options: string[];
    answer: string;
}
  
type Quiz = {
    title: string;
    icon: string;
    color: string;
    questions: Question[];
}
  
type QuizzesData = {
    quizzes: Quiz[];
}