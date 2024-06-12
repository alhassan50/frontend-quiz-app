import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Grid from "../../components/shared/Grid";
import { useSelector } from "react-redux";
import { getSelectedSubject } from "../../slices/subjectSlice";
import Logo from "../shared/navbar/Logo";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

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
    const [windowSize, setWindowSize] = useState<{width: number | undefined}>({
        width: window.innerWidth - 20,
    })

  const navigate = useNavigate();
  const selectedSubject = useSelector(getSelectedSubject);

  useEffect(()=>{
    const handleWindowResize = () => {
        setWindowSize(prevDimensions => {
            return {
                ...prevDimensions,
                width: window.innerWidth - 20,
            }
        })
    }

    window.addEventListener('resize', () => {
        handleWindowResize()
    })

    return () => {
        window.removeEventListener('resize', () => {
            handleWindowResize()
        })
    };
  }, [])

  const playAgain = () => {
    navigate('/');
  };

  return (
    <>
        {
            quizScore >= 5 &&
            <Confetti
                width={windowSize.width}
            />
        }
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
            {selectedSubject && <Logo selectedSubject={selectedSubject} />}
            <h1>{quizScore}</h1>
            <p>out of {quizLength}</p>
            </ResultContainer>
            <button type="button" className="btn-primary" onClick={playAgain}>
            Play Again
            </button>
        </Section>
        </Grid>
    </>
  );
}
