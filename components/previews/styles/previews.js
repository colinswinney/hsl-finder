import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const Description = styled.p``;

export const Label = styled.label`
	margin-top: 1.5rem;
	max-width: 400px;
	display: block;
	color: ${({ theme }) => theme.headingColor};
`;

export const Input = styled.input`
	padding: 0.5rem;
	width: 100%;
	max-width: 460px;
	display: block;
	color: ${({ theme }) => theme.headingColor};
	font-size: 1.25rem;
	font-weight: 700;
	background: transparent;
	border: none;
	border-bottom: 2px solid hsl(0, 0%, 70%);
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
