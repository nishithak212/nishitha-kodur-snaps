import {useState} from "react";
import tagsData from "../../data/tags.json";
import "../FilterDrawer/FilterDrawer.scss"

const FilterDrawer = ({selectedTag, onTagSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer =() => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="filter-drawer">
            <button className="filter-drawer__cta" onClick={toggleDrawer}>
                {isOpen ? "Close Filters" : "Open Filters"}
            </button>

            {isOpen && (
                <div className="filter-drawer__content">
                    <h3>Filter by Tag</h3>
                    <div className="filter-drawer__tags">
                        {tagsData.map((tag) => (
                            <button
                             key={tag}
                             className={`filter-drawer__tag ${selectedTag === tag ? "active" : ""}`}
                             onClick={() => onTagSelect(tag)}
                             >
                                {tag}
                             </button>
                        ))}
                    </div>
                    </div>
                    )}
        </div>
    );
};

export default FilterDrawer;