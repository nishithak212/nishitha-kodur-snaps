import "../FilterDrawer/FilterDrawer.scss"

const FilterDrawer = ({selectedTag, onTagSelect, tags, isFilterOpen}) => {
    return (
        //<div className="filter-drawer">
        <div className={`filter-drawer ${isFilterOpen ? `filter-open` : ''}`}>
             {/* <div className={`filter-drawer__contents ${isFilterOpen ? `filter-open` : ''}`}> */}
             <div className="filter-drawer__contents">
            <h3 className="filter-drawer__contents filter-drawer__contents--title">Filters</h3>
            <div className="filter-drawer__contents filter-drawer__contents--tags">
                {tags.map((tag)=>(
                    <button
                    key={tag}
                    className={`filter-drawer__contents filter-drawer__contents--tag ${selectedTag=== tag ? "active" : ""}`}
                    onClick={()=> onTagSelect(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
            </div>
        </div>
    )
}
export default FilterDrawer;