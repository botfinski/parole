import styled from "styled-components";

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	margin-top: 4em;
`;

const Header = styled.h2`
	font-size: 6em;
	line-height: 1em;
	/* text-transform: uppercase; */
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1.4fr 0.6fr;
	grid-template-rows: 1fr;
	grid-template-areas: "left right";
	gap: 0.25em;
	justify-items: stretch;
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
		<Wrapper>
			<Header>
				<Container>
					<LeftSpan>Kreuje</LeftSpan>
					<RightSpan>my</RightSpan>
				</Container>
				<Container>
					<LeftSpan>Tworzy</LeftSpan>
					<RightSpan>my</RightSpan>
				</Container>
				<Container>
					<LeftSpan>Wdraża</LeftSpan>
					<RightSpan>my</RightSpan>
				</Container>
			</Header>
		</Wrapper>
	);
};
