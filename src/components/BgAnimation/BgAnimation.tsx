import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { fitElementToParent } from "./fitElementToParent";
import {
	AnimationWrapper,
	Cursor,
	Dot,
	DotsWrapper,
	StaggerVisualizer,
} from "./styles";

interface Props {
	children: React.ReactNode;
}

declare global {
	interface Window {
		MyNamespace: any;
	}
}

window.MyNamespace = window.MyNamespace || {};

export const BgAnimation: React.FC<Props> = ({ children }) => {
	const staggerRef = useRef<any>(null);
	const dotsWrapperRef = useRef<any>(null);
	const cursorRef = useRef<any>(null);
	const [grid, setGrid] = useState<any>([20, 10]);
	let dotsNumber = Array.from(Array(grid[0] * grid[1]).keys());

	useEffect(() => {
		function handleResize() {
			setGrid([20, 30]);

			console.log(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		let animation: any;
		let cell = 55;

		fitElementToParent(staggerRef.current, 0);

		let index = anime.random(0, grid[0] * grid[1] - 1);
		let nextIndex = 0;

		anime.set(cursorRef.current, {
			translateX: anime.stagger(-cell, { grid: grid, from: index, axis: "x" }),
			translateY: anime.stagger(-cell, { grid: grid, from: index, axis: "y" }),
			translateZ: 0,
			scale: 1.5,
		});

		function play() {
			if (animation) animation.pause();
			nextIndex = anime.random(0, grid[0] * grid[1] - 1);
			animation = anime
				.timeline({
					easing: "easeInOutQuad",
					complete: play,
				})
				.add({
					targets: cursorRef.current,
					keyframes: [
						{ scale: 0.75, duration: 120 },
						{ scale: 2.5, duration: 220 },
						{ scale: 1.5, duration: 450 },
					],
					duration: 300,
				})
				.add(
					{
						targets: ".dot",
						keyframes: [
							{
								translateX: anime.stagger("-2px", {
									grid: grid,
									from: index,
									axis: "x",
								}),
								translateY: anime.stagger("-2px", {
									grid: grid,
									from: index,
									axis: "y",
								}),
								duration: 100,
							},
							{
								translateX: anime.stagger("4px", {
									grid: grid,
									from: index,
									axis: "x",
								}),
								translateY: anime.stagger("4px", {
									grid: grid,
									from: index,
									axis: "y",
								}),
								scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
								duration: 225,
							},
							{
								translateX: 0,
								translateY: 0,
								scale: 1,
								duration: 1200,
							},
						],
						delay: anime.stagger(80, { grid: grid, from: index }),
					},
					30
				)
				.add(
					{
						targets: cursorRef.current,
						translateX: {
							value: anime.stagger(-cell, { grid: grid, from: nextIndex, axis: "x" }),
						},
						translateY: {
							value: anime.stagger(-cell, { grid: grid, from: nextIndex, axis: "y" }),
						},
						scale: 1.5,
						easing: "cubicBezier(.075, .2, .165, 1)",
					},
					"-=800"
				);
			index = nextIndex;
		}

		function pause() {
			if (animation) animation.pause();
		}

		play();

		return () => {
			pause();
		};
	}, [grid]);

	return (
		<>
			<AnimationWrapper>
				<StaggerVisualizer className="stagger-visualizer" ref={staggerRef}>
					<Cursor className="cursor" ref={cursorRef}></Cursor>
					<DotsWrapper className="dots-wrapper" ref={dotsWrapperRef}>
						{dotsNumber.map((elem, i) => (
							<Dot key={i} className="dot" />
						))}
					</DotsWrapper>
				</StaggerVisualizer>
			</AnimationWrapper>
			{children}
		</>
	);
};
