import React from "react";

function renderList(pizzas = []) {
  if (Array.isArray(pizzas)) {
    return pizzas.map(pizza => {
      return <li key={pizza}>{pizza}</li>;
    });
  } else {
    return <p>Sorry... No Pizza available for you today!</p>;
  }
}

class PizzaList extends React.Component {
  render() {
    return <ul className="pizza-list">{renderList(this.props.pizzas)}</ul>;
  }
}

export default PizzaList;
