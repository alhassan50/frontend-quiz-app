import { ReactNode } from "react";
import styled from "styled-components";

type GridProps =  {
  children: ReactNode;
}

const SectionContainer = styled.section`
    padding-block: 32px;
`

const GridContainer = styled.div`
    display: grid;
    gap: 40px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

export default function Grid({children}: GridProps) {
  return (
    <SectionContainer>
      <GridContainer>
        {children}
      </GridContainer>
    </SectionContainer>
  )
}
