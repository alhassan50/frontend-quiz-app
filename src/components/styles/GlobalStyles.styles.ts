import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  :root {
    --background-color: #F4F6FA; 
    --card-background-color: #fff;
    --progress-tracker-background-color: #fff;
    --bg-primaryPurple : #6D28D9;
    --bg-primaryPurpleLight: #7C3AED;
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

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: "Rubik", sans-serif !important;
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

  .category-card, .answer-card {
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
    background-color: #6D28D9; /* bg-primaryPurple */
    width: 100%;
    border-radius: 12px;
    font-size: 1.125rem; /* 18px */
    color: white;
    transition: all 0.3s;

    &:hover {
      background-color: #7C3AED; /* bg-primaryPurpleLight */
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
