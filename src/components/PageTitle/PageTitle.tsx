import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

const H2 = styled.h2`
	margin-top: 1em;
	font-size: 5em;
	line-height: 1em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;
`;

export const PageTitle: React.FC<Props> = ({ children }) => {
	return <H2>{children}</H2>;
};
