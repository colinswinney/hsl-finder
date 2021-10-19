import { ContainerEl } from "./styles/container";

function Container({ children, ...restProps }) {
	return <ContainerEl {...restProps}>{children}</ContainerEl>;
}

export default Container;
