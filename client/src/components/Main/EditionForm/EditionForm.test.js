import React from "react";
import { shallow } from "enzyme";
import EditionForm from "./EditionForm";

describe("EditionForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditionForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
