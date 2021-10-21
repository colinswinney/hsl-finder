import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<title>HSL Color Finder</title>
					<meta
						name="description"
						content="Explore the wonderful world of HSL colors! Select a hue, saturation, and lightness to find shades, tints, or color harmonies. Click on any HSL, HEX, or RGB value to copy right to your clipboard!"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />

					<title>HSL Color Finder</title>
					<meta name="title" content="HSL Color Finder" />
					<meta
						name="description"
						content="Explore the wonderful world of HSL colors! Select a hue, saturation, and lightness to find shades, tints, or color harmonies. Click on any HSL, HEX, or RGB value to copy right to your clipboard!"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://hslfinder.com/" />
					<meta property="og:title" content="HSL Color Finder" />
					<meta
						property="og:description"
						content="Explore the wonderful world of HSL colors! Select a hue, saturation, and lightness to find shades, tints, or color harmonies. Click on any HSL, HEX, or RGB value to copy right to your clipboard!"
					/>
					<meta property="og:image" content="/meta-image.jpg" />

					<meta
						property="twitter:card"
						content="summary_large_image"
					/>
					<meta
						property="twitter:url"
						content="https://hslfinder.com/"
					/>
					<meta property="twitter:title" content="HSL Color Finder" />
					<meta
						property="twitter:description"
						content="Explore the wonderful world of HSL colors! Select a hue, saturation, and lightness to find shades, tints, or color harmonies. Click on any HSL, HEX, or RGB value to copy right to your clipboard!"
					/>
					<meta property="twitter:image" content="/meta-image.jpg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
