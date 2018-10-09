import React from "React";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaList from "../../../components/PizzaList";

describe("Given PizzaList", () => {
  function renderComponent(props = {}) {
    return shallow(<PizzaList {...props} />);
  }

  it("should be a <ul/> with a specifying className", () => {
    const component = renderComponent();
    expect(component.is("ul.pizza-list")).to.be.true();
  });

  describe("When the list is empty", () => {
    it("should render no pizzaItems", () => {
      const component = renderComponent({ repos: [] });
      expect(component.find("li").length).to.equal(0);
    });
  });

  describe("When the list has pizzas", () => {
    it("should render pizzas", () => {
      const component = renderComponent({ pizzas: [{}, {}] });
      expect(component.find("li").length).to.equal(2);
    });
  });

  describe("When pizzas are not a list", () => {
    it("should display an error", () => {
      const component = renderComponent({ pizzas: { message: "Sorry" } });
      expect(component.find("p").text()).to.be.equal(
        "Sorry... No Pizza available for you today!"
      );
    });
  });
});
