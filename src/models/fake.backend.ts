import { mockDevices } from "../constants";

function fetchDevices() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(mockDevices);
    }, 2500);
  });
}
export { fetchDevices };
