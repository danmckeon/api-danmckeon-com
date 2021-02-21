import { login } from "tplink-cloud-api";

export const init = async () => {
  return await login(process.env.TP_LINK_EMAIL, process.env.TP_LINK_PASSWORD);
}

export const getDevices = async() => {
  const tpLink =  await init();
  const deviceList = await tpLink.getDeviceList();
  return deviceList;
}