import {
	PreviewWindowEl,
	Title,
	Text,
	Citation,
} from "./styles/preview-window";

function PreviewWindow({ textColor, bgColor, userHeading, userBody }) {
	const styles = {
		color: textColor,
		backgroundColor: bgColor,
	};
	return (
		<PreviewWindowEl style={styles}>
			<Title>
				{userHeading ? userHeading : "HSL is the best thing ever!"}
			</Title>

			{userBody ? (
				<Text>{userBody}</Text>
			) : (
				<>
					<Text>
						HSL (for hue, saturation, lightness) and HSV (for hue,
						saturation, value; also known as HSB, for hue,
						saturation, brightness) are alternative representations
						of the RGB color model, designed in the 1970s by
						computer graphics researchers to more closely align with
						the way human vision perceives color-making attributes.
						In these models, colors of each hue are arranged in a
						radial slice, around a central axis of neutral colors
						which ranges from black at the bottom to white at the
						top.
					</Text>
					<Citation>
						-{" "}
						<a href="https://en.wikipedia.org/wiki/HSL_and_HSV">
							Wikipedia
						</a>
					</Citation>
				</>
			)}
		</PreviewWindowEl>
	);
}

export default PreviewWindow;
