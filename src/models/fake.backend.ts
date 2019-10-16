import { mockDevices } from "../constants";
import { IAndroidDevice } from "../interfaces";

function fetchDevices() {
  return new Promise<IAndroidDevice[]>(resolve => {
    setTimeout(() => {
      resolve(mockDevices);
    }, 2500);
  });
}
export { fetchDevices };
