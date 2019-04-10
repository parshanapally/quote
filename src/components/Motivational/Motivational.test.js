import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import Motivational from "./Motivational";

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
    return shallow(<Motivational {...props} />);
  }

  it("should exsit", () => {
    expect(component).to.have.length(1);
  });
});
