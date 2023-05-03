import styled from "styled-components";

export const AnimationWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background: #fff;
	position: absolute;
	display: flex;
	align-items: flex-start;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
`;

export const StaggerVisualizer = styled.div`
	position: absolute;
	width: 1100px;
	height: 550px;
	transform-origin: left top;
`;

export const DotsWrapper = styled.div`
	transform: translateZ(0);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const Dot = styled.div`
	position: relative;
	z-index: 1;
	width: 23px;
	height: 23px;
	margin: 16px;
	/* background: linear-gradient(to right bottom, #d7faf8, #fdfdfd); */
	background: linear-gradient(to right bottom, #04fff2, #ff0202);
	border-radius: 50%;
`;

export const Cursor = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 37px;
	height: 37px;
	margin: 9px;
	background-color: var(--lightPink);
	border-radius: 50%;
	/* opacity: 0.3; */
`;
