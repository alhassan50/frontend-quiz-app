//components
import Subjects from "../../components/home/Subjects"
import Grid from "../../components/shared/Grid"
import { GridContent } from "../../components/styles/home/index.styles"

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