import React, { useState } from "react"

function HogTile({ name, image, specialty, weight, greased, medal }) {
    const [detailVis, setDetailVis] = useState(true);

    function clickHandler(e) {
        setDetailVis(!detailVis);
    }
    return (
        <div className="ui eight wide column" onClick={clickHandler}>
            <h3>{name}</h3>
            <img src={image} alt="hog image"/>
            <div hidden={detailVis}>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {medal}</p>
            </div>
        </div>
    )
}

export default HogTile;