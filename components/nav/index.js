import { useState, useEffect } from "react";
import { NavEl, NavMenu, NavMenuItem, NavMenuLink, Swatch } from "./styles/nav";
import Container from "../shared/container";
import TextToCopy from "../shared/text-to-copy";

function Nav({ children, colorObj }) {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 1);
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<NavEl className={scroll ? "scrolled" : ""}>
			<Container>
				<NavMenu>
					<NavMenuItem
						className="logo"
						onClick={scrollToTop}
						bg={colorObj.color()}
					>
						<NavMenuLink href="#">HSL</NavMenuLink>
					</NavMenuItem>
					<NavMenuItem className="swatch-wrap">
						<TextToCopy
							clipboardText={colorObj.color()}
							btnTitle={`Copy: ${colorObj.color()}`}
						>
							{colorObj.color()}
						</TextToCopy>
						<Swatch style={{ backgroundColor: colorObj.color() }} />
					</NavMenuItem>
					<NavMenuItem className="toggle">{children}</NavMenuItem>
					<NavMenuItem className="flex-break" />
					<NavMenuItem>
						<NavMenuLink href="#Shades">Shades</NavMenuLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavMenuLink href="#Tints">Tints</NavMenuLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavMenuLink href="#Harmonies">Harmonies</NavMenuLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavMenuLink href="#Previews">Previews</NavMenuLink>
					</NavMenuItem>
				</NavMenu>
			</Container>
		</NavEl>
	);
}

export default Nav;
