import { PreviewWindowEl, Title, Text } from "./styles/preview-window";

function PreviewWindow({ textColor, bgColor, userText }) {
	const styles = {
		color: textColor,
		backgroundColor: bgColor,
	};
	return (
		<PreviewWindowEl style={styles}>
			<Title>{userText ? userText : "HSL is the best thing ever"}</Title>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
				ipsum vel lorem posuere interdum ultricies sed lectus. Aliquam
				bibendum sapien ac elit ultricies egestas. Suspendisse sagittis
				vel magna at finibus. Phasellus interdum arcu et ornare dapibus.
			</Text>
		</PreviewWindowEl>
	);
}

export default PreviewWindow;
