import React from "react";
import { Home, Team, Scope, Portfolio, Contact } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "./App.scss";

export const routes = [
	{
		path: "/",
		linkText: "Home",
		component: <Home />,
	},
	{
		path: "/zespol",
		linkText: "Zespół",
		component: <Team />,
	},
	{
		path: "/zakres",
		linkText: "Zakres działań",
		component: <Scope />,
	},
	{
		path: "/portfolio",
		linkText: "Portfolio",
		component: <Portfolio />,
	},
	{
		path: "/contact",
		linkText: "Kontakt",
		component: <Contact />,
	},
];

function App() {
	const routeComponents = routes.map(({ path, component }) => (
		<Route path={path} element={component} key={path} />
	));

	return (
		<div className="App">
			<Layout>
				<Routes>{routeComponents}</Routes>
			</Layout>
		</div>
	);
}

export default App;
