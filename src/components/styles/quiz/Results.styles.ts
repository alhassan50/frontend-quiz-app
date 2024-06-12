import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    span {
      font-weight: 300;
    }
  }
`;

export const ResultContainer = styled.div`
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