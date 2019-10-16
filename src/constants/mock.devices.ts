import { AndroidDevice, Connection } from "../enums";
import { IAndroidDevice } from "../interfaces";

/**
 * Data interface
 *
 * make - The make of the Androiddevice
 * model - The model of the Androiddevice
 * serial - The serial number of the Androiddevice
 * connection - The way the Androiddevice is connected
 * type - The type of Androiddevice(phone, tablet, etc.)
 * ip - The ip address of the Androiddevice
 * duplicate - Whether another Androiddevice of the same
 * make and model exists in the collection
 */

const mockDevices: IAndroidDevice[] = [
  {
    connection: Connection.USB,
    duplicate: false,
    ip: "127.0.0.1",
    make: "Dragonboard",
    model: "820c",
    offline: false,
    serial: "c0ffee11",
    type: AndroidDevice.DevBoard,
  },
  {
    connection: Connection.USB,
    duplicate: true,
    ip: "192.168.2.45",
    make: "Google",
    model: "Pixel 3a",
    offline: false,
    serial: "a54bde3d",
    type: AndroidDevice.Phone,
  },
  {
    connection: Connection.USB,
    duplicate: true,
    ip: "192.168.2.48",
    make: "Google",
    model: "Pixel 3a",
    offline: false,
    serial: "76cda2ea",
    type: AndroidDevice.Phone,
  },
  {
    connection: Connection.USB,
    duplicate: false,
    ip: "127.0.0.1",
    make: "Google",
    model: "Pixel C",
    offline: false,
    serial: "1234abcd",
    type: AndroidDevice.Tablet,
  },
  {
    connection: Connection.Network,
    duplicate: false,
    ip: "192.168.2.15",
    make: "Inforce",
    model: "6640",
    offline: false,
    serial: "c0ffee22",
    type: AndroidDevice.DevBoard,
  },
  {
    connection: Connection.USB,
    duplicate: false,
    ip: "192.168.2.13",
    make: "Samsung",
    model: "Galaxy S6",
    offline: false,
    serial: "68cd4ef2",
    type: AndroidDevice.Phone,
  },
  {
    connection: Connection.Network,
    duplicate: false,
    ip: "192.168.2.13",
    make: "Samsung",
    model: "Galaxy S6",
    offline: false,
    serial: "68cd4ef2",
    type: AndroidDevice.Phone,
  },
  {
    connection: Connection.Network,
    duplicate: false,
    ip: "192.168.2.76",
    make: "Raspberry Pi",
    model: "3b",
    offline: true,
    serial: "c0ffee32",
    type: AndroidDevice.DevBoard,
  },
];

export { mockDevices };
