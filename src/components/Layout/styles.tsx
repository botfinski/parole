import styled from "styled-components";

interface PropStyles {
	menuOpened?: boolean;
	isHomeOrContact?: boolean;
	marginBottom?: boolean;
	alignCenter?: boolean;
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
	position: absolute;
	width: 100%;
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
	/* overflow: scroll; */
	width: 100%;
	height: 100%;
	background: ${props => (!props.isHomeOrContact ? `var(--lavender)` : `#fff`)};
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

export const Wrapper = styled.div<PropStyles>`
	height: 100%;
	max-width: 80%;
	display: flex;
	flex-direction: column;
	margin: 3em auto 0;
	align-items: ${props => (props.alignCenter ? `center` : `normal`)};
`;

export const Subheader = styled.h3`
	margin-bottom: 0.25em;
	font-size: 3em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--text-shadow);
`;

export const Caption = styled.figure<PropStyles>`
	margin-bottom: ${props => (props.marginBottom ? `2em` : `1em`)};

	& > figcaption {
		text-align: right;
	}
`;

export const Typography = styled.p`
	font-size: 25px;
	font-weight: 400;
`;

export const H3 = styled.h3`
	font-size: 1.55em;
`;

export const H4 = styled.h4`
	font-size: 1.17em;
`;
