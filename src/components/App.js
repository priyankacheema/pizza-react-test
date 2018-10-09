import React, { Component } from "react";
import SearchForm from "./SearchForm";
import PizzaList from "./PizzaList/index";
import { fetchPizzasList } from "../api/pizza";

class App extends Component {
  state = {
    isLoad: false,
    pizzas: [],
    order: "ascending"
  };

  componentDidMount() {
    fetchPizzasList().then(res => {
      this.setState({
        pizzas: res.pizzas,
        isLoad: true
      });
    });
  }

  handleSort = () => {
    const arrPizzas = this.state.pizzas;
    this.state.pizzas = [...arrPizzas].sort(
      (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1)
    );
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    if (this.state.isLoad == false) {
      return <div className="loading-class">Loading..........</div>;
    } else {
      return (
        <main>
          <SearchForm
            handleSort={this.handleSort}
            handleChange={this.handleChange}
          />
          <PizzaList pizzas={this.state.pizzas} />
        </main>
      );
    }
  }
}

export default App;
