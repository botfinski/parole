import {
	Caption,
	H3,
	H4,
	Typography,
	Wrapper,
	breakpoints,
} from "../components/Layout/styles";
import styled from "styled-components";

const Content = styled.div`
	margin-top: 0;
	max-height: 0;
	opacity: 0;
	transition: all 0.4s ease-in-out;
`;

const Accordion = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	gap: 20px;

	& > li {
		width: 100%;
		padding: 20px;
		border-radius: 20px;
		overflow: hidden;

		@media (min-width: ${breakpoints.md}) {
			width: calc(50% - 20px);
		}

		&:hover {
			max-height: none;

			& ${Content} {
				max-height: 350px;
				margin-top: 0.25em;
				opacity: 1;
			}
		}

		&:nth-child(1) {
			background: linear-gradient(30deg, #a548ff, #7e36c7 70%);
		}

		&:nth-child(2) {
			background: linear-gradient(30deg, #ff738e, #db5f78 70%);
		}

		&:nth-child(3) {
			background: linear-gradient(30deg, #ffd93b, #f7b542 70%);
		}

		&:nth-child(4) {
			background: linear-gradient(30deg, #00c4cc, #0093cc 70%);
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
					Identyfikacja wizualna, Strony www, Materiały firmowe, Materiały graficzne
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
						<Content>{elem.content}</Content>
					</li>
				))}
			</Accordion>
		</Wrapper>
	);
};
