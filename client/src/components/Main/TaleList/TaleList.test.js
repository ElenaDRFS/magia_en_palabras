import React from "react";
import { shallow } from "enzyme";
import TaleList from "./TaleList";

describe("TaleList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaleList />);
    expect(wrapper).toMatchSnapshot();
  });
});
