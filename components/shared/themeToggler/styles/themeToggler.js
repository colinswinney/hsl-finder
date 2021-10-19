import styled from "styled-components";

export const ThemeTogglerEl = styled.div``;

export const Moon = styled.svg`
	fill: ${({ theme }) => theme.bodyColor};
	height: 2rem;
	width: 2rem;
`;

export const Sun = styled.svg`
	fill: ${({ theme }) => theme.bodyColor};
	height: 2rem;
	width: 2rem;
`;
