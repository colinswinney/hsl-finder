import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const vars = {
	breakpoint: `768px`,
	dark: `hsl(300, 5%, 10%)`,
	light: `hsl(0,0%,99%)`,
	transition: `0.3s ease`,
};

export const lightTheme = {
	bodyBg: `hsl(0,0%,98%)`,
	bodyColor: `hsl(300, 5%, 15%)`,
	borderColor: `hsl(0, 0%, 30%)`,
	headingColor: `hsl(300, 5%, 01%)`,
	linkHover: `hsl(300, 5%, 01%)`,
	navScrollBg: `hsl(0, 0%, 100%)`,
	navScrollBorder: `hsl(0, 0%, 80%)`,
	sliderThumb: `hsl(300, 5%, 20%)`,
	sliderTrack: `hsla(300, 5%, 10%, 0.5)`,
};

export const darkTheme = {
	bodyBg: `hsl(300, 5%, 10%)`,
	bodyColor: `hsl(0,0%,70%)`,
	borderColor: `hsl(0, 0%, 30%)`,
	headingColor: `hsl(0,0%,99%)`,
	linkHover: `hsl(0,0%,99%)`,
	navScrollBg: `hsl(0, 0%, 7%)`,
	navScrollBorder: `hsl(0, 0%, 50%)`,
	sliderThumb: `hsla(0, 0%, 100%, 1)`,
	sliderTrack: `hsla(0, 0%, 100%, 0.5)`,
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
		transition: ${vars.transition};
	}

	* {
		box-sizing: border-box;
	}

	p {
		margin: 1rem 0;
	}

	h1, h2, h3, h4, h5 {
		margin: 0 0 1.38rem 0;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 700;
		line-height: 1.2;
		color: ${({ theme }) => theme.headingColor}
	}

	h1 {
		font-size: 2.488rem;

		@media (min-width: 600px) {
			font-size: 2.99rem;
		}

		@media (min-width: ${vars.breakpoint}) {
			font-size: 3.59rem;
		}
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

	a {
		text-decoration: none;
		transition: ${vars.transition};
		color: ${({ theme }) => theme.bodyColor};
	}

	a:hover {
		color: ${({ theme }) => theme.linkHover};
		text-decoration: underline;
	}
`;

export const ThemeButton = styled.button``;
