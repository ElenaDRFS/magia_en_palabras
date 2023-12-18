import React from "react";
import { shallow } from "enzyme";
import ClientTaleList from "./ClientTaleListt";

describe("ClientTaleList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientTaleList />);
    expect(wrapper).toMatchSnapshot();
  });
});
