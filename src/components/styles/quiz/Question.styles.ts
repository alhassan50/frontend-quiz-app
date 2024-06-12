import styled from "styled-components"

export const QuestionFlexContainer = styled.div<{$gap?: number}>`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
    gap: ${({$gap}) => `${$gap}px`};
    }

    p {
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        font-style: italic;
        color: var(--light-navy);

        @media (min-width: 640px) {
            font-size: 1.25rem/* 20px */;
            line-height: 1.75rem/* 28px */;
        }
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;

        @media (min-width: 640px) {
            font-size: 24px;
            line-height: 36px;
        }
        
        @media (min-width: 768px) {
            font-size: 32px;
            line-height: 48px;
        }
        
        @media (min-width: 1024px) {
            font-size: 36px;
            line-height: 54px;
        }
    }
`