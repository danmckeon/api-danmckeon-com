import { login } from "tplink-cloud-api";

export const createTpLinkInstance = async () => {
  return await login(process.env.TP_LINK_EMAIL, process.env.TP_LINK_PASSWORD);
}

export const getDenHeater = async (tpLink) => {
  return await tpLink.getHS100('Den Heater');
}

export const getGreenhouseHeater = async (tpLink) => {
  return await tpLink.getHS100('Greenhouse heater');
}

export const getDevices = async(tpLink) => {
  const deviceList = await tpLink.getDeviceList();
  return deviceList;
}