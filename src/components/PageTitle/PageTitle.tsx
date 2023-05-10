import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Layout/styles";

interface Props {
	children: React.ReactNode;
}

const H2 = styled.h2`
	font-size: 20vw;
	margin-top: 100px;
	line-height: 1em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;

	@media (min-width: ${breakpoints.md}) {
		font-size: 5em;
	}
`;

export const PageTitle: React.FC<Props> = ({ children }) => {
	return <H2>{children}</H2>;
};
