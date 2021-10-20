import Nav from "../nav";
import Header from "../header";
import Main from "../main";
import Section from "../shared/section";
import Footer from "../footer";
import Shades from "../shades";
import Tints from "../tints";
import Harmonies from "../harmonies";
import Previews from "../previews";

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
					<Section.ColorsContainer>
						<Shades colorObj={colorObj} />
					</Section.ColorsContainer>
				</Section>

				<Section id="Tints">
					<Section.Title>Tints</Section.Title>
					<Section.ColorsContainer>
						<Tints colorObj={colorObj} />
					</Section.ColorsContainer>
				</Section>

				<Section id="Harmonies">
					<Section.Title>Harmonies</Section.Title>
					<Section.ColorsContainer>
						<Harmonies colorObj={colorObj} />
					</Section.ColorsContainer>
				</Section>

				<Section id="Previews">
					<Section.Title>Previews</Section.Title>
					<Previews colorObj={colorObj} />
				</Section>
			</Main>
			<Footer />
		</>
	);
}

export default Layout;
