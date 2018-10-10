import React from "react";
import { expect } from "code";
import { shallow, mount } from "enzyme";
import App from "../../components/App";
import FilterForm from "../../components/FilterForm";
import PizzaList from "../../components/PizzaList";
import { fetchPizzasList } from "../../api/pizza";

describe("Given App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render <App />", () => {
    expect(component).to.exist();
  });

  it('should contain a <div /> with className "loading-class" ', () => {
    expect(component.find("div.loading-class")).to.have.length(1);
  });

  it('should contain a <div /> with className "fun-label"', () => {
    expect(
      component.containsAllMatchingElements([<div className="fun-label" />])
    ).to.be.true;
  });

  it("should contain a <main />", () => {
    expect(component.containsAllMatchingElements([<main />])).to.be.true;
  });

  it("should contain a <FilterForm/>", () => {
    expect(component.containsAllMatchingElements([<FilterForm />])).to.be.true;
  });

  it("should contain a <PizzaList/>", () => {
    expect(component.containsAllMatchingElements([<PizzaList />])).to.be.true;
  });

  it("should render the <FilterForm /> and <PizzaList /> if state isLoad is true", async () => {
    component.setState({
      isLoad: true
    });

    expect(component.state("isLoad")).to.be.true;
    expect(
      component.containsAllMatchingElements([<FilterForm />, <PizzaList />])
    ).to.be.true;
  });

  it('should render the <div /> if state isLoad is false with text as "Loading.........." ', async () => {
    component.setState({
      isLoad: false
    });

    expect(component.state("isLoad")).to.be.false;
    expect(component.containsAllMatchingElements([<div />])).to.be.true;
  });

  it("in ComponentDidMount(), fetchPizzasList() is called", () => {
    component.instance().componentDidMount();
    expect(fetchPizzasList.calledOnce).to.be.true;
  });

  it(`on a React component that loads data into state in componentDidMount`, async () => {
    await component.instance().componentDidMount();

    expect(component.state("isLoad")).to.equal(false);
    expect(component.setState({ isLoad: true }));

    component.update();
    expect(component.state("isLoad")).to.equal(true);
  });

  describe("When the handleFilter() is called", () => {
    it('should update the state "filteredPizzas" (current filtered pizzas)', async () => {
      component.instance().handleFilter({ filteredPizzas: [] });
      expect(component.state().filteredPizzas).to.equal([]);
    });
  });

  describe("When the handleSort() is called", () => {
    it('should update the state "filteredPizzas" (current sorted pizzas)', async () => {
      component.instance().handleSort({ filteredPizzas: [] });
      expect(component.state().filteredPizzas).to.equal([]);
    });
  });
});
