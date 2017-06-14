import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { Div } from "src/";

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a welcome message", () => {
    render(<Div>Welcome to cxs elements</Div>, node, () => {
      expect(node.innerHTML).toContain("Welcome to cxs elements");
    });
  });
});
