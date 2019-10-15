import { AndroidDevice, Connection } from "../enums";

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

const mockDevices = [
  {
    make: "Dragonboard",
    model: "820c",
    serial: "c0ffee11",
    connection: Connection.USB,
    type: AndroidDevice.DevBoard,
    ip: "127.0.0.1",
    duplicate: false
  },
  {
    make: "Google",
    model: "Pixel 3a",
    serial: "abcd1234",
    connection: Connection.USB,
    type: AndroidDevice.Phone,
    ip: "192.168.2.45",
    duplicate: false
  },
  {
    make: "Google",
    model: "Pixel C",
    serial: "1234abcd",
    connection: Connection.USB,
    type: AndroidDevice.Tablet,
    ip: "127.0.0.1",
    duplicate: false
  },
  {
    make: "Inforce",
    model: "6640",
    serial: "c0ffee22",
    connection: Connection.Network,
    type: AndroidDevice.DevBoard,
    ip: "192.168.2.15",
    duplicate: false
  },
  {
    make: "Samsung",
    model: "Galaxy S6",
    serial: "68cd4ef2",
    connection: Connection.USB,
    type: AndroidDevice.Phone,
    ip: "192.168.2.13",
    duplicate: true
  },
  {
    make: "Samsung",
    model: "Galaxy S6",
    serial: "68cd4ef2",
    connection: Connection.Network,
    type: AndroidDevice.Phone,
    ip: "192.168.2.13",
    duplicate: true
  },
  {
    make: "Raspberry Pi",
    model: "3b",
    serial: "c0ffee32",
    connection: Connection.Network,
    type: AndroidDevice.DevBoard,
    ip: "192.168.2.76",
    duplicate: false
  }
];

export { mockDevices };
