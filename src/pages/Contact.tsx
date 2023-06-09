import { Subheader, Wrapper, breakpoints } from "../components/Layout/styles";
import styled from "styled-components";
import { CoffeeIcon, MailIcon, PhoneIcon } from "../components/Icons/Icons";

const ContactList = styled.ul`
	margin-top: 2em;
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;

	@media (min-width: ${breakpoints.lg}) {
		align-items: flex-start;
		gap: 1em;
	}

	& > li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;

		@media (max-width: ${breakpoints.lg}) {
			width: 100%;
			gap: 1em;
		}

		&:not(:last-child) {
			margin-bottom: 0.5em;
		}

		svg {
			width: 75px;

			@media (min-width: ${breakpoints.lg}) {
				max-height: 50px;
			}

			@media (max-width: 480px) {
				max-height: 30px;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
			transition: all 0.2s ease-in-out;

			&:hover {
				color: var(--pink);
			}
		}
	}
`;

export const Contact = () => {
	return (
		<Wrapper alignCenter marginTop="5em">
			<Subheader>Meet with us</Subheader>
			<ContactList>
				<li>
					<MailIcon />
					<a href="mailto:biuro@parolemedia.pl">biuro@parolemedia.pl</a>
				</li>
				<li>
					<PhoneIcon />
					<a href="tel:+48607797000">+48 607 797 000</a>
				</li>
				<li>
					<CoffeeIcon />
					<span>online/offline</span>
				</li>
			</ContactList>
		</Wrapper>
	);
};
