import { shallow } from "enzyme";
import React from "react";
import { mockDevices } from "../constants";
import { MockCommunicator } from "../models";
import { DeviceList } from "./DeviceList";

const mockCommunicator = new MockCommunicator();

describe("doesn't crash", () => {
  it("renders without crashing", () => {
    shallow(
      <DeviceList
        communicator={mockCommunicator}
        devices={mockDevices}
        hasDevices={true}
      />
    );
  });
});

test("basic snapshot test", () => {
  const wrapper = shallow(
    <DeviceList
      communicator={mockCommunicator}
      devices={mockDevices}
      hasDevices={true}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("zero state", () => {
  const wrapper = shallow(
    <DeviceList
      communicator={mockCommunicator}
      devices={[]}
      hasDevices={true}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("loading", () => {
  const wrapper = shallow(
    <DeviceList
      communicator={mockCommunicator}
      devices={[]}
      hasDevices={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
