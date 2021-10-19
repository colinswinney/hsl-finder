import { useState, useEffect } from "react";
import { NavEl, NavMenu, NavMenuItem, NavMenuLink, Swatch } from "./styles/nav";
import Container from "../shared/container";

function Nav({ children }) {
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
					<NavMenuItem className="logo" onClick={scrollToTop}>
						<NavMenuLink href="#">HSL</NavMenuLink>
					</NavMenuItem>
					<NavMenuItem className="swatch-wrap">
						hsl(0, 0%, 100%) <Swatch />
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
