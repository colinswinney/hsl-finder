import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const NavEl = styled.nav`
	background: ${({ theme }) => theme.bodyBg};
	border-bottom: 0.0625rem solid transparent;
	position: fixed;
	inset: 0 0 auto 0;
	transition: ${vars.transition};
	z-index: 9999;

	&.scrolled {
		background: ${({ theme }) => theme.navScrollBg};
		border-color: ${({ theme }) => theme.navScrollBorder};
	}
`;

export const NavMenu = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	align-content: center;
	flex-wrap: wrap;

	@media (min-width: ${vars.breakpoint}) {
		justify-content: flex-start;
	}
`;

export const NavMenuItem = styled.li`
	line-height: 1;
	display: flex;
	align-items: center;

	&.flex-break {
		flex-basis: 100%;
		height: 0;

		@media (min-width: ${vars.breakpointMd}) {
			display: none;
		}
	}

	&.logo,
	&.toggle,
	&.swatch-wrap {
		margin-bottom: 0.5rem;
	}

	&.logo {
		font-size: 2rem;
		flex-grow: 1;
		flex-basis: 0;

		@media (min-width: ${vars.breakpoint}) {
			flex-grow: initial;
		}

		a {
			color: ${({ theme }) => theme.linkHover};
			text-shadow: 0.125rem 0.09375rem 0
					${({ theme }) => theme.navScrollBg},
				0.28125rem 0.25rem 0.25rem ${(props) => props.bg};
		}

		&:hover {
			opacity: 0.75;
			transition: ${vars.transition};

			a {
				text-decoration: none;
			}
		}
	}

	&.toggle {
		margin-right: 0;
	}

	&.swatch-wrap {
		margin-right: 1rem;
		justify-content: flex-end;
		font-size: 0.75rem;

		@media (min-width: 600px) {
			margin-right: 2rem;
			font-size: 1rem;
		}
	}

	@media (min-width: ${vars.breakpointMd}) {
		margin-right: 2rem;
		order: 2;

		&.logo {
			margin-bottom: 0;
			order: 1;
		}

		&.toggle {
			margin: 0;
			order: 4;
		}
		&.swatch-wrap {
			margin: 0 2rem 0 auto;
			order: 3;
		}
	}
`;

export const NavMenuLink = styled.a``;

export const Swatch = styled.div`
	display: inline-block;
	margin-left: 0.5rem;
	height: 1.5rem;
	width: 1.5rem;
	border: 0.0625rem solid ${({ theme }) => theme.borderColor};

	@media (min-width: ${vars.breakpointMd}) {
		height: 2rem;
		width: 2rem;
	}
`;
