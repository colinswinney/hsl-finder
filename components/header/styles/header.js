import styled from "styled-components";
import { vars } from "../../../styles/globals";
import { TextBlockEl } from "../../shared/text-block/styles/text-block";

export const HeaderEl = styled.header`
	margin-top: 7rem;
	text-align: center;

	${TextBlockEl} {
		margin-top: 1rem;
	}

	@media (min-width: ${vars.breakpoint}) {
		margin-top: 6rem;
	}
`;

export const Title = styled.h1``;

export const Description = styled.p`
	margin-bottom: 2rem;
`;

export const ColorWindow = styled.div`
	margin: auto auto 1rem;
	height: 200px;
	width: 100%;
	border: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;
