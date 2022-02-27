import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const Description = styled.p`
	max-width: 85ch;
	a {
		text-decoration: underline;
	}
`;

export const Label = styled.label`
	margin-top: 1.5rem;
	max-width: 400px;
	display: block;
	color: ${({ theme }) => theme.headingColor};
`;

export const Input = styled.input`
	padding: 0.5rem 0.5rem 0.625rem;
	width: 100%;
	max-width: 460px;
	display: block;
	color: ${({ theme }) => theme.headingColor};
	font-size: 1.25rem;
	font-weight: 700;
	background: transparent;
	border: none;
	border: 2px solid hsl(0, 0%, 70%);
	border-radius: 0;
	outline: none;

	&:focus {
		background: transparent;
	}
`;

export const Textarea = styled.textarea`
	padding: 0.5rem;
	width: 100%;
	height: 100px;
	max-width: 460px;
	display: block;
	color: ${({ theme }) => theme.headingColor};
	font-size: 1rem;
	background: transparent;
	border: 2px solid hsl(0, 0%, 70%);
	border-radius: 0;
	outline: none;

	&:focus {
		background: transparent;
	}
`;

export const WindowsWrapper = styled.div`
	margin-top: 3rem;

	@media (min-width: ${vars.breakpointMd}) {
		display: grid;
		grid-template-columns: auto auto;
		gap: 3rem;
	}
`;

export const ScoreCard = styled.div`
	margin: -2rem 0 5rem;
	grid-column: 1 / -1;

	span {
		font-size: 175%;
	}

	@media (min-width: ${vars.breakpointMd}) {
		margin: -5rem 0 0;
	}
`;
