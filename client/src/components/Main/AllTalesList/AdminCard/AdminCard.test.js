import React from "react";
import { shallow } from "enzyme";
import AdminCard from "./AdminCard";

describe("AdminCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
