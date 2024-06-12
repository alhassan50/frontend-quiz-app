import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Grid from "../../components/shared/Grid";
import { useSelector } from "react-redux";
import { getSelectedSubject } from "../../slices/subjectSlice";
import Logo from "../shared/navbar/Logo";

// Styled-components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    span {
      font-weight: 300;
    }
  }
`;

const ResultContainer = styled.div`
  background-color: var(--card-background-color);
  padding: 3rem/* 48px */;
  border-radius: 1.5rem/* 24px */;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 88px;
    line-height: 132px;

    @media (min-width: 640px) {
      font-size: 100px;
      line-height: 150px;
    }

    @media (min-width: 768px) {
      font-size: 120px;
      line-height: 180px;
    }

    @media (min-width: 1024px) {
      font-size: 144px;
      line-height: 216px;
    }
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: var(--lightNavy);

    @media (min-width: 640px) {
      font-size: 1.125rem;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export default function Results({ quizScore, quizLength }: { quizScore: number, quizLength: number }) {
  const navigate = useNavigate();
  const selectedCategory = useSelector(getSelectedSubject);

  const playAgain = () => {
    navigate('/');
  };

  return (
    <Grid>
      <Section>
        <TextContainer>
          <h1>
            <span>Quiz completed </span>
            <br />
            You scored...
          </h1>
        </TextContainer>
      </Section>

      <Section>
        <ResultContainer>
          {selectedCategory && <Logo selectedSubject={selectedCategory} />}
          <h1>{quizScore}</h1>
          <p>out of {quizLength}</p>
        </ResultContainer>
        <button type="button" className="btn-primary" onClick={playAgain}>
          Play Again
        </button>
      </Section>
    </Grid>
  );
}
