import styled from "styled-components";

export const SliderEl = styled.div`
	margin-top: 1rem;

	@media (min-width: 400px) {
		display: flex;
		justify-content: center;
	}
`;

export const SliderLabel = styled.label`
	font-weight: 700;
	width: 75px;
	text-align: left;
`;

export const SliderInput = styled.input`
	margin: 0;
	flex: 1;
	max-width: 360px;
	box-sizing: border-box;
	font-size: 1rem;
	line-height: 1;
	height: 1.25em;
	background-color: transparent;
	cursor: pointer;
	-webkit-appearance: none;
	width: 100%;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
	}
	&:focus {
		outline: none;
	}
	&::-ms-track {
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 1.5em;
		height: 1.5em;
		margin-top: -0.0625rem;
		background-color: ${({ theme }) => theme.sliderThumb};
		box-shadow: none;
		border-radius: 1em;
		cursor: pointer;
	}
	&::-moz-range-thumb {
		width: 1.5em;
		height: 1.5em;
		margin-top: -0.0625rem;
		background-color: ${({ theme }) => theme.sliderThumb};
		box-shadow: none;
		border-radius: 1em;
		cursor: pointer;
	}
	&::-ms-thumb {
		width: 1.5em;
		height: 1.5em;
		margin-top: -0.0625rem;
		background-color: ${({ theme }) => theme.sliderThumb};
		box-shadow: none;
		border-radius: 1em;
		cursor: pointer;
	}
	&:active::-webkit-slider-thumb {
		border-color: ${({ theme }) => theme.linkHover};
	}
	&:active::-moz-range-thumb {
		border-color: ${({ theme }) => theme.linkHover};
	}
	&:active::-ms-thumb {
		border-color: ${({ theme }) => theme.linkHover};
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		cursor: pointer;
		height: 0.75em;
		border-bottom: 2px solid ${({ theme }) => theme.sliderTrack};
		background-color: transparent;
	}
	&::-moz-range-track {
		width: 100%;
		cursor: pointer;
		height: 0.75em;
		border-bottom: 2px solid ${({ theme }) => theme.sliderTrack};
		background-color: transparent;
	}
	&::-ms-track {
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
`;
