import Nav from "../nav";
import Header from "../header";
import Main from "../main";
import Section from "../shared/section";
import Footer from "../footer";

function Layout({
	children,
	onHueChange,
	onSaturationChange,
	onLightnessChange,
	colorObj,
}) {
	return (
		<>
			<Nav colorObj={colorObj}>{children}</Nav>

			<Header
				onHueChange={onHueChange}
				onSaturationChange={onSaturationChange}
				onLightnessChange={onLightnessChange}
				colorObj={colorObj}
			/>

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

export default Layout;
