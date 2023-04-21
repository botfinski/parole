import styled from "styled-components";

interface PropStyles {
	menuOpened?: boolean;
	// currentRoute?: string;
}

export const ToggleButton = styled.button<PropStyles>`
	position: relative;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	border: none;
	margin-top: 40px;
	background: transparent;
	cursor: pointer;

	& > span,
	& > span::before,
	& > span::after {
		position: absolute;
		display: block;
		height: 4px;
		width: 100%;
		background-color: #000;
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	& > span {
		${({ menuOpened }) =>
			menuOpened &&
			`
      background: rgba(255, 255, 255, 0);
    `}
	}

	& > span::before {
		content: "";
		margin-top: -8px;

		${({ menuOpened }) =>
			menuOpened &&
			`
      margin-top: 0px;
      transform: rotate(45deg);
    `}
	}

	& > span::after {
		content: "";
		margin-top: 8px;

		${({ menuOpened }) =>
			menuOpened &&
			`
      margin-top: 0px;
      transform: rotate(-45deg);
    `}
	}
`;

export const Top = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 0 0 40px;
`;

export const Logo = styled.img`
	height: 200px;
`;

export const Main = styled.main<PropStyles>`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 1;
	transition: all 0.8s cubic-bezier(0.68, 0, 0.29, 1);

	${({ menuOpened }) =>
		menuOpened &&
		`
    transform: translateX(400px) translateY(60px);
    transform-origin: top left;
  `}
`;

export const Aside = styled.aside<PropStyles>`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 400px;
	padding: 60px;
	z-index: 0;
	background: var(--lavender);
	opacity: 0;
	color: #000;
	transition: all 0.8s cubic-bezier(0.68, 0, 0.29, 1);

	${({ menuOpened }) =>
		menuOpened &&
		`
    opacity: 1
  `}
`;

export const Wrapper = styled.div`
	height: 100%;
	max-width: 80%;
	display: flex;
	flex-direction: column;
	margin: 3em auto 0;
`;
