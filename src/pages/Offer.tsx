import React from "react";
import { Wrapper } from "../components/Layout/styles";
import styled from "styled-components";

interface Props {}

const Accordion = styled.ul`
	list-style: none;

	& > li {
		padding: 20px;
		border-radius: 20px;

		&:not(:last-child) {
			margin-bottom: 20px;
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

const handleClick = (e: any) => {
	console.log(e.target);
};

const accordionContent = [
	{
		header: "Social media",
		subheader: "We are everywhere",
	},
	{
		header: "Event",
		subheader: "Fresh ideas",
	},
	{
		header: "PR Gift Box",
		subheader: "Surprise",
	},
	{
		header: "Elementy marketingowe",
		subheader: "Creative and productive",
	},
];

export const Offer: React.FC<Props> = () => {
	return (
		<Wrapper>
			<Accordion>
				{accordionContent.map(elem => (
					<li onClick={e => handleClick(e)} key={elem.header}>
						<h3>{elem.header}</h3>
						<p>{elem.subheader}</p>
					</li>
				))}
			</Accordion>
		</Wrapper>
	);
};
