import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../App";
import styled from "styled-components";

interface Props {}

const NavList = styled.ul`
	list-style: none;
	text-transform: uppercase;

	li > a {
		text-decoration: none;
		color: #000;

		&:hover {
			color: pink;
		}
	}
`;

export const Menu: React.FC<Props> = () => {
	return (
		<nav>
			<NavList>
				{routes.map(({ path, linkText }) => (
					<li key={path}>
						<Link to={path}>{linkText}</Link>
					</li>
				))}
			</NavList>
		</nav>
	);
};
