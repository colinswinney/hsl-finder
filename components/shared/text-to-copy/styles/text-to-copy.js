import styled from "styled-components";
import { vars } from "../../../../styles/globals";
import Clipboard from "react-clipboard.js";

export const ColorName = styled(Clipboard)`
	text-align: center;
	transition: ${vars.transition};

	&:hover,
	&.success {
		color: ${({ theme }) => theme.linkHover};
	}

	&:hover {
		cursor: pointer;
	}
`;
