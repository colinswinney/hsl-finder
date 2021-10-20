import React, { Component } from "react";
import { ColorName } from "./styles/text-to-copy";

class TextToCopy extends Component {
	constructor(props) {
		super(props);
		this.onSuccess = this.onSuccess.bind(this);
		this.state = {
			success: false,
			successClass: "",
		};
	}

	onSuccess() {
		console.info("successfully copied");
		this.setState({
			success: true,
			successClass: "success",
		});
		setTimeout(() => {
			this.setState({
				success: false,
				successClass: "",
			});
		}, 1500);
	}

	render() {
		return (
			<ColorName
				component="span"
				data-clipboard-text={this.props.clipboardText}
				button-title={this.props.btnTitle}
				onSuccess={this.onSuccess}
				className={this.state.successClass}
			>
				{this.state.success ? "Copied!" : this.props.children}
			</ColorName>
		);
	}
}

export default TextToCopy;
