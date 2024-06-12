//styles
import { Container } from "../styles/quiz/QuizProgressTracker.styles"

function QuizProgressTracker({length}: {length: string}) {
    return (
        <Container $length={length}>
            <div></div>
        </Container>
    )
  }
  
  export default QuizProgressTracker