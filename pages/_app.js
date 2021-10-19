import { ThemeProvider } from "styled-components";
import ThemeToggler from "../components/shared/themeToggler";
import useDarkMode from "../components/shared/useDarkMode";
import "../styles/normalize.css";
import "../styles/globals.js";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }) {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Component {...pageProps}>
				<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
			</Component>
		</ThemeProvider>
	);
}

export default MyApp;
