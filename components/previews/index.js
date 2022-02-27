import { useState } from "react";
import {
	Description,
	Label,
	Input,
	Textarea,
	WindowsWrapper,
	ScoreCard,
} from "./styles/previews";
import PreviewWindow from "../preview-window";
import { hslToHex } from "../../helpers/helpers";
import { hex, score } from "wcag-contrast";

function Previews({ colorObj }) {
	const [userHeading, setUserHeading] = useState("");
	const [userBody, setUserBody] = useState("");

	function handleUserHeadingChange(e) {
		setUserHeading(e.target.value);
	}

	function handleUserBodyChange(e) {
		setUserBody(e.target.value);
	}

	const light = "hsl(0, 0%, 100%)";
	const dark = "hsl(0, 0%, 0%)";

	return (
		<>
			<Description>
				View your selection against white or black text and backgrounds.
				You will also see how that color contrast scores against WCAG
				2.0 accessibility standards. For more info on scores, see{" "}
				<a href="https://usecontrast.com/guide">this guide</a>.
			</Description>
			<Description>Add your own text below!</Description>
			<Label htmlFor="heading" className="text-label">
				Heading:
			</Label>
			<Input
				className="text-input"
				name="heading"
				type="text"
				value={userHeading}
				placeholder="Type something"
				onChange={handleUserHeadingChange}
			/>
			<Label htmlFor="body" className="text-label">
				Body Text:
			</Label>
			<Textarea
				className="text-input"
				name="body"
				value={userBody}
				placeholder="Type something"
				onChange={handleUserBodyChange}
			/>
			<WindowsWrapper>
				<PreviewWindow
					bgColor={colorObj.color()}
					textColor={light}
					userHeading={userHeading}
					userBody={userBody}
				/>
				<PreviewWindow
					bgColor={light}
					textColor={colorObj.color()}
					userHeading={userHeading}
					userBody={userBody}
				/>
				<ScoreCard>
					<p>
						Against pure white, this color has a contrast ratio of:
						<br />
						<span>
							{hex(
								hslToHex(
									colorObj.hue,
									colorObj.saturation,
									colorObj.lightness
								),
								"#fff"
							).toFixed(2)}
							:1 -{" "}
							{score(
								hex(
									hslToHex(
										colorObj.hue,
										colorObj.saturation,
										colorObj.lightness
									),
									"#fff"
								)
							)}
						</span>
						<br />
					</p>
				</ScoreCard>
				<PreviewWindow
					bgColor={colorObj.color()}
					textColor={dark}
					userHeading={userHeading}
					userBody={userBody}
				/>
				<PreviewWindow
					bgColor={dark}
					textColor={colorObj.color()}
					userHeading={userHeading}
					userBody={userBody}
				/>
				<ScoreCard>
					<p>
						Against pure black, this color has a contrast ratio of:
						<br />
						<span>
							{hex(
								hslToHex(
									colorObj.hue,
									colorObj.saturation,
									colorObj.lightness
								),
								"#000"
							).toFixed(2)}
							:1 -{" "}
							{score(
								hex(
									hslToHex(
										colorObj.hue,
										colorObj.saturation,
										colorObj.lightness
									),
									"#000"
								)
							)}
						</span>
						<br />
					</p>
				</ScoreCard>
			</WindowsWrapper>
		</>
	);
}

export default Previews;
