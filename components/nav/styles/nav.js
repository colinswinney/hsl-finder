import styled from "styled-components";
import { vars } from "../../../styles/globals";

export const NavEl = styled.nav`
	background: ${({ theme }) => theme.bodyBg};
	border-bottom: 0.0625rem solid ${({ theme }) => theme.bodyBg};
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

		@media (min-width: ${vars.breakpoint}) {
			display: none;
		}
	}

	&.logo,
	&.toggle,
	&.swatch-wrap {
		margin-bottom: 0.5rem;
	}

	&.logo {
		font-size: 1.5rem;
		flex-grow: 1;
		flex-basis: 0;

		@media (min-width: ${vars.breakpoint}) {
			flex-grow: initial;
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

	@media (min-width: ${vars.breakpoint}) {
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
	border: 0.0625rem solid hsl(0, 0%, 30%);

	@media (min-width: ${vars.breakpoint}) {
		height: 2rem;
		width: 2rem;
	}
`;
