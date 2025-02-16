import "../FilterDrawer/FilterDrawer.scss"

const FilterDrawer = ({selectedTag, onTagSelect, tags}) => {
    return (
        <div className="filter-drawer">
            <h3>Filters</h3>
            <div className="filter-drawer__tags">
                {tags.map((tag)=>(
                    <button
                    key={tag}
                    className={`filter-drawer__tag ${selectedTag=== tag ? "active" : ""}`}
                    onClick={()=> onTagSelect(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default FilterDrawer;