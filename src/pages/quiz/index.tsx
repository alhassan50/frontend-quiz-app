import { useState } from "react"
import { useLocation } from "react-router-dom"
import fetchQuizQestions from "../../lib/fetchQuizQestions";
import Grid from "../../components/shared/Grid";
import Question from "../../components/quiz/Question";
import styled from "styled-components";
import AnswerCard from "../../components/quiz/AnswerCard";
import CategoryNotFound from "../../components/quiz/SubjectNotFound";

type Question = {
  question: string;
  options: string[];
  answer: string;
}

const Options = styled.ul`
  /* sm:gap-4 md:gap-6 text */
  display: grid;
  gap: 12px;

  @media (min-width: 640px) {
    gap: 1rem/* 16px */;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  @media (min-width: 640px) {
    margin-top: 24px;
  }
  
  @media (min-width: 768px) {
    margin-top: 32px;
  }

  p {
    /* text-red text-lg sm:text-xl lg:text-2xl */
    color: var(--red);
    font-size: 18px;

    @media (min-width: 640px) {
      font-size: 1.25rem/* 20px */;
      line-height: 1.75rem/* 28px */;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem/* 24px */;
      line-height: 2rem/* 32px */;
    }
  }
`

const OptionItem = styled.li<{isAnswerSubmitted: boolean }>`
  cursor: ${({isAnswerSubmitted}) => isAnswerSubmitted ? 'not-allowed' : ''};
`

function Quiz() {
  const location = useLocation()
  const path = location.pathname

  //gets quiz data from selected subject
  const quizData = fetchQuizQestions(path)

  //state hooks
  const [questionStep, setQuestionStep] = useState<number>(0)
  const [quizScore, setQuizScore] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [showSubmissionErrorMsg, setShowSubmissionErrorMsg] = useState<boolean>(false)

  console.log(showResults, quizScore)

  const increaseQuizScore = () => {
    setQuizScore(prevScore => prevScore + 1)
  }

  const handleAnswerSelection = (selectedAnswer: string) => {
    hideSubmissionErrorMsg()
    setSelectedAnswer(selectedAnswer)
  }

  const hideSubmissionErrorMsg = () => {
    setShowSubmissionErrorMsg(false)
  }

  const displaySubmissionErrorMsg = () => {
    setShowSubmissionErrorMsg(true)
  }

  const submitAnswer = (question: Question) => {
    if (selectedAnswer) {
      const correctAnswer = question.answer
        
      if (correctAnswer === selectedAnswer)  {
        increaseQuizScore()
        setIsAnswerCorrect(true)
      } else {
        setIsAnswerCorrect(false)
      }
        
      setIsAnswerSubmitted(true)
      
    } else {
      displaySubmissionErrorMsg()
    }
  }

  //reset hooks
  const goToNextQuestion = () => {
    setQuestionStep(prevStep => prevStep + 1)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setIsAnswerCorrect(null)
    hideSubmissionErrorMsg()
  }
        
    
  //renderes error when subject selected not found
  if (!quizData)return <CategoryNotFound />

  return (
    <ul>
      {quizData.map((question: Question, index: number) => (
        questionStep === index &&
        <li key={question.question} >
          <Grid>
            <section className="flex flex-col gap-6 lg:gap-[160px]">
              <Question 
                questionStep={questionStep}
                quizLength={quizData.length}
                question={question.question}
              />
            </section>

            <section>
              <Options>
                {question.options.map((possibleAnswer, index) => (
                  <OptionItem 
                    key={possibleAnswer}
                    isAnswerSubmitted={isAnswerSubmitted}
                    tabIndex={0}
                  >
                    <AnswerCard 
                      possibleAnswer={possibleAnswer}
                      selectedAnswer={selectedAnswer}
                      question={question}
                      isAnswerSubmitted={isAnswerSubmitted}
                      isAnswerCorrect={isAnswerCorrect}
                      handleAnswerSelection={handleAnswerSelection}
                      index={index}
                    />
                  </OptionItem>
                ))}
              </Options>

              <div className="grid gap-3 sm:gap-5 md:gap-8">
                {
                  isAnswerSubmitted ?
                    quizData.length === questionStep+1 ?
                      <button 
                        type="button"
                        className="btn-primary"
                        onClick={() => setShowResults(true)}
                      >
                        Complete Quiz
                      </button>
                    :
                      <button 
                        type="button"
                        className="btn-primary"
                        onClick={() => goToNextQuestion()}
                      >
                        Next Question
                      </button>
                  :
                    <button 
                      type="button"
                      className="btn-primary"
                      onClick={() => submitAnswer(question)}
                    >
                      Submit Answer
                    </button>
                }
                {
                  showSubmissionErrorMsg &&
                  <FlexContainer>
                    <figure>
                      <img
                        src='/assets/images/icon-error.svg'
                        alt=""
                      />
                    </figure>
                    <p>Please select an answer</p>
                  </FlexContainer>
                }
              </div>
            </section>
          </Grid>
        </li>
      ))}
    </ul>
  )
}

export default Quiz