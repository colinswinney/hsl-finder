import { HeaderEl } from "./styles/header";
import Container from "../shared/container";

function Header(...restProps) {
	return (
		<HeaderEl {...restProps}>
			<Container>
				<h1>HSL Color Finder</h1>
			</Container>
		</HeaderEl>
	);
}

export default Header;
