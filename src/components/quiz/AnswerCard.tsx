import styled from 'styled-components';

// type
type Question = {
    question: string;
    options: string[];
    answer: string;
}

// type 
type Props = {
    question: Question,
    possibleAnswer: string, 
    selectedAnswer: string | null, 
    isAnswerCorrect: boolean | null, 
    isAnswerSubmitted: boolean, 
    handleAnswerSelection: (selectedAnswer: string) => void,
    index: number
}

const AnswerCardContainer = styled.div<{ selected: boolean; correct: boolean | null; submitted: boolean }>`
  display: grid;
  grid-template-columns: 40px 1fr 24px;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid;
  border-radius: 12px;
  cursor: pointer;
  background-color: var(--card-background-color);

  @media(min-width: 768px) {
    grid-template-columns: 56px 1fr 30px;
    padding: 1.25rem;
  }

  @media(min-width: 1024px) {
    grid-template-columns: 60px 1fr 40px;
  }

    &:hover .answer-tag h3 {
        color: ${({selected}) => selected ? '' : 'var(--primary-purple)'};
    }

  ${({ submitted, selected, correct }) => submitted ? `
    cursor: not-allowed;
    pointer-events: none;
    border-color: ${selected ? (correct ? 'var(--green)' : 'var(--red)') : 'var(--card-background-color)'};
  ` : `
    border-color: ${selected ? 'var(--primary-purple)' : 'var(--card-background-color)'};
  `}
`;

const IconContainer = styled.div<{ selected: boolean; correct: boolean | null; submitted: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background-color: ${({ selected, correct, submitted }) => 
    submitted ? 
    (selected ? (correct ? 'var(--green)' : 'var(--red)') : '#F4F6FA') : 
    (selected ? 'var(--primary-purple)' : '#F4F6FA')
  };

  @media(min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }

  @media(min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  h3 {
    color: ${({ selected }) => (selected ? 'var(--text-color)' : '#626C7F')};
  }
`;

const Figure = styled.figure`
  display: flex;
  justify-content: flex-end;
`;

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
            correct={isAnswerCorrect}
            submitted={isAnswerSubmitted}
        >
            <IconContainer 
                selected={isSelected} 
                correct={isCorrect} 
                submitted={isAnswerSubmitted}
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
