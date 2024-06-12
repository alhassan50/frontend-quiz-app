import styled from "styled-components";

export const ColorThemeFlexContainer = styled.div<{theme: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  @media (min-width: 768px) {
    gap: 16px;
  }

  figure {
    width: 14px;
    height: 14px;

    @media (min-width: 640px) {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }

    svg {
        width: 100%;
        height: 100%;
    }
  }

  button {
    width: 32px;
    height: 20px;
    position: relative;
    border-radius: 20px;
    background-color: var(--primary-purple);
    border: none;
    cursor: pointer;

    @media (min-width: 640px) {
        width: 48px;
        height: 28px;
    }

    div {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: ${({ theme }) => theme === 'light' ? '4px' : 'calc(100% - 12px - 4px)'};
        transition: all 200ms ease;

        @media (min-width: 640px) {
            width: 20px;
            height: 20px;
            left: ${({ theme }) => theme === 'light' ? '5px' : 'calc(100% - 20px - 5px)'};
        }

        
    }
  }
`;