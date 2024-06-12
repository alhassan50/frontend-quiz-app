import styled from "styled-components"

export const SectionContainer = styled.section`
    padding-block: 32px;
`

export const GridContainer = styled.div`
    display: grid;
    gap: 40px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`