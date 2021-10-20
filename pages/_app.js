import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeToggler from "../components/shared/themeToggler";
import useDarkMode from "use-dark-mode";
import "../styles/normalize.css";
import "../styles/globals.js";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);
	const darkmode = useDarkMode(true);
	const theme = darkmode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{isMounted && (
				<Component {...pageProps}>
					<ThemeToggler
						isLight={darkmode.value}
						onToggleClick={darkmode.toggle}
					/>
				</Component>
			)}
		</ThemeProvider>
	);
}

export default MyApp;
