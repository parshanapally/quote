import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Chance from "chance";
import sinon from "sinon";
import Tabs from "./Tabs";

describe("Given tabs", () => {
  let component;
  const mockHandleClick = sinon.spy();
  const mockTabs = [
    { className: "homeDiv", text: "Home" },
    { className: "motivationalDiv", text: "Motivational" },
    { className: "humorDiv", text: "Humor" },
    { className: "positiveDiv", text: "Positive" },
    { className: "leadershipDiv", text: "Leadership" },
    { className: "wisdomDiv", text: "Wisdom" }
  ];
  function requiredProps(overrides = {}) {
    return {
      handleClick: mockHandleClick,
      tabs: mockTabs,
      ...overrides
    };
  }
  function renderComponent(props = requiredProps()) {
    return shallow(<Tabs {...props} />);
  }

  beforeEach(() => {
    component = renderComponent();
  });

  it("should contain <div/> with classname tab-container", () => {
    expect(component.find("div.tab-container")).to.have.length(1);
  });

  it("should contain <div/> with classname tab-links", () => {
    expect(component.find("div.tab-links")).to.have.length(1);
  });

  it("should contain <div/> with classname homeDiv", () => {
    const homeDiv = component.find("div.homeDiv");
    expect(homeDiv).to.have.length(1);
    expect(homeDiv.prop("className")).to.equal(mockTabs[0].className);
    expect(homeDiv.text()).to.equal(mockTabs[0].text);
  });

  it("should contain <div/> with classname motivationalDiv", () => {
    const motivationalDiv = component.find("div.motivationalDiv");
    expect(motivationalDiv).to.have.length(1);
    expect(motivationalDiv.prop("className")).to.equal(mockTabs[1].className);
    expect(motivationalDiv.text()).to.equal(mockTabs[1].text);
  });

  it("should contain <div/> with classname humorDiv", () => {
    const humorDiv = component.find("div.humorDiv");
    expect(humorDiv).to.have.length(1);
    expect(humorDiv.prop("className")).to.equal(mockTabs[2].className);
    expect(humorDiv.text()).to.equal(mockTabs[2].text);
  });

  it("should contain <div/> with classname positiveDiv", () => {
    const positiveDiv = component.find("div.positiveDiv");
    expect(positiveDiv).to.have.length(1);
    expect(positiveDiv.prop("className")).to.equal(mockTabs[3].className);
    expect(positiveDiv.text()).to.equal(mockTabs[3].text);
  });

  it("should contain <div/> with classname leadershipDiv", () => {
    const leadershipDiv = component.find("div.leadershipDiv");
    expect(leadershipDiv).to.have.length(1);
    expect(leadershipDiv.prop("className")).to.equal(mockTabs[4].className);
    expect(leadershipDiv.text()).to.equal(mockTabs[4].text);
  });

  it("should contain <div/> with classname wisdomDiv", () => {
    const wisdomDiv = component.find("div.wisdomDiv");
    expect(wisdomDiv).to.have.length(1);
    expect(wisdomDiv.prop("className")).to.equal(mockTabs[5].className);
    expect(wisdomDiv.text()).to.equal(mockTabs[5].text);
  });

  it("should call the handleClick prop with the className is clicked", () => {
    const wisdomDiv = component.find("div.wisdomDiv");
    wisdomDiv.simulate("click");
    sinon.assert.calledOnce(mockHandleClick);
  });
});
