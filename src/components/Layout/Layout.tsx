import React, { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Socials } from "../Socials/Socials";
import { useLocation } from "react-router-dom";
import { Aside, Main, ToggleButton, Top, Logo } from "./styles";
import logo from "../../images/logo.jpg";

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

	return (
		<>
			<Aside menuOpened={menuOpened}>
				<Menu />
				<Socials />
			</Aside>
			<Main menuOpened={menuOpened}>
				<Top>
					<ToggleButton onClick={handleMenuToggle} menuOpened={menuOpened}>
						<span></span>
					</ToggleButton>
					<Logo alt="Logo" src={logo} />
				</Top>
				{children}
			</Main>
		</>
	);
};
