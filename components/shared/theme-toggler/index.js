import { ThemeTogglerEl, Moon, Sun } from "./styles/theme-toggler";

function ThemeToggler({ isLight, onToggleClick }) {
	return (
		<ThemeTogglerEl onClick={onToggleClick}>
			{!isLight ? (
				<Moon
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
				>
					<rect style={{ fill: "none" }} height="24" width="24" />
					<path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
				</Moon>
			) : (
				<Sun
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
				>
					<path d="M0 0h24v24H0z" style={{ fill: "none" }} />
					<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
				</Sun>
			)}
		</ThemeTogglerEl>
	);
}

export default ThemeToggler;
