import React from "react";
import {
	Cart,
	Highlights,
	Footer,
	Hero,
	Navbar,
	PopularSales,
	Stories,
} from "./components";

import {
	heroapi,
	newArrivals,
	topratedsales,
	highlight,
	featured,
	featured2,
	story,
	footerAPI,
} from "./data/data.js";

const App = () => {
	return (
		<>
			<Navbar />
			<Cart />
			<main className="relative flex flex-col gap-16">
				<Hero heroapi={heroapi} />
				<PopularSales dataAPI={newArrivals} ifTrue />
				<PopularSales dataAPI={topratedsales} />
				<Highlights dataAPI={highlight} ifTrue />
				<Highlights dataAPI={featured} />
				<Highlights dataAPI={featured2} ifTrue />
				<Stories story={story} />
			</main>
			<Footer footerAPI={footerAPI} />
		</>
	);
};

export default App;
