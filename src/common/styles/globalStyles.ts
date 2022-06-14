import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
	  --color-background: #FCFCFC;
	  --color-text: #383838;
    --color-green: #169a67;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  };

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    };

    @media (max-width: 720px) {
      font-size: 87.5%;
    };
  };

  body {
    background: var(--color-background);
		color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  };

	body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  };

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  };

  button {
    cursor: pointer;
    color: var(--color-text);
  };

  a {
    color: unset;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  };
`;
