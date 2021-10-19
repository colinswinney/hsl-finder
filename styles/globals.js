import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const lightTheme = {
	bodyBg: `hsl(0,0%,99%)`,
	bodyColor: `hsl(0, 0%, 10%)`,
};

export const darkTheme = {
	bodyBg: `hsl(300, 5%, 10%)`,
	bodyColor: `hsl(0,0%,70%)`,
};

export const GlobalStyles = createGlobalStyle`

	html {
		font-size: 100%;
		scroll-behavior: smooth;
		-webkit-text-size-adjust: 100%;
	}

	body {
		background: ${({ theme }) => theme.bodyBg};
		color: ${({ theme }) => theme.bodyColor};
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 700;
		line-height: 1.75;
	}

	* {
		box-sizing: border-box;
	}

	p {margin-bottom: 1rem;}

	h1, h2, h3, h4, h5 {
		margin: 3rem 0 1.38rem;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 700;
		line-height: 1.3;
	}

	h1 {
		margin-top: 0;
		font-size: 2.488rem;
	}

	h2 {
		font-size: 2.074rem;
	}

	h3 {
		font-size: 1.728rem;
	}

	h4 {
		font-size: 1.44rem;
	}

	h5 {
		font-size: 1.2rem;
	}

	small, .text_small {
		font-size: 0.833rem;
	}
`;

export const ThemeButton = styled.button``;
