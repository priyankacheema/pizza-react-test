import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    const searchText = e.target.value;
    this.setState({ searchText });
  };

  render() {
    return (
      <form className="search-form">
        <input
          className="search-input"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <button className="search-button">Sort</button>
      </form>
    );
  }
}

export default SearchForm;
