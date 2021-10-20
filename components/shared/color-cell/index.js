import { ColorCellEl, ColorSwatch } from "./styles/color-cell";
import TextToCopy from "../text-to-copy";
import TextBlock from "../text-block";
import { hslToHex, hslToRgb } from "../../../helpers/helpers";

function ColorCell({ hue, saturation, lightness }) {
	return (
		<ColorCellEl>
			<ColorSwatch
				style={{
					backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
				}}
			></ColorSwatch>
			<TextBlock>
				<TextBlock.Text>
					<TextToCopy
						clipboardText={`hsl(${hue}, ${saturation}%, ${lightness}&)`}
						btnTitle={`Copy ${`hsl(${hue}, ${saturation}%, ${lightness}%)`}`}
					>
						{`hsl(${hue}, ${saturation}%, ${lightness}%)`}
					</TextToCopy>
				</TextBlock.Text>

				<TextBlock.Text>
					<TextToCopy
						clipboardText={hslToHex(hue, saturation, lightness)}
						btnTitle={`Copy ${hslToHex(
							hue,
							saturation,
							lightness
						)}`}
					>
						{hslToHex(hue, saturation, lightness)}
					</TextToCopy>
				</TextBlock.Text>

				<TextBlock.Text>
					<TextToCopy
						clipboardText={hslToRgb(hue, saturation, lightness)}
						btnTitle={`Copy ${hslToRgb(
							hue,
							saturation,
							lightness
						)}`}
					>
						{hslToRgb(hue, saturation, lightness)}
					</TextToCopy>
				</TextBlock.Text>
			</TextBlock>
		</ColorCellEl>
	);
}

export default ColorCell;
