import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import FilterForm from "../../../components/FilterForm";
import sinon from "sinon";

describe("Given SearchForm", () => {
  let component;
  let handleSortSpy;

  beforeEach(() => {
    handleSortSpy = sinon.spy();
    component = shallow(<FilterForm handleSort={handleSortSpy} />);
  });

  it('should exist as a div with class "sort-filter-components"', () => {
    expect(component.is("div.sort-filter-components")).to.be.true();
  });

  it('should contain an input with class "filter-input"', () => {
    expect(component.find("input.filter-input")).to.have.length(1);
  });

  it('should contain a <button> with class "sort-button" and text "Sort"', () => {
    expect(component.find("button.sort-button")).to.have.length(1);
    expect(component.find("button").text()).to.equal("Sort");
  });
});
