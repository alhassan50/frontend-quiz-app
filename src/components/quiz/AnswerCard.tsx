//styles
import { AnswerCardContainer, Figure, IconContainer } from '../styles/quiz/AnswerCard.styles';

// prop type 
type Props = {
    question: Question,
    possibleAnswer: string, 
    selectedAnswer: string | null, 
    isAnswerCorrect: boolean | null, 
    isAnswerSubmitted: boolean, 
    handleAnswerSelection: (selectedAnswer: string) => void,
    index: number
}

export default function AnswerCard({
    possibleAnswer, 
    isAnswerSubmitted, 
    selectedAnswer, 
    isAnswerCorrect, 
    question,
    handleAnswerSelection,
    index
}: Props) {
    const isSelected = selectedAnswer === possibleAnswer;
    const isCorrect = isAnswerCorrect === true;
    return (
        <AnswerCardContainer 
            onClick={() => handleAnswerSelection(possibleAnswer)}
            selected={isSelected}
            $correct={isAnswerCorrect}
            $submitted={isAnswerSubmitted}
        >
            <IconContainer 
                selected={isSelected} 
                $correct={isCorrect} 
                $submitted={isAnswerSubmitted}
                className='answer-tag'
            >
                <h3>
                    {String.fromCharCode('A'.charCodeAt(0) + index)}
                </h3>
            </IconContainer>
    
            <h3>
                {possibleAnswer}
            </h3>
    
            <Figure>
                {
                isAnswerSubmitted &&
                <img
                    src={possibleAnswer === question.answer ? '/assets/images/icon-correct.svg' : (possibleAnswer === selectedAnswer) && !isAnswerCorrect ? '/assets/images/icon-incorrect.svg' : ''}
                    alt=""
                />
                }
            </Figure>
        </AnswerCardContainer>
    )
}
