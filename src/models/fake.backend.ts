import { mockDevices } from "../constants";

function fetchDevices() {
  return setTimeout(() => {
    return mockDevices;
  }, 1000);
}
export { fetchDevices };
