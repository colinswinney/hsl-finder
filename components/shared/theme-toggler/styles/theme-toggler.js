import styled from "styled-components";
import { vars } from "../../../../styles/globals";

export const ThemeTogglerEl = styled.div`
	cursor: pointer;

	svg {
		height: 2rem;
		width: 2rem;
		transition: ${vars.transition};
		opacity: 1;

		&:hover {
			opacity: 0.75;
		}
	}
`;

export const Moon = styled.svg`
	fill: hsl(240, 50%, 50%);
`;

export const Sun = styled.svg`
	fill: hsl(45, 100%, 50%);
`;
