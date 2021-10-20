import {
	HeaderEl,
	Title,
	Description,
	ColorWindow,
	TextBlock,
	ColorP,
} from "./styles/header";
import { hslToHex, hslToRgb } from "../../helpers/helpers";
import Container from "../shared/container";
import Slider from "../slider";
import TextToCopy from "../shared/text-to-copy";

function Header({
	colorObj,
	onHueChange,
	onSaturationChange,
	onLightnessChange,
	...restProps
}) {
	return (
		<HeaderEl {...restProps}>
			<Container>
				<Title>HSL Color Picker</Title>
				<Description>
					Click on any HSL, HEX, or RGB value to copy to your
					clipboard!
				</Description>
				<ColorWindow style={{ backgroundColor: colorObj.color() }} />

				<Slider
					name="hue"
					max="360"
					value={colorObj.hue}
					onSliderChange={onHueChange}
				/>

				<Slider
					name="saturation"
					max="100"
					value={colorObj.saturation}
					onSliderChange={onSaturationChange}
				/>

				<Slider
					name="lightness"
					max="100"
					value={colorObj.lightness}
					onSliderChange={onLightnessChange}
				/>

				<TextBlock>
					<ColorP>
						<TextToCopy
							clipboardText={colorObj.color()}
							btnTitle={`Copy ${colorObj.color()}`}
						>
							{colorObj.color()}
						</TextToCopy>
					</ColorP>

					<ColorP>
						<TextToCopy
							clipboardText={hslToHex(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}
							btnTitle={`Copy ${hslToHex(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}`}
						>
							{hslToHex(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}
						</TextToCopy>
					</ColorP>

					<ColorP>
						<TextToCopy
							clipboardText={hslToRgb(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}
							btnTitle={`Copy ${hslToRgb(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}`}
						>
							{hslToRgb(
								colorObj.hue,
								colorObj.saturation,
								colorObj.lightness
							)}
						</TextToCopy>
					</ColorP>
				</TextBlock>
			</Container>
		</HeaderEl>
	);
}

export default Header;