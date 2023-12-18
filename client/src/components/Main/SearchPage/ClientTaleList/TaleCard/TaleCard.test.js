import React from "react";
import { shallow } from "enzyme";
import TaleCard from "./TaleCard";

describe("TaleCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaleCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
