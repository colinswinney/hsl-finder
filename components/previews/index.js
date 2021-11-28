import { useState } from "react";
import {
	Description,
	Label,
	Input,
	Textarea,
	WindowsWrapper,
} from "./styles/previews";
import PreviewWindow from "../preview-window";

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
				Add your own text below!
			</Description>
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
			</WindowsWrapper>
		</>
	);
}

export default Previews;
