import React from "./node_modules/react";
import { expect } from "./node_modules/code";
import { shallow } from "./node_modules/enyzme";
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
