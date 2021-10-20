import styled from "styled-components";
import { vars } from "../../../../styles/globals";

export const ThemeTogglerEl = styled.div`
	cursor: pointer;

	svg {
		fill: ${({ theme }) => theme.bodyColor};
		height: 2rem;
		width: 2rem;
		transition: ${vars.transition};

		&:hover {
			fill: ${({ theme }) => theme.linkHover};
		}
	}
`;

export const Moon = styled.svg``;

export const Sun = styled.svg``;
