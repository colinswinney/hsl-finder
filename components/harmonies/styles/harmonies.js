import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const Heading = styled.h4`
	margin: 1rem 0 1rem;
	grid-column: span 2;

	&:first-of-type {
		margin-top: 0;
	}

	@media (min-width: ${vars.breakpointSm}) {
		grid-column: span 3;
	}

	@media (min-width: ${vars.breakpointMd}) {
		grid-column: span 4;
	}

	@media (min-width: ${vars.breakpointLg}) {
		grid-column: span 5;
	}
`;
