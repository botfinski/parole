import { Subheader, Wrapper } from "../components/Layout/styles";
import styled from "styled-components";
import { CoffeeIcon, MailIcon, PhoneIcon } from "../components/Icons/Icons";

const ContactList = styled.ul`
	margin-top: 2em;
	& > li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 1em;

		&:not(:last-child) {
			margin-bottom: 0.5em;
		}

		svg {
			width: 75px;
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
		<Wrapper alignCenter>
			<Subheader>Meet with us</Subheader>
			<ContactList>
				<li>
					<MailIcon />
					<a href="mailto:biuro@parolemedia.pl">biuro@parolemedia.pl</a>
				</li>
				<li>
					<PhoneIcon />
					<a href="tel:+48700888999">+48 700 888 999</a>
				</li>
				<li>
					<CoffeeIcon />
					online/offline
				</li>
			</ContactList>
		</Wrapper>
	);
};
