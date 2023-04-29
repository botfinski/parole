import styled from "styled-components";
import { Wrapper } from "../components/Layout/styles";

const Header = styled.h2`
	display: grid;
	grid-template-columns: 1.2fr 0.8fr;
	grid-template-rows: 1fr;
	grid-template-areas: "left right";
	gap: 0.5em;
	justify-items: stretch;
	font-size: 8em;
	line-height: 1em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;
`;

const LeftSpan = styled.span`
	text-align: right;
	grid-area: left;
`;

const RightSpan = styled.span`
	text-align: left;
	grid-area: right;
`;

export const Home = () => {
	return (
		<Wrapper marginTop="6em">
			<Header>
				<LeftSpan>Kreuje</LeftSpan>
				<RightSpan>my</RightSpan>
			</Header>
			<Header>
				<LeftSpan>Tworzy</LeftSpan>
				<RightSpan>my</RightSpan>
			</Header>
			<Header>
				<LeftSpan>Wdraża</LeftSpan>
				<RightSpan>my</RightSpan>
			</Header>
		</Wrapper>
	);
};
