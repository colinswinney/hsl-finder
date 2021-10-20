import { HeaderEl, Title, Description, ColorWindow } from "./styles/header";
import { hslToHex, hslToRgb } from "../../helpers/helpers";
import Container from "../shared/container";
import Slider from "../slider";
import TextToCopy from "../shared/text-to-copy";
import TextBlock from "../shared/text-block";

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
					<TextBlock.Text>
						<TextToCopy
							clipboardText={colorObj.color()}
							btnTitle={`Copy ${colorObj.color()}`}
						>
							{colorObj.color()}
						</TextToCopy>
					</TextBlock.Text>

					<TextBlock.Text>
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
					</TextBlock.Text>

					<TextBlock.Text>
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
					</TextBlock.Text>
				</TextBlock>
			</Container>
		</HeaderEl>
	);
}

export default Header;
