import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home({ children }) {
	const [colorObj, setColorObj] = useState(() => {
		const savedHue = localStorage.getItem("hue");
		const savedSaturation = localStorage.getItem("saturation");
		const savedLightness = localStorage.getItem("lightness");

		const hueValue = savedHue ? Number(JSON.parse(savedHue)) : 180;
		const saturationValue = savedSaturation
			? Number(JSON.parse(savedSaturation))
			: 50;
		const lightnessValue = savedLightness
			? Number(JSON.parse(savedLightness))
			: 50;

		return {
			hue: hueValue,
			saturation: saturationValue,
			lightness: lightnessValue,
			color: function () {
				return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
			},
		};
	});

	useEffect(() => {
		localStorage.setItem("hue", JSON.stringify(colorObj.hue));
		localStorage.setItem("saturation", JSON.stringify(colorObj.saturation));
		localStorage.setItem("lightness", JSON.stringify(colorObj.lightness));
	}, [colorObj]);

	function handleHueChange(e) {
		const hueValue = e.target.value;
		setColorObj((prevState) => {
			return {
				...prevState,
				hue: hueValue,
				color: function () {
					return `hsl(${hueValue}, ${colorObj.saturation}%, ${colorObj.lightness}%)`;
				},
			};
		});
	}

	function handleSaturationChange(e) {
		const saturationValue = e.target.value;
		setColorObj((prevState) => {
			return {
				...prevState,
				saturation: saturationValue,
				color: function () {
					return `hsl(${colorObj.hue}, ${saturationValue}%, ${colorObj.lightness}%)`;
				},
			};
		});
	}

	function handleLightnessChange(e) {
		const lightnessValue = e.target.value;
		setColorObj((prevState) => {
			return {
				...prevState,
				lightness: lightnessValue,
				color: function () {
					return `hsl(${colorObj.hue}, ${colorObj.saturation}%, ${lightnessValue}%)`;
				},
			};
		});
	}

	return (
		<>
			<Head>
				<title>HSL Color Finder</title>
			</Head>
			<Layout
				onHueChange={handleHueChange}
				onSaturationChange={handleSaturationChange}
				onLightnessChange={handleLightnessChange}
				colorObj={colorObj}
			>
				{children}
			</Layout>
		</>
	);
}
