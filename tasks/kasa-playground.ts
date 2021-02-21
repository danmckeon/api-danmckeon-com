#!/usr/bin/env ts-node -T

import {getDevices, createTpLinkInstance, getDenHeater, getGreenhouseHeater} from '../lib/kasa'

const main = async () => {
  console.log('kasa-playground');
  const tpLink = await createTpLinkInstance();

  const devices = await getDevices(tpLink);
  console.log('devices', devices);

  const denHeater = await getDenHeater(tpLink);
  console.log('denHeater', denHeater);

  const greenhouseHeater = await getGreenhouseHeater(tpLink);
  console.log('greenhouseHeater', greenhouseHeater);
};

main()
  .then(() => console.log('done.'))
  .catch(e => console.error(e));
