import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styles from "./FilterBar.module.css";

function FilterBar({ onFilterChange, onSearchChange, page }) {
    const handleFilterChange = (type, value) => {
        onFilterChange(type, value === "" ? null : value);
    };

    return (
        <div className="container-fluid my-3">
            <div className="row g-2  justify-content-around align-items-center">
                {/* Filters Section */}
                <div className="col-auto d-flex align-items-center gap-2 mb-2 mb-md-0">
                    <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
                    
                    {page === "position" && (
                        <select
                            name="position"
                            className="form-select form-select-sm"
                            onChange={(e) => handleFilterChange("position", e.target.value)}
                            aria-label="Filter by position"
                        >
                            <option value="">All Positions</option>
                            {[
                                "President",
                                "Vice President",
                                "Secretary",
                                "Treasurer",
                                "HR Manager",
                                "Operations Manager",
                                "Marketing Head",
                                "IT Manager",
                                "Public Relations Officer",
                            ].map((position) => (
                                <option key={position} value={position}>
                                    {position}
                                </option>
                            ))}
                        </select>
                    )}

                    {page === "decision" && (
                        <select
                            name="category"
                            className="form-select form-select-sm"
                            onChange={(e) => handleFilterChange("category", e.target.value)}
                            aria-label="Filter by category"
                        >
                            <option value="">All Categories</option>
                            {["Financial", "Legal", "Strategy", "HR", "Operations"].map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    )}

                    {/* <select
                        name="status"
                        className="form-select form-select-sm"
                        onChange={(e) => handleFilterChange("status", e.target.value)}
                        aria-label="Filter by status"
                    >
                        <option value="">All Statuses</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select> */}
                </div>

                {/* Search Section */}
                <div className="col-auto">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search decisions..."
                            onChange={(e) => onSearchChange(e.target.value)}
                            aria-label="Search decisions"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

FilterBar.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    page: PropTypes.oneOf(["position", "decision"]).isRequired,
};

export default FilterBar;