import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Chance from "chance";
import Positive from "./Positive";

describe("Given Positive", () => {
  let component;

  const chance = new Chance();
  const mockQuotes = [
    {
      motivation: [
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() }
      ]
    },
    {
      humor: [
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() }
      ]
    },
    {
      positive: [
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() }
      ]
    },
    {
      leadership: [
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() }
      ]
    },
    {
      wisdom: [
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() },
        { quote: chance.string() }
      ]
    }
  ];

  function requiredProps(overrides = {}) {
    return {
      quotes: mockQuotes,
      ...overrides
    };
  }

  function renderComponent(props = requiredProps) {
    return shallow(<Positive {...props} />);
  }

  beforeEach(() => {
    component = renderComponent();
  });

  it("should exist", () => {
    expect(component.find("div")).to.have.length(1);
  });
});
