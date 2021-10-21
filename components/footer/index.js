import { FooterEl, Small, Link } from "./styles/footer";
import Container from "../shared/container";

function Footer() {
	return (
		<FooterEl>
			<Container>
				<Small>
					&copy; Copyright {new Date().getFullYear()},{" "}
					<Link href="https://colinswinney.com">Colin Swinney</Link>
				</Small>
			</Container>
		</FooterEl>
	);
}

export default Footer;
