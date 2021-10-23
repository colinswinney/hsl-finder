import { Heading } from "./styles/harmonies";
import ColorCell from "../shared/color-cell";

function Harmonies({ colorObj }) {
	function harmonyHue(hue, num) {
		let newHue = Number(hue) + num;

		if (newHue > 360) {
			newHue = newHue - 360;
		}
		return newHue;
	}
	return (
		<>
			<Heading>Complimentary</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 180)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<Heading>Split-Complimentary</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 150)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 210)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<Heading>Analogous</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 40)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 320)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<Heading>Triadic</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 120)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 240)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<Heading>Square</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 90)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 180)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 270)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<Heading>Rectangular</Heading>
			<ColorCell
				hue={colorObj.hue}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 60)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 180)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>

			<ColorCell
				hue={harmonyHue(colorObj.hue, 240)}
				saturation={colorObj.saturation}
				lightness={colorObj.lightness}
			/>
		</>
	);
}

export default Harmonies;
