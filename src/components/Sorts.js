function Sorts({ onSortChange }) {
    return (
        <div id="sort" className="ui eight wide column">
            <select name="sort" onChange={(e) => onSortChange(e.target.value)}>
                <option value="All">Sort By</option>
                <option value="Name">Name (A-Z)</option>
                <option value="Weight">Weight (Ascending)</option>
            </select>
        </div>
    )
}

export default Sorts;