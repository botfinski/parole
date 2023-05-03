import styled from "styled-components";

export const breakpoints = {
	sm: "380px",
	md: "768px",
	lg: "1200px",
	xl: "1366px",
};

interface PropStyles {
	menuOpened?: boolean;
	isHomeOrContact?: boolean;
	marginBottom?: boolean;
	alignCenter?: boolean;
	marginTop?: string;
}

export const ToggleButton = styled.button<PropStyles>`
	/* position: relative; */
	position: absolute;
	top: 30px;
	left: 20px;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	border: none;
	/* margin-top: 40px; */
	background: transparent;
	cursor: pointer;
	z-index: 99;

	@media (min-width: ${breakpoints.md}) {
		top: 60px;
		left: 60px;
		width: 40px;
		height: 40px;
	}

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
      background: transparent;
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

export const Top = styled.div<PropStyles>`
	height: 100px;
	position: absolute;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 0 20px;
	z-index: 10;

	@media (min-width: ${breakpoints.md}) {
		height: 120px;
		padding: 0 60px;
		z-index: 10;
	}
`;

export const Logo = styled.img`
	height: 200px;
	max-height: 100%;
`;

export const Main = styled.main<PropStyles>`
	position: fixed;
	/* overflow-y: scroll; */
	width: 100%;
	height: 100%;
	/* background: ${props =>
		!props.isHomeOrContact ? `var(--lavender)` : `#fff`}; */

	overflow-y: ${props => (props.isHomeOrContact ? `hidden` : `scroll`)};
	background: transparent;
	z-index: 10;
	transition: all 0.8s cubic-bezier(0.68, 0, 0.29, 1);

	@media (max-width: ${breakpoints.md}) {
		padding-bottom: 20px;
	}

	@media (min-width: ${breakpoints.md}) {
		padding-bottom: 60px;
	}

	${({ menuOpened }) =>
		menuOpened &&
		`
    transform: translateX(100%) translateY(60px);
    transform-origin: top left;

		@media (min-width: ${breakpoints.md}) {
			transform: translateX(400px) translateY(60px);
		}
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
	width: 100%;
	padding: 20px;
	z-index: 0;
	background: var(--lavender);
	opacity: 0;
	color: #000;
	transition: all 0.8s cubic-bezier(0.68, 0, 0.29, 1);

	@media (min-width: ${breakpoints.md}) {
		width: 400px;
		padding: 60px;
	}

	${({ menuOpened }) =>
		menuOpened &&
		`
    opacity: 1
  `}
`;

export const Wrapper = styled.div<PropStyles>`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: ${props =>
		props.marginTop ? `${props.marginTop} auto 0` : `3em auto 0`};
	align-items: ${props => (props.alignCenter ? `center` : `normal`)};
	max-width: calc(100% - 40px);
	justify-content: center;

	@media (max-width: ${breakpoints.md}) {
		/* background-color: #0000ff5c; */
	}

	@media (min-width: ${breakpoints.md}) {
		/* background-color: #ff00006e; */

		@media (max-height: ${breakpoints.md}) {
			/* background-color: #51ff006d; */
		}
	}

	@media (max-width: ${breakpoints.lg}) {
		@media (max-height: 430px) {
			/* background-color: #fc7527c7; */
		}
	}
`;

export const Subheader = styled.h3`
	margin-bottom: 0.5em;
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
	font-size: 20px;
	font-weight: 400;
`;

export const H3 = styled.h3`
	font-size: 1.55em;
	text-align: center;
`;

export const H4 = styled.h4`
	font-size: 1.17em;
	text-align: center;
`;
