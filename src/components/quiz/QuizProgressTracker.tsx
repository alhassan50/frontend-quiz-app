import styled from "styled-components"


const Container = styled.div<{length: string}>`
    width: 100%;
    padding: 4px;
    border-radius: 50px;
    background-color: var(--progress-tracker-background-color);
    color: var(--text-color);

    div {
        width: ${({length}) => `${length}`};
        height: 8px;
        background-color: var(--primary-purple);
        border-radius: 50px;
    }
` 

function QuizProgressTracker({length}: {length: string}) {
    return (
        <Container length={length}>
            <div></div>
        </Container>
    )
  }
  
  export default QuizProgressTracker