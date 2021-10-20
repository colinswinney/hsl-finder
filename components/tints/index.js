import ColorCell from "../shared/color-cell";
import { round } from "../../helpers/helpers";

function Tints({ colorObj }) {
	const numberOfVariations = Array.from({ length: 10 }, (_, i) => i + 1);

	function findNewTintLightness(l, degree) {
		let diff = 100 - Number(l);
		const diffStep = diff / 10;
		let diffAmt = diffStep * Number(degree);
		let newLightness = Number(l) + diffAmt;

		return round(newLightness, 2);
	}

	return (
		<>
			{numberOfVariations.map((n) => (
				<ColorCell
					key={n}
					hue={colorObj.hue}
					saturation={colorObj.saturation}
					lightness={findNewTintLightness(colorObj.lightness, n)}
				/>
			))}
		</>
	);
}

export default Tints;
