import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  :root {
    --background-color: #F4F6FA; 
    --card-background-color: #fff;
    --progress-tracker-background-color: #fff;
    --primary-purple : #A729F5;
    --primary-purple-light: #D394FA;
    --dark-navy: "#313E51";
    --light-navy: "#ABC1E1";
    --text-color: #313E51;
    --green: #26D782;
    --red: #EE5454;
  }

  /* Dark theme variables */
  :root[data-theme='dark'] {
    --background-color: #313E51;
    --card-background-color: #3B4D66;
    --progress-tracker-background-color: #3B4D66;
    --text-color: #F4F6FA;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(/assets/fonts/Rubik-VariableFont_wght.ttf);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Rubik', sans-serif
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1 {
    font-size: 40px;
    font-weight: bold;

    @media (min-width: 640px) {
      font-size: 52px;
    }

    @media (min-width: 768px) {
      font-size: 58px;
    }

    @media (min-width: 1024px) {
      font-size: 64px;
    }
  }

  h3 {
    font-size: 1.125rem; /* 18px */
    font-weight: 500;

    @media (min-width: 640px) {
      font-size: 24px;
    }

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  .subject-card, .answer-card {
    background-color: var(--card-background-color);
    color: var(--text-color);
  }

  .progress_tracker {
    background-color: var(--progress-tracker-background-color);
    color: var(--text-color);
  }

  .btn-primary {
    padding: 0.75rem; /* 12px */
    margin-top: 2rem; /* 32px */
    font-weight: 500;
    background-color: #6D28D9; /* primary-purple */
    width: 100%;
    border-radius: 12px;
    font-size: 1.125rem; /* 18px */
    color: white;
    transition: all 0.3s;

    &:hover {
      background-color: #7C3AED; /* primary-purple-light */
    }

    @media (min-width: 640px) {
      padding: 1rem; /* 16px */
      font-size: 24px;
    }

    @media (min-width: 768px) {
      padding: 1.5rem; /* 24px */
      font-size: 28px;
    }

    @media (min-width: 1024px) {
      padding: 2rem; /* 32px */
    }
  }
`;

export default GlobalStyles;
