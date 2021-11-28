import styled from "styled-components";
import { vars } from "../../../../styles/globals";

export const SectionEl = styled.section`
	padding-top: 6rem;
	margin-top: -3rem;
`;

export const Title = styled.h2``;

export const ColorsContainer = styled.div`
	margin: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (min-width: ${vars.breakpointSm}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: ${vars.breakpointMd}) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: ${vars.breakpointLg}) {
		grid-template-columns: repeat(5, 1fr);
	}
`;
