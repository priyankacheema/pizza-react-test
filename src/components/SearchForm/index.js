import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <div className="sort-filter-components">
        <input className="search-input" />
        <button className="sort-button" onClick={this.props.handleSort}>
          Sort
        </button>
      </div>
    );
  }
}

export default SearchForm;
