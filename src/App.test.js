import React from "react";
import { expect } from "code";
import sinon from "sinon";
import App from "./App";
import { shallow } from "enzyme";
import Chance from "chance";

describe("Given App", () => {
  let component;

  const chance = new Chance();

  const mockQuotes = {
    motivation: [
      chance.string(),
      chance.string(),
      chance.string(),
      chance.string()
    ],
    humor: [chance.string(), chance.string(), chance.string(), chance.string()],
    positive: [
      chance.string(),
      chance.string(),
      chance.string(),
      chance.string()
    ],
    leadership: [
      chance.string(),
      chance.string(),
      chance.string(),
      chance.string()
    ],
    wisdom: [chance.string(), chance.string(), chance.string(), chance.string()]
  };

  function requiredProps(overrides = {}) {
    return {
      filteredQuotes: mockQuotes,
      ...overrides
    };
  }

  beforeEach(() => {
    component = renderComponent();
  });

  function renderComponent(props = requiredProps) {
    return shallow(<App {...props} />);
  }

  it("should exist", () => {
    const div = component.find("div");
    expect(div).to.have.length(1);
  });

  it("should contain default state", () => {
    expect(component.state().filteredQuotes).to.equal([]);
    expect(component.state().quotes).to.equal([]);
    expect(component.state().isActive).to.equal("");
  });

  it("should contain <Motivational/>", () => {
    const Motivational = component.find("Motivational");
    expect(Motivational).to.have.length(1);
  });
});
