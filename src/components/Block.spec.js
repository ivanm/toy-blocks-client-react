import React from "react";
import { create } from "react-test-renderer";
import Block from "../components/Block";

describe("<Block />", () => {
  it("should match snapshot", () => {
    const id = "1";
    const text = "Demo Text";
    const component = create(<Block id={id} text={text} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
