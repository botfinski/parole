import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../App";
import styled from "styled-components";

interface Props {}

const NavList = styled.ul`
	list-style: none;
	/* text-transform: uppercase; */

	li {
		margin-bottom: 0.75em;
		& > a {
			text-decoration: none;
			color: #000;
			transition: all 0.2s ease-in-out;

			&:hover {
				color: var(--pink);
			}
		}
	}
`;

export const Menu: React.FC<Props> = () => {
	return (
		<nav>
			<NavList>
				{routes.map(({ path, title }) => (
					<li key={path}>
						<Link to={path}>{title}</Link>
					</li>
				))}
			</NavList>
		</nav>
	);
};
