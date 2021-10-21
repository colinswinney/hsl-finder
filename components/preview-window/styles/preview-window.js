import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const PreviewWindowEl = styled.section`
	padding: 1rem;
	margin-bottom: 3rem;
	text-align: left;
	border: 1px solid ${({ theme }) => theme.borderColor};

	&:last-of-type {
		margin-bottom: 0;
	}

	@media (min-width: ${vars.breakpoint}) {
		margin-bottom: 0;
	}
`;

export const Title = styled.h2`
	margin: 0 0 1rem;
	line-height: 1.2;
	color: inherit;
`;

export const Text = styled.p`
	margin: 0 0 0.5rem;
	color: inherit;
	font-weight: 400;
`;
