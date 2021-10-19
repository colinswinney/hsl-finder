import { SectionEl, Title } from "./styles/section";
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
