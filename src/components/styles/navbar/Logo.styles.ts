import styled from "styled-components";

export const Container = styled.div<{bgColor?: string}>`
    display: flex;
    gap: 16px;
    align-items: center;
    
    @media (min-width: 640px) {
        gap: 32px;
    }

    figure {
        padding: 8px;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        background-color: ${(props) => props.bgColor || '#fff'};

        @media (min-width: 640px) {
            width: 48px;
            height: 48px;
        }

        @media (min-width: 768px) {
            width: 56px;
            height: 56px;
        }

        img {
          width: 100%;
          height: 100%;
        }
    }
`