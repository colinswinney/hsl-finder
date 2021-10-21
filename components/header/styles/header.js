import styled from "styled-components";
import { vars } from "../../../styles/globals";
import { TextBlockEl } from "../../shared/text-block/styles/text-block";

export const HeaderEl = styled.header`
	margin-top: 7rem;

	${TextBlockEl} {
		margin-top: 1rem;
		text-align: center;
	}

	@media (min-width: ${vars.breakpoint}) {
		margin-top: 10rem;
	}
`;

export const Title = styled.h1``;

export const Subtitle = styled.h3`
	font-weight: 400;
`;

export const Description = styled.p`
	margin: 0 0 2rem;
	max-width: 60ch;
`;

export const ColorWindow = styled.div`
	margin: auto auto 1rem;
	height: 200px;
	width: 100%;
	border: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

export const SliderTextContainer = styled.div``;

export const SliderContainer = styled.div`
	margin-bottom: 2rem;
`;
