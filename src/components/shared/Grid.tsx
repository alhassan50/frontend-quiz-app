import { ReactNode } from "react";
import { GridContainer, SectionContainer } from "../styles/layouts/Grid.styles";

type GridProps =  {
  children: ReactNode;
}

export default function Grid({children}: GridProps) {
  return (
    <SectionContainer>
      <GridContainer>
        {children}
      </GridContainer>
    </SectionContainer>
  )
}
