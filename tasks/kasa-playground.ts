#!/usr/bin/env ts-node -T

import {getDevices} from '../lib/kasa'

const main = async () => {
  console.log('kasa-playground');

  const devices = await getDevices();
  console.log('devices', devices);
};

main()
  .then(() => console.log('done.'))
  .catch(e => console.error(e));
