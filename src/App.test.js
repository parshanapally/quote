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
    expect(component.state().isActive).to.equal("home");
  });

  describe("Given handleClick", () => {
    it("should call <Home/> when isActive state is equal to home", () => {
      const event = {
        target: {
          className: "homeDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "home" });

      expect(component.state().isActive).to.equal("home");
    });
    it("should call <Motivational/> when isActive state is equal to motivational", () => {
      const event = {
        target: {
          className: "motivationalDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "motivational" });

      expect(component.state().isActive).to.equal("motivational");
    });

    it("should call <Humor/> when isActive state is equal to humor", () => {
      const event = {
        target: {
          className: "humorDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "humor" });

      expect(component.state().isActive).to.equal("humor");
    });

    it("should call <Positive/> when isActive state is equal to positive", () => {
      const event = {
        target: {
          className: "positiveDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "positive" });

      expect(component.state().isActive).to.equal("positive");
    });

    it("should call <Leadership/> when isActive state is equal to leadership", () => {
      const event = {
        target: {
          className: "leadershipDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "leadership" });

      expect(component.state().isActive).to.equal("leadership");
    });

    it("should call <Wisdom/> when isActive state is equal to wisdom", () => {
      const event = {
        target: {
          className: "wisdomDiv"
        }
      };

      component.instance().handleClick(event);
      component.setState({ isActive: "wisdom" });

      expect(component.state().isActive).to.equal("wisdom");
    });
  });

  it("should contain <Motivational/>", () => {
    const Motivational = component.find("Motivational");
    expect(Motivational).to.have.length(1);
  });

  it("should contain <Humor/>", () => {
    const Humor = component.find("Humor");
    expect(Humor).to.have.length(1);
  });

  it("should contain <Positive/>", () => {
    const Positive = component.find("Positive");
    expect(Positive).to.have.length(1);
  });

  it("should contain <Leadership/>", () => {
    const Leadership = component.find("Leadership");
    expect(Leadership).to.have.length(1);
  });

  it("should contain <Wisdom/>", () => {
    const Wisdom = component.find("Wisdom");
    expect(Wisdom).to.have.length(1);
  });
});
