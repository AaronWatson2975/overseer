import { shallow } from "enzyme";
import React from "react";
import { Device } from "./Device";
import { mockDevices } from "../constants";

describe("doesn't crash", () => {
  it("renders without crashing", () => {
    shallow(<Device device={mockDevices[0]} />);
  });
});

test("basic snapshot test", () => {
  const wrapper = shallow(<Device device={mockDevices[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("duplicate test", () => {
  const wrapper = shallow(<Device device={mockDevices[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("offline test", () => {
  const wrapper = shallow(<Device device={mockDevices[7]} />);
  expect(wrapper).toMatchSnapshot();
});
