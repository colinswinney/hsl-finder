import { useState } from "react";
import { Description, Label, Input, WindowsWrapper } from "./styles/previews";
import PreviewWindow from "../preview-window";

function Previews({ colorObj }) {
	const [userText, setUserText] = useState("");

	function handleUserTextChange(e) {
		setUserText(e.target.value);
	}

	const light = "hsl(0, 0%, 99%)";
	const dark = "hsl(0, 0%, 7%)";

	return (
		<>
			<Description>
				View your selection against light or dark text and backgrounds.
			</Description>
			<Label htmlFor="heading" className="text-label">
				Heading:
			</Label>
			<Input
				className="text-input"
				name="heading"
				type="text"
				value={userText}
				placeholder="Type something"
				onChange={handleUserTextChange}
			/>
			<WindowsWrapper>
				<PreviewWindow
					bgColor={colorObj.color()}
					textColor={light}
					userText={userText}
				/>
				<PreviewWindow
					bgColor={light}
					textColor={colorObj.color()}
					userText={userText}
				/>
				<PreviewWindow
					bgColor={colorObj.color()}
					textColor={dark}
					userText={userText}
				/>
				<PreviewWindow
					bgColor={dark}
					textColor={colorObj.color()}
					userText={userText}
				/>
			</WindowsWrapper>
		</>
	);
}

export default Previews;
