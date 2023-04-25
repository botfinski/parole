import { Caption, Subheader, Wrapper } from "../components/Layout/styles";

export const About = () => {
	return (
		<Wrapper>
			<Subheader>in RelatiOns we Trust</Subheader>
			<Caption marginBottom>
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
				się naszą wiedzą. Zatem -&nbsp;How CAN we Help?
			</p>
		</Wrapper>
	);
};
