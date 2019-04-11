import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Humor from "./Humor";
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
    component = shallow(<Humor quotes={mockQuotes} />);
  });

  it("should exist", () => {
    expect(component).to.have.length(1);
  });
});
