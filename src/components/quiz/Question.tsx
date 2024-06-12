//components
import QuizProgressTracker from "./QuizProgressTracker"
import { QuestionFlexContainer } from "../styles/quiz/Question.styles"

function Question({questionStep, quizLength, question}: {questionStep: number, quizLength:  number, question: string}) {
  return (
    <QuestionFlexContainer gap={80}>
        <QuestionFlexContainer>
          <p>
            Question {questionStep + 1} of {quizLength}
          </p>

          <h2>
            {question}
          </h2>
        </QuestionFlexContainer>

        <QuizProgressTracker 
            length={`${((questionStep+1)/quizLength)*100}%`}
        />
    </QuestionFlexContainer>
  )
}

export default Question