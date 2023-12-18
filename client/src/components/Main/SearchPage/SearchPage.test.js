import React from "react";
import { shallow } from "enzyme";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
