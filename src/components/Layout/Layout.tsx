import React, { useState } from "react";
import { Menu } from "../Menu/Menu";
import { Socials } from "../Socials/Socials";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

const ToggleButton = styled.button`
	width: 40px;
	height: 40px;
`;

interface PropStyles {
	menuOpened?: boolean;
}

const Main = styled.main<PropStyles>`
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

const Aside = styled.aside<PropStyles>`
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
	background: #ffde59;
	opacity: 0;
	color: #000;
	/* overflow: auto; */
	/* backface-visibility: hidden; */
	/* transform: translateX(0); */
	transition: all 0.8s cubic-bezier(0.68, 0, 0.29, 1);

	${({ menuOpened }) =>
		menuOpened &&
		`
    opacity: 1
  `}
`;

export const Layout: React.FC<Props> = ({ children }) => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setMenuOpened(menuOpened => !menuOpened);
	};

	return (
		<>
			<Aside menuOpened={menuOpened}>
				<Menu />
				<Socials />
			</Aside>
			<Main menuOpened={menuOpened}>
				<ToggleButton onClick={handleMenuToggle}>X</ToggleButton>
				{children}
			</Main>
		</>
	);
};
