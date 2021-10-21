import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import "../styles/normalize.css";
import "../styles/globals.js";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/globals";
import ThemeToggler from "../components/shared/theme-toggler";

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);
	const darkmode = useDarkMode(true);
	const theme = darkmode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();

	const handleRouteChange = (url) => {
		window.gtag("config", "G-C8FTL97V5L", {
			page_path: url,
		});
	};

	useEffect(() => {
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

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
