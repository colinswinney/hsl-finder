import {
	HeaderEl,
	BigText,
	Title,
	Subtitle,
	Description,
	ColorWindow,
	SliderTextContainer,
	SliderContainer,
} from "./styles/header";
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
				{/* <BigText>HSL</BigText> */}
				<Title bg={colorObj.color()}>HSL Color Finder</Title>
				<Subtitle>Explore the wonderful world of HSL colors!</Subtitle>
				<Description>
					Pick a hue, saturation, and lightness to find shades, tints,
					or color harmonies. Click any HSL, HEX, or RGB value to copy
					to your clipboard!
				</Description>
				<ColorWindow style={{ backgroundColor: colorObj.color() }} />

				<SliderTextContainer>
					<SliderContainer>
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
					</SliderContainer>

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
				</SliderTextContainer>
			</Container>
		</HeaderEl>
	);
}

export default Header;
