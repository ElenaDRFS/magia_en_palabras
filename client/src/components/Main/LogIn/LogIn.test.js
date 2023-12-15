import React from "react";
import { shallow } from "enzyme";
import LogIn from "./LogIn";

describe("LogIn", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
