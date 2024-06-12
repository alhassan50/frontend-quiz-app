import styled from "styled-components"

export const SubjectNotFoundFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const ErrorMessageContainer = styled.div`
    padding: 40px;
    border-radius: 12px;
    text-align: center;
    background-color: var(--card-background-color);

    @media (min-width: 640px) {
        padding: 4rem/* 64px */;
    }

    @media (min-width: 768px) {
        padding: 5rem/* 80px */;
    }

    p {
        font-weight: 400;
        font-size: 1.25rem/* 20px */;
        line-height: 1.75rem/* 28px */;
        margin-top: 0.75rem/* 12px */

        span {
            font-weight: 600;
        }
    }
`