import styled from "styled-components"

export const SubjectsContainer = styled.ul`
    display: grid;
    gap: 12px;

    @media (min-width: 640px) {
        gap: 1rem/* 16px */;
    }

    @media (min-width: 768px) {
        gap: 1.5rem/* 24px */;
    }

    li {
        transition: all 500ms ease;
        &:hover {
            transform: translateY(-4px);
        }
    }
`

export const SubjectCard = styled.div<{backgroundColor: string}>`
display: flex;
gap: 16px;
align-items: center;
padding: 12px;
border-radius: 12px;
background-color: var(--card-background-color);
color: var(--text-color);

@media (min-width: 640px) {
    padding: 16px;
    gap: 2rem/* 32px */;
}

@media (min-width: 768px) {
    padding: 1.25rem/* 20px */;
}

figure {
    /* md:w-[56px] md:h-[56px]*/
    padding: 8px;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: ${({ backgroundColor }) => backgroundColor || 'red'};

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 640px) {
        width: 48px;
        height: 48px;
    }

    @media (min-width: 768px) {
        width: 56px;
        height: 56px;
    }
}
`