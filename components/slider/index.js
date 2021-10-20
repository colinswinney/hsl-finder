import { SliderEl, SliderLabel, SliderInput } from "./styles/slider";

function Slider({ name, max, value, onSliderChange }) {
	function createLabel(name, value) {
		if (name === "hue") {
			return "H: " + value;
		} else if (name === "saturation") {
			return "S: " + value + "%";
		} else if (name === "lightness") {
			return "L: " + value + "%";
		}
	}

	return (
		<SliderEl>
			<SliderLabel className="slider-label" htmlFor={name}>
				{createLabel(name, value)}
			</SliderLabel>
			<SliderInput
				className="slider-input"
				name={name}
				type="range"
				min="0"
				max={max}
				step="1"
				value={value}
				onChange={onSliderChange}
			/>
		</SliderEl>
	);
}

export default Slider;
