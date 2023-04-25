import {
	Caption,
	H3,
	H4,
	Typography,
	Wrapper,
} from "../components/Layout/styles";
import styled from "styled-components";

const Accordion = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row wrap;
	gap: 20px;

	& > li {
		width: calc(50% - 20px);
		padding: 20px;
		border-radius: 20px;
		/* max-height: 100px; */
		overflow: hidden;
		transition: var(--transition);

		&:hover {
			max-height: none;
			transition: var(--transition);
		}

		&:nth-child(1) {
			background-color: #a548ff;
		}

		&:nth-child(2) {
			background-color: #ff738e;
		}

		&:nth-child(3) {
			background-color: #ffd93b;
		}

		&:nth-child(4) {
			background-color: #00c4cc;
		}
	}
`;

const accordionContent = [
	{
		header: "Social media",
		subheader: "We are everywhere",
		content: (
			<>
				<Caption>
					<blockquote>“You are what you share”</blockquote>
					<figcaption>&mdash;&nbsp;Charles Leadbater</figcaption>
				</Caption>
				<Typography>
					Dobierzemy najlepsze dla Ciebie kanały, przygotujemy spójną komunikację
				</Typography>
			</>
		),
	},
	{
		header: "Event",
		subheader: "Fresh ideas",
		content: (
			<>
				<Caption>
					<blockquote>
						“Inspiracja istnieje, ale musi Cię znaleźć przy pracy.”
					</blockquote>
					<figcaption>&mdash;&nbsp;Pablo Picasso</figcaption>
				</Caption>
				<Typography>
					Twój cel biznesowy? Spotkajmy się, opowiesz nam o nim Wspólnie przejdziemy
					przez burzę mózgów. A teraz Zrelaksuj się - przygotujemy wyjątkowy pakiet
					pomysłów, zajmiemy się wszystkim.
					<br />
					Jak będzie? - SMACZNIE, WYJĄTKOWO, MAGICZNIE!
				</Typography>
			</>
		),
	},
	{
		header: "PR Gift Box",
		subheader: "Surprise",
		content: (
			<>
				<Caption>
					<blockquote>
						„Dajcie ludziom swobodę działania, a zaskoczą was swoją pomysłowością.“
					</blockquote>
					<figcaption>&mdash;&nbsp;Peter Drucker</figcaption>
				</Caption>
				<Typography>
					co oznaczają te boxy? Gifty jak gifty - a ile radości! My znamy sekrety
					udanego PR Gift Boxu
					<br />
					<br />
					Myślimy nieszablonowo - chcesz się przekonać?
				</Typography>
			</>
		),
	},
	{
		header: "Elementy marketingowe",
		subheader: "Creative and productive",
		content: (
			<>
				<Caption>
					<blockquote>
						„W marketingu tak naprawdę chodzi o dzielenie się pasją”
					</blockquote>
					<figcaption>&mdash;&nbsp;Michael Hyatt</figcaption>
				</Caption>
				<Typography>
					Identyfikacja wizualna
					<br />
					Strony www
					<br />
					Materiały firmowe
					<br />
					Materiały graficzne
					<br />
					<br />
					Wiesz, że Twoi klienci szukają Cię w sieci? Zadbamy o Twój wizerunek,
					wesprzemy Twoje relacje biznesowe
				</Typography>
			</>
		),
	},
];

export const Offer = () => {
	return (
		<Wrapper>
			<Accordion>
				{accordionContent.map(elem => (
					<li key={elem.header}>
						<H3>{elem.header}</H3>
						<H4>{elem.subheader}</H4>
						{elem.content}
					</li>
				))}
			</Accordion>
		</Wrapper>
	);
};
