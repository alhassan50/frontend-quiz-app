import styled from "styled-components"

export const Options = styled.ul`
  /* sm:gap-4 md:gap-6 text */
  display: grid;
  gap: 12px;

  @media (min-width: 640px) {
    gap: 1rem/* 16px */;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

export const QuizFlexContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  @media (min-width: 640px) {
    margin-top: 24px;
  }
  
  @media (min-width: 768px) {
    margin-top: 32px;
  }

  p {
    /* text-red text-lg sm:text-xl lg:text-2xl */
    color: var(--red);
    font-size: 18px;

    @media (min-width: 640px) {
      font-size: 1.25rem/* 20px */;
      line-height: 1.75rem/* 28px */;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem/* 24px */;
      line-height: 2rem/* 32px */;
    }
  }
`

export const OptionItem = styled.li<{$isAnswerSubmitted: boolean }>`
  cursor: ${({$isAnswerSubmitted}) => $isAnswerSubmitted ? 'not-allowed' : ''};
`