import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/Layout/styles";

interface Props {}

const Subheader = styled.h3`
	font-size: 3em;
	text-align: center;
	color: var(--lightPink);
	text-shadow: var(--pink) 0px 0px 22px, var(--pink) 0px 0px 22px,
		var(--pink) 0px 0px 22px;
`;

const Caption = styled.figure`
	margin-bottom: 2em;
	& > figcaption {
		text-align: right;
	}
`;

export const About: React.FC<Props> = () => {
	return (
		<Wrapper>
			<Subheader>in RelatiOns we Trust</Subheader>
			<Caption>
				<blockquote>
					“Kiedyś”, to choroba, która każe nam zabrać wszystkie nasze marzenia do
					grobu.
				</blockquote>
				<figcaption>&mdash; Tim Ferriss</figcaption>
			</Caption>
			<p>
				Z nami tak nie będzie - zabierzemy Cię w niezwykłą podróż po emocjach Twoich
				klientów. Poszukamy dla Ciebie najlepszych rozwiązań. Z nami nie będziesz
				się nudził, dlaczego?
				<br />
				<br />
				Bo kochamy pracę z ludżmi!
				<br />
				<br />
				Utarte schematy są nie dla nas. Kochamy tworzyć, kreować, działać. Dzielimy
				się naszą wiedzą. Zatem - How CAN we Help?
			</p>
		</Wrapper>
	);
};
