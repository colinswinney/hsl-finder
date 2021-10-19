import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "../styles/normalize.css";
import "../styles/globals.js";
import {
	lightTheme,
	darkTheme,
	GlobalStyles,
	ThemeButton,
} from "../styles/globals";

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState("dark");

	const setMode = (mode) => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const toggleTheme = (e) => {
		theme === "light" ? setMode("dark") : setMode("light");
		document.activeElement.blur();
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);

	return (
		<ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
			<ThemeButton onClick={toggleTheme}>
				{theme == "light" ? "Dark" : "Light"}
			</ThemeButton>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
