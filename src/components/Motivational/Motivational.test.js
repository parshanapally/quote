import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Motivational from "./Motivational";
import Chance from "chance";

describe("Given Motivational", () => {
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

  beforeEach(() => {
    component = shallow(<Motivational quotes={mockQuotes} />);
  });

  it("should exist", () => {
    expect(component.find("div")).to.have.length(2);
  });

  it("should contain className with quote-container", () => {
    const quoteContainer = component.find("div.quote-container");
    expect(quoteContainer).to.have.length(1);
  });
});
