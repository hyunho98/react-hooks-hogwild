import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";

function App() {
	const [filteredHogs, setFilteredHogs] = useState(hogs)

	function greasedHandler(e) {
		if (e.target.checked) {
			setFilteredHogs(filteredHogs.filter((hog) => {
				return hog.greased;
			}))
		} else {
			setFilteredHogs(hogs)
		}
	}
	return (
		<div className="App">
			<Nav />
			<HogTiles hogs={filteredHogs} onGreasedCheck={greasedHandler} />
		</div>
	);
}

export default App;
