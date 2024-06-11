import { useEffect, useState } from "react"
import getSystemTheme from "../../../lib/getSystenTheme"
import styled from "styled-components"

type Props = {
    theme: string
}

const FlexContainer = styled.div<Props>`
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
    outline: none;
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
        left: 1px;
        transform: translateY(-50%);
        transition: all 200ms ease;

        @media (min-width: 640px) {
            width: 20px;
            height: 20px;
            left: ${({ theme }) => theme === 'light' ? '5px' : 'calc(100% - 20px - 5px)'};
        }

        
    }
  }
`;

export default function ColorTheme() {
    //init theme from from local storage or operating system
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        const storedTheme = localStorage.getItem('quizAppTheme') as 'dark' | 'light' | null
        return storedTheme ? storedTheme : getSystemTheme()
    })

    //stores website preferred theme in local storage
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('quizAppTheme', newTheme)
            return newTheme
        })
    }

    //listen for change in operating system theme
    useEffect(() => {
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('quizAppTheme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkMediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
        darkMediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    //adds preffered theme as attribute to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  return (
    <FlexContainer theme={theme}>
        <figure>
            <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0.5C11.1989 0.5 11.3897 0.579018 11.5303 0.71967C11.671 0.860322 11.75 1.05109 11.75 1.25V2.75C11.75 2.94891 11.671 3.13968 11.5303 3.28033C11.3897 3.42098 11.1989 3.5 11 3.5C10.8011 3.5 10.6103 3.42098 10.4697 3.28033C10.329 3.13968 10.25 2.94891 10.25 2.75V1.25C10.25 1.05109 10.329 0.860322 10.4697 0.71967C10.6103 0.579018 10.8011 0.5 11 0.5ZM11 15.5C12.1935 15.5 13.3381 15.0259 14.182 14.182C15.0259 13.3381 15.5 12.1935 15.5 11C15.5 9.80653 15.0259 8.66193 14.182 7.81802C13.3381 6.97411 12.1935 6.5 11 6.5C9.80653 6.5 8.66193 6.97411 7.81802 7.81802C6.97411 8.66193 6.5 9.80653 6.5 11C6.5 12.1935 6.97411 13.3381 7.81802 14.182C8.66193 15.0259 9.80653 15.5 11 15.5ZM11 14C10.2044 14 9.44129 13.6839 8.87868 13.1213C8.31607 12.5587 8 11.7956 8 11C8 10.2044 8.31607 9.44129 8.87868 8.87868C9.44129 8.31607 10.2044 8 11 8C11.7956 8 12.5587 8.31607 13.1213 8.87868C13.6839 9.44129 14 10.2044 14 11C14 11.7956 13.6839 12.5587 13.1213 13.1213C12.5587 13.6839 11.7956 14 11 14ZM20.75 11.75C20.9489 11.75 21.1397 11.671 21.2803 11.5303C21.421 11.3897 21.5 11.1989 21.5 11C21.5 10.8011 21.421 10.6103 21.2803 10.4697C21.1397 10.329 20.9489 10.25 20.75 10.25H19.25C19.0511 10.25 18.8603 10.329 18.7197 10.4697C18.579 10.6103 18.5 10.8011 18.5 11C18.5 11.1989 18.579 11.3897 18.7197 11.5303C18.8603 11.671 19.0511 11.75 19.25 11.75H20.75ZM11 18.5C11.1989 18.5 11.3897 18.579 11.5303 18.7197C11.671 18.8603 11.75 19.0511 11.75 19.25V20.75C11.75 20.9489 11.671 21.1397 11.5303 21.2803C11.3897 21.421 11.1989 21.5 11 21.5C10.8011 21.5 10.6103 21.421 10.4697 21.2803C10.329 21.1397 10.25 20.9489 10.25 20.75V19.25C10.25 19.0511 10.329 18.8603 10.4697 18.7197C10.6103 18.579 10.8011 18.5 11 18.5ZM2.75 11.75C2.94891 11.75 3.13968 11.671 3.28033 11.5303C3.42098 11.3897 3.5 11.1989 3.5 11C3.5 10.8011 3.42098 10.6103 3.28033 10.4697C3.13968 10.329 2.94891 10.25 2.75 10.25H1.25C1.05109 10.25 0.860322 10.329 0.71967 10.4697C0.579018 10.6103 0.5 10.8011 0.5 11C0.5 11.1989 0.579018 11.3897 0.71967 11.5303C0.860322 11.671 1.05109 11.75 1.25 11.75H2.75ZM3.719 3.719C3.78867 3.64915 3.87143 3.59374 3.96255 3.55593C4.05367 3.51812 4.15135 3.49866 4.25 3.49866C4.34865 3.49866 4.44633 3.51812 4.53745 3.55593C4.62857 3.59374 4.71133 3.64915 4.781 3.719L6.281 5.219C6.35073 5.28873 6.40605 5.37152 6.44379 5.46262C6.48152 5.55373 6.50095 5.65138 6.50095 5.75C6.50095 5.84862 6.48152 5.94627 6.44379 6.03738C6.40605 6.12848 6.35073 6.21127 6.281 6.281C6.21127 6.35073 6.12848 6.40605 6.03738 6.44379C5.94627 6.48152 5.84862 6.50095 5.75 6.50095C5.65138 6.50095 5.55373 6.48152 5.46262 6.44379C5.37152 6.40605 5.28873 6.35073 5.219 6.281L3.719 4.781C3.64915 4.71133 3.59374 4.62857 3.55593 4.53745C3.51812 4.44633 3.49866 4.34865 3.49866 4.25C3.49866 4.15135 3.51812 4.05367 3.55593 3.96255C3.59374 3.87143 3.64915 3.78867 3.719 3.719ZM4.781 18.281C4.71137 18.3507 4.62868 18.4061 4.53766 18.4438C4.44664 18.4816 4.34908 18.5011 4.25053 18.5012C4.15198 18.5012 4.05439 18.4819 3.96332 18.4442C3.87225 18.4066 3.78948 18.3514 3.71975 18.2817C3.65002 18.2121 3.59468 18.1294 3.55691 18.0384C3.51913 17.9474 3.49965 17.8498 3.49958 17.7513C3.49951 17.6527 3.51885 17.5551 3.5565 17.4641C3.59415 17.373 3.64937 17.2902 3.719 17.2205L5.219 15.7205C5.28863 15.6508 5.37132 15.5954 5.46234 15.5577C5.55336 15.5199 5.65092 15.5004 5.74947 15.5003C5.84802 15.5003 5.94561 15.5196 6.03668 15.5573C6.12775 15.5949 6.21052 15.6501 6.28025 15.7197C6.34998 15.7894 6.40532 15.8721 6.44309 15.9631C6.48087 16.0541 6.50035 16.1517 6.50042 16.2502C6.50049 16.3488 6.48115 16.4464 6.4435 16.5374C6.40585 16.6285 6.35063 16.7113 6.281 16.781L4.781 18.281ZM18.281 3.719C18.2113 3.64915 18.1286 3.59374 18.0374 3.55593C17.9463 3.51812 17.8487 3.49866 17.75 3.49866C17.6513 3.49866 17.5537 3.51812 17.4626 3.55593C17.3714 3.59374 17.2887 3.64915 17.219 3.719L15.719 5.219C15.5782 5.35983 15.4991 5.55084 15.4991 5.75C15.4991 5.94916 15.5782 6.14017 15.719 6.281C15.8598 6.42183 16.0508 6.50095 16.25 6.50095C16.4492 6.50095 16.6402 6.42183 16.781 6.281L18.281 4.781C18.3508 4.71133 18.4063 4.62857 18.4441 4.53745C18.4819 4.44633 18.5013 4.34865 18.5013 4.25C18.5013 4.15135 18.4819 4.05367 18.4441 3.96255C18.4063 3.87143 18.3508 3.78867 18.281 3.719ZM17.219 18.281C17.3596 18.4218 17.5504 18.501 17.7495 18.5012C17.9485 18.5013 18.1394 18.4224 18.2803 18.2817C18.4211 18.1411 18.5003 17.9503 18.5004 17.7513C18.5006 17.5523 18.4216 17.3613 18.281 17.2205L16.781 15.7205C16.6404 15.5797 16.4496 15.5005 16.2505 15.5003C16.0515 15.5002 15.8606 15.5791 15.7197 15.7197C15.5789 15.8604 15.4997 16.0512 15.4996 16.2502C15.4994 16.4492 15.5784 16.6402 15.719 16.781L17.219 18.281Z" fill={`${theme === 'dark' ? 'white' : '#626C7F'}`}/>
            </svg>

        </figure>

        <button
            title="button"
            onClick={toggleTheme}
        >
            <div></div>
        </button>
        
        <figure>
            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.77503 1.5225C10.0455 1.62306 11.2694 2.04571 12.3312 2.75056C13.393 3.45541 14.2577 4.41922 14.8436 5.551C15.4296 6.68278 15.7174 7.9452 15.68 9.21911C15.6427 10.493 15.2813 11.7364 14.63 12.8319C13.9787 13.9273 13.059 14.8388 11.9577 15.4802C10.8564 16.1215 9.60978 16.4717 8.33559 16.4976C7.06139 16.5235 5.80162 16.2242 4.67517 15.6281C3.54872 15.032 2.59277 14.1586 1.89753 13.0905C4.00203 12.5205 6.87153 11.1375 8.13753 7.764C8.96553 5.553 9.01353 3.3555 8.77503 1.5225ZM17.184 9C17.184 7.79163 16.9406 6.59565 16.4683 5.48337C15.9961 4.37108 15.3047 3.36529 14.4355 2.52595C13.5662 1.68661 12.5367 1.03092 11.4086 0.597978C10.2804 0.165037 9.07666 -0.0362902 7.86903 0.00600278C7.76094 0.00955256 7.65491 0.0364339 7.55819 0.0848036C7.46146 0.133173 7.37635 0.201887 7.30867 0.286234C7.24099 0.370581 7.19236 0.468566 7.1661 0.573471C7.13983 0.678376 7.13657 0.787719 7.15653 0.894003C7.50153 2.715 7.57653 4.986 6.73203 7.236C5.53203 10.437 2.52903 11.496 0.616527 11.8425C0.502675 11.8631 0.39513 11.9097 0.302306 11.9788C0.209481 12.0479 0.133893 12.1375 0.0814549 12.2406C0.0290168 12.3437 0.00115 12.4576 3.48434e-05 12.5733C-0.00108031 12.689 0.0245861 12.8034 0.0750265 12.9075C0.959673 14.7448 2.44205 16.2273 4.27934 17.112C6.11663 17.9967 8.19991 18.2312 10.1879 17.7772C12.1759 17.3232 13.9508 16.2075 15.2219 14.6128C16.4929 13.0182 17.1847 11.0392 17.184 9Z" fill={`${theme === 'dark' ? 'white' : '#626C7F'}`} />
            </svg>
        </figure>
    </FlexContainer>
  )
}
