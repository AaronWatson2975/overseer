import { AndroidDevice, Connection } from "../enums";

/**
 * The interface for the device properties that we will use
 * to display and connect to devices.
 */
export interface IAndroidDevice {
  /**
   * The make of the device.
   */
  make: string;

  /**
   * The model of the device.
   */
  model: string;

  /**
   * The unique serial identifier.
   */
  serial: string;

  /**
   * The private IP address on the main network device.
   */
  ip: string;

  /**
   * Whether or not multiple of this exact device exist
   * in the collection, if they do they will need to be
   * identified by their serial number.
   */
  duplicate: boolean;

  /**
   * The type of device(Phone, Tablet, DevBoard).
   */
  type: AndroidDevice;

  /**
   * The type of connection to the device(Network, USB).
   */
  connection: Connection;

  /**
   * Whether or not the device is offline.
   */
  offline: boolean;
}
