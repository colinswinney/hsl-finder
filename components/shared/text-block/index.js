import { TextBlockEl, Text } from "./styles/text-block";

function TextBlock({ children, ...restProps }) {
	return <TextBlockEl {...restProps}>{children}</TextBlockEl>;
}

export default TextBlock;

TextBlock.Text = function TextBlockText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
