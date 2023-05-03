import React from "react";
// import styled from "styled-components"

interface Props {}

// const StyledPortfolio = styled.div`
//   color: ${props => props.theme.linkColor};
// `

export const Portfolio: React.FC<Props> = () => {
	return (
		<>
			<span>Portfolio</span>
			<div
				className="tagembed-container"
				style={{ width: "100%", height: "100%", overflow: "auto" }}
			>
				<div
					className="tagembed-socialwall"
					data-wall-id="99544"
					view-url="https://widget.tagembed.com/99544"
				>
					{" "}
				</div>{" "}
				<script
					src="https://widget.tagembed.com/embed.min.js"
					type="text/javascript"
				></script>
			</div>

			<div
				className="tagembed-container"
				style={{ width: "100%", height: "100%", overflow: "auto" }}
			>
				<div className="tagembed-socialwall" data-wall-id="99544"></div>{" "}
				<script
					src="https://widget.tagembed.com/embed.min.js"
					type="text/javascript"
				></script>
			</div>
		</>
	);
};
