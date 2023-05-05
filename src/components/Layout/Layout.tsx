import React, { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Socials } from "../Socials/Socials";
import { useLocation } from "react-router-dom";
import { Aside, Main, ToggleButton, Top, Logo } from "./styles";
import logo from "../../images/logo-horizontal.png";
import { routes } from "../../App";
import { PageTitle } from "../PageTitle/PageTitle";
interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const { pathname } = useLocation();

	const handleMenuToggle = () => {
		setMenuOpened(menuOpened => !menuOpened);
	};

	useEffect(() => {
		setMenuOpened(false);
	}, [pathname]);

	const currentRoute = routes.filter(route => route.path === pathname)[0];
	let isHomeOrContact;

	console.log(currentRoute);
	if (currentRoute) {
		isHomeOrContact =
			currentRoute.path === "/" || currentRoute.path === "/contact";
	}

	// const isHomeOrContact =
	// 	currentRoute.path === "/" || currentRoute.path === "/contact";

	return (
		<>
			<ToggleButton onClick={handleMenuToggle} menuOpened={menuOpened}>
				<span></span>
			</ToggleButton>
			<Aside menuOpened={menuOpened}>
				<Menu />
				<Socials />
			</Aside>
			<Main menuOpened={menuOpened} isHomeOrContact={isHomeOrContact}>
				<Top menuOpened={menuOpened} isHomeOrContact={isHomeOrContact}>
					<Logo alt="Logo Parole Media" src={logo} />
				</Top>
				{currentRoute.title !== "Home" && (
					<PageTitle>{currentRoute.title}</PageTitle>
				)}
				{children}
			</Main>
		</>
	);
};
