import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import SearchForm from "../../../components/SearchForm";
import sinon from "sinon";

describe("Given SearchForm", () => {
  let component;
  let handleSortSpy;

  beforeEach(() => {
    handleSortSpy = sinon.spy();
    component = shallow(<SearchForm handleSort={handleSortSpy} />);
  });

  it('should exist as a div with class "sort-filter-components"', () => {
    expect(component.is("div.sort-filter-components")).to.be.true();
  });

  it('should contain an input with class "search-input"', () => {
    expect(component.find("input.search-input")).to.have.length(1);
  });

  it('should contain a <button> with class "sort-button" and text "Sort"', () => {
    expect(component.find("button.sort-button")).to.have.length(1);
    expect(component.find("button").text()).to.equal("Sort");
  });

  it("should have a default state of searchText as an empty string", () => {
    expect(component.state().searchText).to.equal("");
  });
});
