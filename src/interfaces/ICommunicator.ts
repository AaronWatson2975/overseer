import { IAndroidDevice } from "./IAndroidDevice";

export interface ICommunicator {
  fetchDevices(): Promise<IAndroidDevice[]>;
  connect(device: string): void;
}
