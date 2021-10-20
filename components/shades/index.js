import ColorCell from "../shared/color-cell";
import { round } from "../../helpers/helpers";

function Shades({ colorObj }) {
	const numberOfVariations = Array.from({ length: 10 }, (_, i) => i + 1);

	function findNewShadeLightness(l, degree) {
		let diff = Number(l);
		const diffStep = diff / 10;
		let diffAmt = diffStep * Number(degree);
		let newLightness = Number(l) - diffAmt;

		return round(newLightness, 2);
	}

	return (
		<>
			{numberOfVariations.map((n) => (
				<ColorCell
					key={n}
					n={n}
					hue={colorObj.hue}
					saturation={colorObj.saturation}
					lightness={findNewShadeLightness(colorObj.lightness, n)}
				/>
			))}
		</>
	);
}

export default Shades;
