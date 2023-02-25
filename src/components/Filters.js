function Filters({ onGreasedCheck }) {
    return (
        <div id="filters" className="ui eight wide column">
            <p>Filter By:</p>
            <label for="greased">
                <input type="checkbox" id="greased" onChange={onGreasedCheck}/> Greased
            </label>
        </div>
    )
}

export default Filters;