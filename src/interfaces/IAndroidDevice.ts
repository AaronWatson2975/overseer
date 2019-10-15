import { AndroidDevice, Connection } from "../enums";

export interface IAndroidDevice {
  make: string;
  model: string;
  serial: string;
  ip: string;
  duplicate: boolean;
  type: AndroidDevice;
  connection: Connection;
  offline: boolean;
}
