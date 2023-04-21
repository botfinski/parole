import React from "react";
import styled from "styled-components";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../Icons/Icons";

interface Props {}

const SocialsList = styled.ul`
	display: flex;
	margin: auto 0 0 0;
	list-style: none;

	& > li {
		width: 40px;

		&:not(:last-child) {
			margin-right: 20px;
		}
	}
`;

const socials = [
	{
		name: "Facebook",
		url: "https://google.com",
		icon: <FacebookIcon />,
	},
	{
		name: "Instagram",
		url: "https://google.com",
		icon: <InstagramIcon />,
	},
	{
		name: "LinkedIn",
		url: "https://google.com",
		icon: <LinkedInIcon />,
	},
];

export const Socials: React.FC<Props> = () => {
	return (
		<SocialsList>
			{socials.map(social => (
				<li key={social.name}>
					<a href={social.url}>{social.icon}</a>
				</li>
			))}
		</SocialsList>
	);
};
