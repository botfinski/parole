import styled from "styled-components";
import { Wrapper, breakpoints } from "../components/Layout/styles";
import { BgAnimation } from "../components/BgAnimation/BgAnimation";

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

	@media (max-width: ${breakpoints.md}) {
		/* color: #defd2dcc; */
	}

	@media (min-width: ${breakpoints.md}) {
		/* color: #fff; */

		@media (max-height: ${breakpoints.md}) {
			/* color: #5081dd; */
			font-size: 7em;
			gap: 0.3em;
			grid-template-columns: 1.2fr 0.8fr;
		}
	}

	@media (max-width: ${breakpoints.lg}) {
		@media (max-height: 430px) {
			/* color: #c22252c6; */
			font-size: 8vw;
			grid-template-columns: 1.2fr 0.8fr;
		}
	}

	@media (min-width: ${breakpoints.xl}) {
		grid-template-columns: 1.15fr 0.85fr;
		gap: 0.3em;
		font-size: 13vw;
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
		<BgAnimation>
			<Wrapper marginTop="6em" style={{ position: "relative", zIndex: 10 }}>
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
		</BgAnimation>
	);
};
