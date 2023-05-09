import styled from "styled-components";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../Icons/Icons";

const SocialsList = styled.ul`
	display: flex;
	margin: auto 0 0 0;
	list-style: none;

	& > li {
		width: 40px;

		&:not(:last-child) {
			margin-right: 20px;
		}

		a:hover {
			svg path,
			svg rect,
			svg circle {
				transition: all 0.2s ease-in-out;
				stroke: var(--pink);
			}
		}
	}
`;

const socials = [
	{
		name: "Facebook",
		url: "https://www.facebook.com/parolemediapl/",
		icon: <FacebookIcon />,
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/parolemedia/",
		icon: <InstagramIcon />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/company/parole-media/about/",
		icon: <LinkedInIcon />,
	},
];

export const Socials = () => {
	return (
		<SocialsList>
			{socials.map(social => (
				<li key={social.name}>
					<a href={social.url} target="_blank" rel="noreferrer">
						{social.icon}
					</a>
				</li>
			))}
		</SocialsList>
	);
};
