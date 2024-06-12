import styled from "styled-components";

export const GridContent = styled.div`
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