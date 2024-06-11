//components
import styled from "styled-components"
import Subjects from "../../components/home/Subjects"
import Grid from "../../components/shared/Grid"

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-weight: 300;
  }

  p {
    font-style: italic;

    @media (min-width: 640px) {
      font-size: 1.25rem/* 20px */;
      line-height: 1.75rem/* 28px */;
    }
  }
`

function Home() {
  return (
    <Grid>
      <GridContent>
        <h1>
          <span>Welcome to the </span>
          <br />
          Frontend Quiz!
        </h1>
    
        <p>
          Pick a subject to get started.
        </p>
      </GridContent>
      
      <Subjects />
    </Grid>
  )
}

export default Home