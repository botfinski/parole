import { Home, Offer, Portfolio, Contact, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "./App.scss";

export const routes = [
	{
		path: "/",
		title: "Home",
		component: <Home />,
	},
	{
		path: "/my",
		title: "My",
		component: <About />,
	},
	{
		path: "/oferta",
		title: "Oferta",
		component: <Offer />,
	},
	{
		path: "/portfolio",
		title: "Portfolio",
		component: <Portfolio />,
	},
	{
		path: "/contact",
		title: "Kontakt",
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
