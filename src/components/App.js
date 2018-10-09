import React, { Component } from "react";
import { render } from "react-dom";
import FilterForm from "./FilterForm";
import PizzaList from "./PizzaList/index";
import { fetchPizzasList } from "../api/pizza";

class App extends Component {
  state = {
    isLoad: false,
    pizzas: [],
    filteredPizzas: []
  };

  componentDidMount() {
    fetchPizzasList().then(res => {
      this.setState({
        pizzas: res.pizzas,
        filteredPizzas: res.pizzas,
        isLoad: true
      });
    });
  }

  handleSort = () => {
    const arrPizzas = this.state.filteredPizzas;
    this.setState({
      filteredPizzas: [...arrPizzas].sort(
        (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1)
      )
    });
  };

  handleFilter = e => {
    const arrPizzas = this.state.pizzas;
    const newChangedArr = arrPizzas.filter(pizza =>
      pizza.toLowerCase().match(e.currentTarget.value)
    );
    this.setState({ filteredPizzas: newChangedArr });
  };

  render() {
    if (this.state.isLoad == false) {
      return <div className="loading-class">Loading..........</div>;
    } else {
      return (
        <main>
          <FilterForm
            handleSort={this.handleSort}
            handleFilter={this.handleFilter}
          />
          <PizzaList pizzas={this.state.filteredPizzas} />
        </main>
      );
    }
  }
}

export default App;
