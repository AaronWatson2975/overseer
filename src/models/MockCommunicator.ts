import { mockDevices } from "../constants";
import { IAndroidDevice, ICommunicator } from "../interfaces";

class MockCommunicator implements ICommunicator {
  public connect(device: string) {
    // Connect
  }

  public fetchDevices() {
    return new Promise<IAndroidDevice[]>(resolve => {
      setTimeout(() => {
        resolve(mockDevices);
      }, 2500);
    });
  }
}

export { MockCommunicator };
