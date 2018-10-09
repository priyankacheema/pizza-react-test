import React from "react";

const FilterForm = props => {
  return (
    <div className="sort-filter-components">
      <input className="search-input" onChange={props.handleFilter} />
      <button className="sort-button" onClick={props.handleSort}>
        Sort
      </button>
    </div>
  );
};

export default FilterForm;