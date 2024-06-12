import { ReactNode } from "react";

//styles
import { GridContainer, SectionContainer } from "../styles/layouts/Grid.styles";

//props types
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
