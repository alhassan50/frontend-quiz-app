import { useState } from "react"
import { useLocation } from "react-router-dom"

//utils
import fetchQuizQestions from "../../lib/fetchQuizQestions";

//components
import Grid from "../../components/shared/Grid";
import Question from "../../components/quiz/Question";
import AnswerCard from "../../components/quiz/AnswerCard";
import SubjectNotFound from "../../components/quiz/SubjectNotFound";
import Results from "../../components/quiz/Results";

//styles
import { QuizFlexContainer, OptionItem, Options } from "../../components/styles/quiz/index.styles";

//framer
import { AnimatePresence, motion } from "framer-motion";
import { variants, transition } from "../../lib/variants";

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

  const increaseQuizScore = () => {
    setQuizScore(prevScore => prevScore + 1)
  }

  const handleAnswerSelection = (selectedAnswer: string) => {
    hideSubmissionErrorMsg()
    setSelectedAnswer(selectedAnswer)
  }
  
  const handleAnswerSelectionWithEnterKey = (event: React.KeyboardEvent<HTMLLIElement>, selectedAnswer: string) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      if (isAnswerSubmitted) {
        alert('Answer already submitted. Please move on to the next question.')
      } else {
        hideSubmissionErrorMsg()
        setSelectedAnswer(selectedAnswer)
      }
    }
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
  if (!quizData)return <SubjectNotFound />

  //display results on quiz completion
  if (showResults) return <Results quizScore={quizScore} quizLength={quizData.length} />

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
            <AnimatePresence>
              <Options>
                {question.options.map((possibleAnswer, index) => (
                  <OptionItem
                    key={possibleAnswer}
                    $isAnswerSubmitted={isAnswerSubmitted}
                    tabIndex={0}
                    onKeyDown={(event) => handleAnswerSelectionWithEnterKey(event, possibleAnswer)}
                  >
                    <motion.div
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={transition}
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
                    </motion.div>
                  </OptionItem>
                ))}
              </Options>
            </AnimatePresence>

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
                  <QuizFlexContainer>
                    <figure>
                      <img
                        src='/assets/images/icon-error.svg'
                        alt=""
                      />
                    </figure>
                    <p>Please select an answer</p>
                  </QuizFlexContainer>
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