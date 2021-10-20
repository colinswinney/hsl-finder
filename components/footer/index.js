import { FooterEl, Small, Link } from "./styles/footer";
import Container from "../shared/container";

function Footer() {
	return (
		<FooterEl>
			<Container>
				<Small>
					Created by{" "}
					<Link href="https://colinswinney.com">Colin Swinney</Link>
				</Small>
			</Container>
		</FooterEl>
	);
}

export default Footer;
