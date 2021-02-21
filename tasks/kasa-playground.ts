#!/usr/bin/env ts-node -T

const main = async () => {
  console.log('kasa-playground');
};

main()
  .then(() => console.log('done.'))
  .catch(e => console.error(e));
