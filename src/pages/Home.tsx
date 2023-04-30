import styled from "styled-components";
import { Wrapper, breakpoints } from "../components/Layout/styles";

const Header = styled.h2`
	display: grid;
	grid-template-columns: 1.3fr 0.7fr;
	grid-template-rows: 1fr;
	grid-template-areas: "left right";
	gap: 25px;
	justify-items: stretch;
	font-size: 16vw;
	line-height: 1em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;

	@media (min-width: ${breakpoints.sm}) {
		font-size: 20vw;
		gap: 0.3em;
	}

	@media (min-width: ${breakpoints.lg}) {
		font-size: 8em;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 0.5em;
	}
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
