import { useNavigate } from "react-router-dom";
import Grid from "../../components/shared/Grid";
import { useSelector } from "react-redux";
import { getSelectedSubject } from "../../slices/subjectSlice";
import Logo from "../shared/navbar/Logo";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { ResultContainer, Section, TextContainer } from "../styles/quiz/Results.styles";

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
