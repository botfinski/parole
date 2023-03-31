import React from "react";
import styled from "styled-components";

interface Props {}

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Header = styled.h2`
	font-size: 6em;
	line-height: 1em;
	text-transform: uppercase;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;
`;

export const Home: React.FC<Props> = () => {
	return (
		<Wrapper>
			<Header>
				Dobrze Cię
				<br />
				widzieć
			</Header>
		</Wrapper>
	);
};