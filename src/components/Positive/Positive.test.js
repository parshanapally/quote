import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Positive from "./Positive";

describe("Given Motivational", () => {
  let component;

  function requiredProps(overrides = {}) {
    return {
      ...overrides
    };
  }

  beforeEach(() => {
    component = renderComponent();
  });

  function renderComponent(props = requiredProps) {
    return shallow(<Positive {...props} />);
  }

  it("should exsit", () => {
    expect(component).to.have.length(1);
  });
});
