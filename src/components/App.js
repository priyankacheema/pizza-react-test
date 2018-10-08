import React, { Component } from "react";
import SearchForm from "./SearchForm";
import PizzaList from "./PizzaList/index";
import { fetchPizzasList } from "../api/pizza";

class App extends Component {
  state = {
    pizzas: []
  };

  componentDidMount() {
    fetchPizzasList().then(res => {
      this.setState({
        pizzas: res.pizzas
      });
    });
  }

  render() {
    return (
      <main>
        <SearchForm />
        <PizzaList pizzas={this.state.pizzas} />
      </main>
    );
  }
}

export default App;
