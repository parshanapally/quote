import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Home from "./Home";

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
    return shallow(<Home {...props} />);
  }

  it("should exsit", () => {
    expect(component).to.have.length(1);
  });
});
