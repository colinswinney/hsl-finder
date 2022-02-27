import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const PreviewWindowEl = styled.section`
	padding: 1rem;
	margin-bottom: 3rem;
	text-align: left;
	border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Title = styled.h2`
	margin: 0.5rem 0 1rem;
	line-height: 1.2;
	color: inherit;
`;

export const Text = styled.p`
	margin: 0 0 0.5rem;
	color: inherit;
	font-weight: 400;
`;

export const Citation = styled.p`
	text-align: right;
	font-size: 1.125rem;
	font-style: italic;
	font-weight: 900;

	a {
		color: inherit;

		&:hover {
			color: inherit;
		}
	}
`;
