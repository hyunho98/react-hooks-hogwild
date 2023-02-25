import React, { useState } from "react";
import HogTile from "./HogTile";
import Filters from "./Filters";
import Sorts from "./Sorts";

function HogTiles({ hogs, onGreasedCheck }) {
    const [hogSort, setHogSort] = useState("All");

    function hogSorter() {
        if (hogSort === "Name") {
            console.log([...hogs].sort((a, b) => (a.name > b.name) ? 1 : -1))
            return [...hogs].sort((a, b) => (a.name > b.name) ? 1 : -1);
        } else if (hogSort === "Weight"){
            console.log([...hogs].sort((a, b) => (a.weight > b.weight) ? 1 : -1))
            return [...hogs].sort((a, b) => (a.weight > b.weight) ? 1 : -1);
        }

        console.log(hogs)
        return hogs
    }
    const tiles = hogSorter().map((hog) => {
        return (
            <HogTile
                key={hog.name}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        )
    })

    return (
        <div className="ui grid container">
            <Filters onGreasedCheck={onGreasedCheck} />
            <Sorts onSortChange={setHogSort} />
            {tiles}
        </div>
    )
}

export default HogTiles;