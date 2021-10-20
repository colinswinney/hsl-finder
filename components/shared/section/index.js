import { SectionEl, Title, ColorsContainer } from "./styles/section";
import Container from "../container";

function Section({ children, ...restProps }) {
	return (
		<SectionEl {...restProps}>
			<Container>{children}</Container>
		</SectionEl>
	);
}

export default Section;

Section.Title = function SectionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Section.ColorsContainer = function SectionColorsContainer({
	children,
	...restProps
}) {
	return <ColorsContainer {...restProps}>{children}</ColorsContainer>;
};
