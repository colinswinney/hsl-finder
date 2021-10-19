import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Main from "../components/main";
import Section from "../components/shared/section";
import Footer from "../components/footer";

export default function Home({ children }) {
	return (
		<>
			<Head>
				<title>HSL Color Finder</title>
				<meta name="description" content="HSL Color Finder blah blah" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav>{children}</Nav>

			<Header />

			<Main>
				<Section id="Shades">
					<Section.Title>Shades</Section.Title>
					stuff
				</Section>

				<Section id="Tints">
					<Section.Title>Tints</Section.Title>
					stuff
				</Section>

				<Section id="Harmonies">
					<Section.Title>Harmonies</Section.Title>
					stuff
				</Section>

				<Section id="Previews">
					<Section.Title>Preview</Section.Title>
					stuff
				</Section>
			</Main>
			<Footer />
		</>
	);
}
