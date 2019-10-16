import { shallow } from "enzyme";
import React from "react";
import { mockDevices } from "../constants";
import { DeviceList } from "./DeviceList";

describe("doesn't crash", () => {
  it("renders without crashing", () => {
    shallow(<DeviceList devices={mockDevices} hasDevices={true} />);
  });
});

test("basic snapshot test", () => {
  const wrapper = shallow(
    <DeviceList devices={mockDevices} hasDevices={true} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("zero state", () => {
  const wrapper = shallow(<DeviceList devices={[]} hasDevices={true} />);
  expect(wrapper).toMatchSnapshot();
});

test("loading", () => {
  const wrapper = shallow(<DeviceList devices={[]} hasDevices={false} />);
  expect(wrapper).toMatchSnapshot();
});
